const tarotDeck = Array.isArray(window.tarotDeckData) ? window.tarotDeckData : [];
const cardRoles = ["现状", "阻碍", "建议"];
const AI_READING_ENDPOINT = "/api/reading";
const DEFAULT_BIRTHDAY_NOTE = "真实生日不清楚的话，按接回家那天填也可以。";

const photoInput = document.querySelector("#petPhoto");
const photoPreview = document.querySelector("#photoPreview");
const uploadPlaceholder = document.querySelector("#uploadPlaceholder");
const petNameInput = document.querySelector("#petNameInput");
const petGenderInput = document.querySelector("#petGenderInput");
const petBirthdayInput = document.querySelector("#petBirthdayInput");
const petBreedInput = document.querySelector("#petBreedInput");
const questionInput = document.querySelector("#questionInput");
const drawButton = document.querySelector("#drawButton");
const resetButton = document.querySelector("#resetButton");
const statusText = document.querySelector("#statusText");
const petChip = document.querySelector("#petChip");
const petChipAvatar = document.querySelector("#petChipAvatar");
const questionEcho = document.querySelector("#questionEcho");
const cardsGrid = document.querySelector("#cardsGrid");
const readingOutput = document.querySelector("#readingOutput");
const cardTemplate = document.querySelector("#cardTemplate");

photoInput.addEventListener("change", handlePhotoPreview);
drawButton.addEventListener("click", runReading);
resetButton.addEventListener("click", resetReading);

if (tarotDeck.length !== 78) {
  console.warn(`Expected 78 tarot cards, received ${tarotDeck.length}.`);
}

function handlePhotoPreview(event) {
  const [file] = event.target.files || [];

  if (!file) {
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    const result = reader.result;
    photoPreview.src = result;
    photoPreview.hidden = false;
    uploadPlaceholder.hidden = true;
    petChipAvatar.textContent = "";
    petChipAvatar.style.backgroundImage = `url("${result}")`;
    refreshPetChip();
  };
  reader.readAsDataURL(file);
}

async function runReading() {
  const pet = collectPetProfile();
  const question = questionInput.value.trim();

  if (!validateBeforeReading(pet, question)) {
    return;
  }

  const selectedCards = drawThreeCards();
  questionEcho.textContent = question;
  refreshPetChip(pet);
  renderCards(selectedCards);
  renderLoadingReading();

  statusText.textContent =
    "抽牌完成。正位代表能量顺着走，逆位不是坏事，只是提醒你这块还有点拧。";
  drawButton.disabled = true;
  drawButton.textContent = "解牌中...";

  try {
    const aiReading = await requestAiReading(question, selectedCards, pet);
    if (aiReading) {
      renderAiReading(aiReading, pet);
      statusText.textContent = "AI 解牌完成，今天的 78 张牌库已经认真给你家主子开完会。";
      return;
    }

    renderReading(question, selectedCards, pet);
  } catch (error) {
    console.warn("AI reading failed, falling back to local reading:", error);
    statusText.textContent = "AI 接口暂时没接上，先用本地解牌兜底。";
    renderReading(question, selectedCards, pet);
  } finally {
    drawButton.disabled = false;
    drawButton.textContent = "抽三张牌";
  }
}

function validateBeforeReading(pet, question) {
  if (!photoInput.files || photoInput.files.length === 0) {
    statusText.textContent = "先上传照片，牌堆需要先认认今天来问事的是哪位小朋友。";
    photoInput.focus();
    return false;
  }

  if (!pet.name) {
    statusText.textContent = "先填名字，不然牌都不知道该叫哪位主角上台。";
    petNameInput.focus();
    return false;
  }

  if (!pet.gender) {
    statusText.textContent = "性别先补上，这样牌面写关系时才不至于一直绕着说。";
    petGenderInput.focus();
    return false;
  }

  if (!pet.birthday) {
    statusText.textContent = "生日先填上；如果真实生日不清楚，就按接回家那天填。";
    petBirthdayInput.focus();
    return false;
  }

  if (!pet.breed) {
    statusText.textContent = "品种也一起填上，越完整的档案，解牌就越不容易泛。";
    petBreedInput.focus();
    return false;
  }

  if (!question) {
    statusText.textContent = "先写下问题，牌会高冷，但也得知道你到底想问什么。";
    questionInput.focus();
    return false;
  }

  return true;
}

