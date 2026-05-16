const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type"
};

const DEFAULT_BASE_URL = "https://api.openai.com/v1";
const DEFAULT_MODEL = "gpt-4.1-mini";

async function handler(req, res) {
  setCorsHeaders(res);

  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }

  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const apiKey = process.env.AI_API_KEY;
  const baseUrl = (process.env.AI_API_BASE_URL || DEFAULT_BASE_URL).replace(/\/$/, "");
  const model = process.env.AI_MODEL || DEFAULT_MODEL;

  if (!apiKey) {
    res.status(500).json({ error: "Missing AI_API_KEY" });
    return;
  }

  try {
    const payload = normalizeIncomingPayload(req.body);
    const aiResponse = await requestReadingFromModel({
      apiKey,
      baseUrl,
      model,
      payload
    });

    res.status(200).json(aiResponse);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    res.status(500).json({ error: message });
  }
}

module.exports = handler;
module.exports.handler = handler;

function setCorsHeaders(res) {
  Object.entries(CORS_HEADERS).forEach(([key, value]) => {
    res.setHeader(key, value);
  });
}

function normalizeIncomingPayload(body) {
  if (!body || typeof body !== "object") {
    throw new Error("Request body must be a JSON object.");
  }

  const question = String(body.question || "").trim();
  const cards = Array.isArray(body.cards) ? body.cards : [];

  if (!question) {
    throw new Error("Missing question.");
  }

  if (cards.length !== 3) {
    throw new Error("Expected exactly 3 cards.");
  }

  return {
    question,
    spread: String(body.spread || "three-card-pet-tarot"),
    tone: String(
      body.tone ||
        "中文，轻松幽默，通俗易懂。先解释正位/逆位，再解释牌面代表什么、意味着什么、要注意什么。"
    ),
    pet: {
      hasPhoto: Boolean(body.pet && body.pet.hasPhoto)
    },
    cards: cards.map((card) => ({
      role: String(card.role || "").trim(),
      name: String(card.name || "").trim(),
      orientation: String(card.orientation || "").trim(),
      keywords: String(card.keywords || "").trim(),
      baseMeaning: String(card.baseMeaning || "").trim(),
      baseAdvice: String(card.baseAdvice || "").trim()
    }))
  };
}

async function requestReadingFromModel({ apiKey, baseUrl, model, payload }) {
  const primary = await fetchReading({
    apiKey,
    baseUrl,
    model,
    payload,
    compact: false
  });

  if (!looksTruncated(primary)) {
    return primary;
  }

  return fetchReading({
    apiKey,
    baseUrl,
    model,
    payload,
    compact: true
  });
}

async function fetchReading({ apiKey, baseUrl, model, payload, compact }) {
  const response = await fetch(`${baseUrl}/chat/completions`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model,
      temperature: compact ? 0.5 : 0.8,
      max_tokens: compact ? 900 : 1800,
      response_format: { type: "json_object" },
      messages: buildMessages(payload, compact)
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Upstream AI request failed: ${response.status} ${errorText}`);
  }

  const data = await response.json();
  const content = data?.choices?.[0]?.message?.content;

  if (!content || typeof content !== "string") {
    throw new Error("Model returned an empty response.");
  }

  const parsed = safeJsonParse(content);
  validateOutgoingShape(parsed);
  return parsed;
}

function buildMessages(payload, compact) {
  return [
    {
      role: "system",
      content: [
        "你是一个宠物塔罗解牌助手。",
        "你的任务是根据用户问题和三张塔罗牌，输出轻松幽默、通俗易懂的中文解读。",
        "不要神神叨叨，不要恐吓，不要长篇空话。",
        "必须严格返回 JSON，不要返回 markdown，不要返回代码块。",
        "输出字段必须只有 overall、cards、summary、oneLiner。",
        "cards 必须是长度为 3 的数组，每项都包含 role、title、orientationMeaning、meaning、questionMeaning、advice。",
        compact
          ? "所有字段必须短。overall、summary、oneLiner 各 1 句。每张牌的 4 个说明字段各 1 句，每句尽量不超过 35 个汉字。"
          : "每个字符串字段控制在 1 到 3 句，完整说完，不要截断。"
      ].join(" ")
    },
    {
      role: "user",
      content: JSON.stringify({
        instruction:
          compact
            ? "直接回答问题。严格简短，每个字段只写完整的一句话。"
            : "请先解释正位/逆位的意思，再说明牌面代表什么、对这个问题意味着什么、要注意什么。语气像聪明一点的朋友，不要端着。避免空话，直接回答问题。",
        tone: payload.tone,
        spread: payload.spread,
        pet: payload.pet,
        question: payload.question,
        cards: payload.cards,
        responseShape: {
          overall: "整体气氛说明",
          cards: [
            {
              role: "现状",
              title: "愚者 正位",
              orientationMeaning: "正位/逆位说明",
              meaning: "这张牌代表什么",
              questionMeaning: "对问题意味着什么",
              advice: "要注意什么"
            }
          ],
          summary: "三张牌合起来怎么说",
          oneLiner: "一句轻松总结"
        }
      })
    }
  ];
}

function safeJsonParse(content) {
  try {
    return JSON.parse(content);
  } catch {
    const match = content.match(/\{[\s\S]*\}/);
    if (!match) {
      throw new Error("Model response was not valid JSON.");
    }
    return JSON.parse(match[0]);
  }
}

function looksTruncated(data) {
  const values = [
    data.overall,
    data.summary,
    data.oneLiner,
    ...data.cards.flatMap((card) => [
      card.title,
      card.orientationMeaning,
      card.meaning,
      card.questionMeaning,
      card.advice
    ])
  ];

  return values.some((value) => {
    const text = String(value || "").trim();
    if (!text) {
      return true;
    }

    const hasEnding = /[。！？.!?」』】]$/.test(text);
    const tooAbrupt = /[，、：；]$/.test(text);
    return !hasEnding || tooAbrupt;
  });
}

function validateOutgoingShape(data) {
  if (!data || typeof data !== "object") {
    throw new Error("Response JSON must be an object.");
  }

  if (!data.overall || !data.summary || !data.oneLiner) {
    throw new Error("Response JSON is missing top-level fields.");
  }

  if (!Array.isArray(data.cards) || data.cards.length !== 3) {
    throw new Error("Response JSON must include 3 cards.");
  }

  data.cards.forEach((card, index) => {
    const missing =
      !card ||
      !card.role ||
      !card.title ||
      !card.orientationMeaning ||
      !card.meaning ||
      !card.questionMeaning ||
      !card.advice;

    if (missing) {
      throw new Error(`Card ${index + 1} is missing required fields.`);
    }
  });
}
