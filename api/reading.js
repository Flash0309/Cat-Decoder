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
      name: String((body.pet && body.pet.name) || "").trim(),
      gender: String((body.pet && body.pet.gender) || "").trim(),
      birthday: String((body.pet && body.pet.birthday) || "").trim(),
      breed: String((body.pet && body.pet.breed) || "").trim(),
      birthdayNote: String((body.pet && body.pet.birthdayNote) || "").trim(),
      hasPhoto: Boolean(body.pet && body.pet.hasPhoto)
    },
    cards: cards.map((card) => ({
      role: String(card.role || "").trim(),
      name: String(card.name || "").trim(),
      arcana: String(card.arcana || "").trim(),
      suit: String(card.suit || "").trim(),
      rank: String(card.rank || "").trim(),
      orientation: String(card.orientation || "").trim(),
      keywords: String(card.keywords || "").trim(),
      baseMeaning: String(card.baseMeaning || "").trim(),
      baseAdvice: String(card.baseAdvice || "").trim()
    }))
  };
}

async function requestReadingFromModel({ apiKey, baseUrl, model, payload }) {
  const localReading = buildLocalReading(payload);

  try {
    const aiSummary = await fetchAiSummary({
      apiKey,
      baseUrl,
      model,
      payload,
      localReading
    });

    return {
      ...localReading,
      overall: aiSummary.overall,
      summary: aiSummary.summary,
      oneLiner: aiSummary.oneLiner
    };
  } catch (error) {
    console.warn("AI summary failed, using local reading:", error);
    return localReading;
  }
}

async function fetchAiSummary({ apiKey, baseUrl, model, payload, localReading }) {
  const response = await fetch(`${baseUrl}/chat/completions`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model,
      temperature: 0.5,
      max_tokens: 500,
      response_format: { type: "json_object" },
      messages: buildSummaryMessages(payload, localReading)
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
  validateSummaryShape(parsed);

  if (looksTruncatedSummary(parsed)) {
    throw new Error("AI summary appears truncated.");
  }

  return parsed;
}

function buildSummaryMessages(payload, localReading) {
  return [
    {
      role: "system",
      content: [
        "你是一个宠物塔罗解牌助手。",
        "你的任务是只补充整体解读，不要逐张解释牌。",
        "必须严格返回 JSON，不要返回 markdown，不要返回代码块。",
        "输出字段必须只有 overall、summary、oneLiner。",
        "每个字段只写一句完整中文，句末必须有句号、问号或感叹号。",
        "不要输出 cards 字段。"
      ].join(" ")
    },
    {
      role: "user",
      content: JSON.stringify({
        instruction: "根据问题和三张牌，输出 overall、summary、oneLiner。直接回答问题，轻松但不要空泛。",
        question: payload.question,
        pet: payload.pet,
        cards: payload.cards,
        fallbackReading: {
          overall: localReading.overall,
          summary: localReading.summary,
          oneLiner: localReading.oneLiner
        },
        responseShape: {
          overall: "一句整体气氛说明。",
          summary: "一句合牌总结。",
          oneLiner: "一句轻松总结。"
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

function looksTruncatedSummary(data) {
  return [data.overall, data.summary, data.oneLiner].some((value) => looksTruncatedText(value));
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

  return values.some((value) => looksTruncatedText(value));
}

function looksTruncatedText(value) {
  const text = String(value || "").trim();
  if (!text) {
    return true;
  }

  const hasEnding = /[。！？.!?」』】]$/.test(text);
  const tooAbrupt = /[，、：；]$/.test(text);
  return !hasEnding || tooAbrupt;
}

function validateSummaryShape(data) {
  if (!data || typeof data !== "object") {
    throw new Error("Response JSON must be an object.");
  }

  if (!data.overall || !data.summary || !data.oneLiner) {
    throw new Error("Response JSON is missing top-level fields.");
  }
}

function validateOutgoingShape(data) {
  validateSummaryShape(data);

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

function buildLocalReading(payload) {
  const petIntro = buildPetIntro(payload.pet);
  const petSubject = buildPetSubject(payload.pet);
  const cards = payload.cards.map((card) => ({
    role: card.role,
    title: `${card.name} ${card.orientation}`,
    orientationMeaning: getOrientationMeaning(card.orientation),
    meaning: ensureSentence(card.baseMeaning || `这张牌的关键词是：${card.keywords}`),
    questionMeaning: buildQuestionMeaning(payload.question, card, payload.pet),
    advice: ensureSentence(card.baseAdvice || "先观察具体表现，再做判断。")
  }));

  const names = payload.cards.map((card) => `${card.name}${card.orientation}`).join("、");
  const positiveCards = payload.cards.filter((card) => card.orientation.includes("正")).length;
  const isPetLikeQuestion = /喜欢|爱|亲|依赖|信任|主人|讨厌|关系/.test(payload.question);

  const overall = isPetLikeQuestion
    ? positiveCards >= 2
      ? `整体看，${petSubject}和当下的人与环境是有亲近感的，只是表达不会像人类想象得那么直白。`
      : `整体看，${petSubject}的态度不是简单的喜欢或不喜欢，更像是还在确认安全感。`
    : `整体看，${petIntro}${names} 这组三张牌提示你先看清关系状态，再决定下一步。`;

  const summary = isPetLikeQuestion
    ? `结合${petSubject}的牌面 ${names}，这件事更偏向“有好感和连接”，但不要只靠单个动作下结论。`
    : `结合${petIntro}${names}，这组牌建议你把现状、阻碍和行动建议分开看。`;

  const oneLiner = isPetLikeQuestion
    ? "一句话：它大概率不是不喜欢，只是表达方式可能比较有自己的节奏。"
    : "一句话：先别急着下结论，把最明确的信号抓住。";

  const reading = {
    overall,
    cards,
    summary,
    oneLiner
  };

  validateOutgoingShape(reading);
  return reading;
}

function getOrientationMeaning(orientation) {
  if (String(orientation).includes("正")) {
    return "正位表示这张牌的能量比较顺，事情更容易自然推进。";
  }

  return "逆位不是坏事，通常表示这股能量有点卡住，需要慢一点看清。";
}

function buildQuestionMeaning(question, card, pet) {
  const petName = pet && pet.name ? pet.name : "它";
  const keywords = card.keywords || card.name;

  if (/喜欢|爱|亲|依赖|信任|主人|讨厌|关系/.test(question)) {
    if (card.role === "现状") {
      return `放到这个问题里，“${keywords}”说明${petName}和主人之间已经有明显连接。`;
    }

    if (card.role === "阻碍") {
      return `这张牌提醒你，别把${petName}短暂的冷淡或小动作直接理解成不喜欢。`;
    }

    return `建议你用稳定陪伴和具体互动去验证${petName}的感情，而不是只靠猜。`;
  }

  return `放到“${question}”里看，重点在“${keywords}”这几个信号上。`;
}

function buildPetIntro(pet) {
  if (!pet || !pet.name) {
    return "";
  }

  return `关于${pet.name}这件事，`;
}

function buildPetSubject(pet) {
  if (!pet || !pet.name) {
    return "它";
  }

  return pet.name;
}

function ensureSentence(text) {
  const value = String(text || "").trim();
  if (!value) {
    return "先观察具体表现，再做判断。";
  }

  return /[。！？.!?」』】]$/.test(value) ? value : `${value}。`;
}