function collectPetProfile() {
  return {
    name: petNameInput.value.trim(),
    gender: petGenderInput.value.trim(),
    birthday: petBirthdayInput.value,
    breed: petBreedInput.value.trim(),
    birthdayNote: DEFAULT_BIRTHDAY_NOTE,
    hasPhoto: Boolean(photoInput.files && photoInput.files.length > 0)
  };
}

function refreshPetChip(profile = collectPetProfile()) {
  const title = profile.name ? `${profile.name} 的档案` : "还没补全档案";
  const detailLines = [];

  if (profile.breed) {
    detailLines.push(profile.breed);
  }

  if (profile.gender) {
    detailLines.push(profile.gender);
  }

  if (profile.birthday) {
    detailLines.push(`生日 ${formatBirthday(profile.birthday)}`);
  }

  petChip.querySelector("strong").textContent = title;
  petChip.querySelector("p").textContent = detailLines.length
    ? detailLines.join("\n")
    : "上传照片并补全资料后，这里会显示你家毛孩子的专属档案。";

  if (!profile.hasPhoto) {
    petChipAvatar.textContent = profile.name ? profile.name.slice(0, 1) : "爪";
    petChipAvatar.style.backgroundImage = "";
  }
}

function formatBirthday(value) {
  return String(value).replaceAll("-", ".");
}

function resetReading() {
  photoInput.value = "";
  petNameInput.value = "";
  petGenderInput.value = "";
  petBirthdayInput.value = "";
  petBreedInput.value = "";
  questionInput.value = "";
  photoPreview.hidden = true;
  photoPreview.removeAttribute("src");
  uploadPlaceholder.hidden = false;
  petChipAvatar.textContent = "爪";
  petChipAvatar.style.backgroundImage = "";
  petChip.querySelector("strong").textContent = "还没上传照片";
  petChip.querySelector("p").textContent = "上传照片并补全资料后，这里会显示你家毛孩子的专属档案。";
  questionEcho.textContent = "你还没提问，牌堆正在假装听不见。";
  statusText.textContent = "小提示：正位代表这股能量比较顺，逆位不是坏事，只是说明有点别扭、卡住，或者还没用对劲。";
  cardsGrid.innerHTML = `
    <article class="tarot-card placeholder-card">
      <div class="card-topline">等待抽牌</div>
      <div class="card-icon">✦</div>
      <h3>今天会抽到哪三张？</h3>
      <p>这次会从完整 78 张牌里抽出三张，让猫言猫语和人话都对得上。</p>
    </article>
  `;
  readingOutput.innerHTML = `
    <div class="empty-state">
      <h3>解牌区待命中</h3>
      <p>先上传照片、补全宠物资料，再点击“抽三张牌”。</p>
    </div>
  `;
}

function drawThreeCards() {
  const pool = [...tarotDeck];
  const selection = [];

  for (let index = 0; index < 3; index += 1) {
    const pickedIndex = Math.floor(Math.random() * pool.length);
    const card = pool.splice(pickedIndex, 1)[0];
    const orientation = Math.random() > 0.5 ? "upright" : "reversed";

    selection.push({
      ...card,
      role: cardRoles[index],
      orientation,
      orientationLabel: orientation === "upright" ? "正位" : "逆位",
      content: card[orientation]
    });
  }

  return selection;
}

function renderCards(cards) {
  cardsGrid.innerHTML = "";

  cards.forEach((card) => {
    const node = cardTemplate.content.firstElementChild.cloneNode(true);
    const [start, end] = card.palette;
    node.style.background = `linear-gradient(160deg, ${start}, ${end})`;
    node.style.color = "#fffaf4";
    node.querySelector(".card-topline").textContent = card.role;
    node.querySelector(".card-arcana").textContent = buildArcanaLabel(card);
    node.querySelector(".card-icon").textContent = card.icon;
    node.querySelector(".card-scene").textContent = card.scene;
    node.querySelector(".card-title").textContent = card.name;
    node.querySelector(".card-orientation").textContent = `${card.orientationLabel}：${getOrientationHint(card.orientation)}`;
    node.querySelector(".card-keywords").textContent = `关键词：${card.content.keywords}`;
    cardsGrid.appendChild(node);
  });
}

function buildArcanaLabel(card) {
  if (card.arcana === "major") {
    return `大阿卡那 · ${String(card.number).padStart(2, "0")}`;
  }

  return `小阿卡那 · ${card.suit} · ${card.rank}`;
}

function renderLoadingReading() {
  readingOutput.innerHTML = `
    <div class="empty-state">
      <h3>正在解牌</h3>
      <p>三张牌和宠物档案都已经就位，正在翻译成比较像人话的版本。</p>
    </div>
  `;
}

function renderReading(question, cards, pet) {
  const overallVibe = buildOverallVibe(cards, pet);
  const overallSummary = buildOverallSummary(question, cards, pet);
  const finalLine = buildFinalLine(cards, pet);
  const details = cards
    .map(
      (card) => `
        <div class="reading-block">
          <h4>${card.role} · ${card.name} ${card.orientationLabel}</h4>
          <p><strong>${card.orientationLabel}是什么意思：</strong>${escapeHtml(getOrientationHint(card.orientation))}</p>
          <p><strong>这张牌代表什么：</strong>${escapeHtml(card.content.meaning)}</p>
          <p><strong>对你的问题意味着什么：</strong>${escapeHtml(buildQuestionMeaning(question, card, pet))}</p>
          <p><strong>你要注意什么：</strong>${escapeHtml(card.content.advice)}</p>
        </div>
      `
    )
    .join("");

  readingOutput.innerHTML = `
    <div class="reading-summary">
      <div class="reading-block">
        <h3>整体气氛</h3>
        <p>${escapeHtml(overallVibe)}</p>
      </div>
      <div class="reading-list">
        ${details}
      </div>
      <div class="reading-block">
        <h3>合起来怎么说</h3>
        <p>${escapeHtml(overallSummary)}</p>
      </div>
      <div class="reading-block">
        <h3>一句猫言狗语</h3>
        <p>${escapeHtml(finalLine)}</p>
      </div>
    </div>
  `;
}

async function requestAiReading(question, cards, pet) {
  if (!AI_READING_ENDPOINT) {
    return null;
  }

  const payload = {
    question,
    spread: "three-card-pet-tarot",
    tone:
      "中文，轻松幽默，通俗易懂。先解释正位/逆位，再解释牌面代表什么、意味着什么、要注意什么。要结合宠物档案。",
    pet,
    cards: cards.map((card) => ({
      role: card.role,
      name: card.name,
      arcana: card.arcana === "major" ? "大阿卡那" : "小阿卡那",
      suit: card.suit || "",
      rank: card.rank || "",
      orientation: card.orientationLabel,
      keywords: card.content.keywords,
      baseMeaning: card.content.meaning,
      baseAdvice: card.content.advice
    }))
  };

  const response = await fetch(AI_READING_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error(`AI reading request failed: ${response.status}`);
  }

  const data = await response.json();
  return normalizeAiReading(data);
}

function normalizeAiReading(data) {
  if (!data || typeof data !== "object") {
    throw new Error("AI reading response must be a JSON object.");
  }

  const cards = Array.isArray(data.cards) ? data.cards : [];
  if (!data.overall || !data.summary || !data.oneLiner || cards.length !== 3) {
    throw new Error("AI reading response is missing required fields.");
  }

  return {
    overall: String(data.overall),
    cards: cards.map((card) => ({
      role: String(card.role || ""),
      title: String(card.title || ""),
      orientationMeaning: String(card.orientationMeaning || ""),
      meaning: String(card.meaning || ""),
      questionMeaning: String(card.questionMeaning || ""),
      advice: String(card.advice || "")
    })),
    summary: String(data.summary),
    oneLiner: String(data.oneLiner)
  };
}

function renderAiReading(reading, pet) {
  const details = reading.cards
    .map(
      (card) => `
        <div class="reading-block">
          <h4>${escapeHtml(card.role)} · ${escapeHtml(card.title)}</h4>
          <p><strong>正位/逆位是什么意思：</strong>${escapeHtml(card.orientationMeaning)}</p>
          <p><strong>这张牌代表什么：</strong>${escapeHtml(card.meaning)}</p>
          <p><strong>对你的问题意味着什么：</strong>${escapeHtml(card.questionMeaning)}</p>
          <p><strong>你要注意什么：</strong>${escapeHtml(card.advice)}</p>
        </div>
      `
    )
    .join("");

  readingOutput.innerHTML = `
    <div class="reading-summary">
      <div class="reading-block">
        <h3>整体气氛</h3>
        <p>${escapeHtml(reading.overall)}</p>
      </div>
      <div class="reading-list">
        ${details}
      </div>
      <div class="reading-block">
        <h3>合起来怎么说</h3>
        <p>${escapeHtml(reading.summary)}</p>
      </div>
      <div class="reading-block">
        <h3>一句猫言狗语</h3>
        <p>${escapeHtml(reading.oneLiner)}</p>
      </div>
      <div class="reading-block">
        <h3>本次主角</h3>
        <p>${escapeHtml(buildPetLine(pet))}</p>
      </div>
    </div>
  `;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getOrientationHint(orientation) {
  if (orientation === "upright") {
    return "这股能量比较顺，事情通常是在往前走。";
  }

  return "不是坏事，只是这里有点卡、有点拧，或者你还没用对劲。";
}

function buildOverallVibe(cards, pet) {
  const uprightCount = cards.filter((card) => card.orientation === "upright").length;
  const petLead = pet && pet.name ? `${pet.name}这件事上，` : "";

  if (uprightCount === 3) {
    return `${petLead}这组牌整体挺给力，说明事情并不是没路，更多是你已经摸到门把手了。现在最重要的不是怀疑，而是把动作做出来。`;
  }

  if (uprightCount === 2) {
    return `${petLead}整体方向不算差，牌面像在说：有戏，但中间有一个点明显卡住。把那团绊脚毛线理顺，局面会顺很多。`;
  }

  if (uprightCount === 1) {
    return `${petLead}这组牌的气氛有点拧，机会不是没有，而是心态、节奏或沟通里有几处打结。`;
  }

  return `${petLead}三张牌都在提醒你先别急着喊冲。先停一下、看清楚、再行动，会比硬顶更省事。`;
}

function buildOverallSummary(question, cards, pet) {
  const names = cards.map((card) => card.name).join("、");
  const advice = cards[2].content.advice;
  const petLead = pet && pet.name ? `围绕${pet.name}和“${question}”这件事，` : `围绕“${question}”这件事，`;
  return `${petLead}${names} 组合起来更像是在告诉你：先看清现状，再处理真正的卡点，最后按照更稳的方式往前走。尤其最后这张建议牌说得很明确：${advice}`;
}

function buildFinalLine(cards, pet) {
  const upbeat = cards.filter((card) => card.orientation === "upright").length >= 2;
  const petName = pet && pet.name ? pet.name : "它";
  const lines = upbeat
    ? [
        `${petName}这组牌的翻译是：可以行动，但别一边冲一边脑补翻车现场。`,
        `今天的牌面口风很统一：${petName}这事有机会，别先自己把自己劝退。`,
        `一句话总结：不是没戏，是别把内心小剧场拍成连续剧。`
      ]
    : [
        `本次牌面更像一句提醒：先顺毛，再谈理想，不然谁都容易炸。`,
        `翻译成人话就是：先把最乱的那根线理出来，再谈下一步。`,
        `${petName}的牌桌锐评：现在需要的不是瞎冲，是冷静。`
      ];

  return lines[Math.floor(Math.random() * lines.length)];
}

function buildQuestionMeaning(question, card, pet) {
  const prefix =
    card.role === "现状"
      ? "眼下最真实的状态"
      : card.role === "阻碍"
        ? "这件事里最容易绊住你的点"
        : "这组牌最想给你的行动提醒";
  const petName = pet && pet.name ? pet.name : "它";

  if (/喜欢|爱|亲|依赖|信任|主人|讨厌|关系/.test(question)) {
    if (card.role === "现状") {
      return `${prefix}，就藏在“${card.content.keywords}”里。放到这个问题上看，${petName}和眼前的人或环境之间已经有明显连接。`;
    }

    if (card.role === "阻碍") {
      return `${prefix}，就藏在“${card.content.keywords}”里。提醒你别把${petName}偶尔的小动作直接解释成终极态度。`;
    }

    return `${prefix}，就藏在“${card.content.keywords}”里。建议你用稳定陪伴和具体互动去验证，而不是只靠猜。`;
  }

  return `${prefix}，就藏在“${card.content.keywords}”这几个词里。放到“${question}”这个问题上，它更像在提醒你观察${petName}当下最明显的信号。`;
}

function buildPetLine(pet) {
  const chunks = [];

  if (pet && pet.name) {
    chunks.push(pet.name);
  }

  if (pet && pet.breed) {
    chunks.push(pet.breed);
  }

  if (pet && pet.gender) {
    chunks.push(pet.gender);
  }

  if (pet && pet.birthday) {
    chunks.push(`生日 ${formatBirthday(pet.birthday)}`);
  }

  return chunks.join(" / ") || "宠物档案未补全";
}
