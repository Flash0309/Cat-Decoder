const tarotDeck = [
  {
    name: "愚者",
    icon: "🐾",
    palette: ["#f6d365", "#fda085"],
    upright: {
      keywords: "开始、好奇、想试试看",
      meaning: "新故事要开场了，别一直在门口闻半天，差不多该迈步了。",
      advice: "可以大胆试，但别把计划写得像猫抓过一样乱。"
    },
    reversed: {
      keywords: "冲动、没准备好、脚步乱",
      meaning: "不是不能开始，是你现在可能边冲边懵，热情有了，路线还没对齐。",
      advice: "先把第一步想清楚，不要靠一腔热血硬跳。"
    }
  },
  {
    name: "魔术师",
    icon: "🎩",
    palette: ["#84fab0", "#8fd3f4"],
    upright: {
      keywords: "主动、会整活、资源到位",
      meaning: "你手上的牌并不差，这事更像是要不要动手，而不是能不能做到。",
      advice: "把会的都用起来，别装低调。"
    },
    reversed: {
      keywords: "嘴上会、手上慢、分心",
      meaning: "想法挺多，但执行有点像狗狗看到球又看到零食，一下子跑偏。",
      advice: "少铺摊子，先干一件最重要的。"
    }
  },
  {
    name: "女祭司",
    icon: "🌙",
    palette: ["#cfd9df", "#e2ebf0"],
    upright: {
      keywords: "直觉、观察、慢一点",
      meaning: "现在不一定要马上表态，你已经感觉到一点苗头了，只是还没完全说破。",
      advice: "先观察，别急着替所有沉默下定义。"
    },
    reversed: {
      keywords: "多想、闷着、信号不清",
      meaning: "你可能把很多话都憋在心里，结果自己先把自己绕晕了。",
      advice: "别只靠猜，必要时要问清楚。"
    }
  },
  {
    name: "女皇",
    icon: "🌼",
    palette: ["#fddb92", "#d1fdff"],
    upright: {
      keywords: "被照顾、丰盛、舒服",
      meaning: "这张牌很会宠人，说明这件事里有温柔、有滋养，适合慢慢养大。",
      advice: "先把自己照顾好，很多答案会跟着长出来。"
    },
    reversed: {
      keywords: "过度操心、黏太紧、累",
      meaning: "你可能把太多心力都投进去了，照顾着照顾着，自己先没电了。",
      advice: "别什么都亲力亲为，留点空给自己喘口气。"
    }
  },
  {
    name: "皇帝",
    icon: "🦴",
    palette: ["#f093fb", "#f5576c"],
    upright: {
      keywords: "边界、安排、稳住",
      meaning: "现在需要的是定规矩，不是光靠感觉冲。稳定下来，事情就会更清楚。",
      advice: "把节奏和底线摆出来，别让局面一直松松垮垮。"
    },
    reversed: {
      keywords: "太强硬、太拧、控制欲",
      meaning: "你或者对方可能都太想掌控局面，结果谁也不服谁。",
      advice: "规则是为了帮忙，不是为了把气氛搞成军训。"
    }
  },
  {
    name: "教皇",
    icon: "🔔",
    palette: ["#5ee7df", "#b490ca"],
    upright: {
      keywords: "经验、传统、听建议",
      meaning: "这事别老想自己闭门悟道，有些经验直接借来用会更省力。",
      advice: "找靠谱的人聊聊，别把求助当丢脸。"
    },
    reversed: {
      keywords: "老套、死板、听不进去",
      meaning: "照搬旧方法可能已经不太适合了，或者你根本不想再按别人说的来。",
      advice: "经验可以参考，但别硬套。"
    }
  },
  {
    name: "恋人",
    icon: "💞",
    palette: ["#fccb90", "#d57eeb"],
    upright: {
      keywords: "连接、选择、心意一致",
      meaning: "这张牌讲的是关系和选择，你心里其实已经偏向某个答案了。",
      advice: "别只看条件，也要看你真正在乎什么。"
    },
    reversed: {
      keywords: "摇摆、别扭、说不明白",
      meaning: "心里有拉扯，嘴上又不说透，关系就容易进入互相猜谜模式。",
      advice: "先对自己诚实，再去谈下一步。"
    }
  },
  {
    name: "战车",
    icon: "🏎️",
    palette: ["#30cfd0", "#330867"],
    upright: {
      keywords: "推进、冲劲、掌控方向",
      meaning: "牌面在催你行动，这事靠等不会自己变好，得你扶好方向盘。",
      advice: "定个目标就往前开，别一路踩油门一路回头看。"
    },
    reversed: {
      keywords: "失控、着急、用力过猛",
      meaning: "你可能太想快点见结果，结果节奏乱了，心态也跟着飘。",
      advice: "别把冲劲开成横冲直撞。"
    }
  },
  {
    name: "力量",
    icon: "🦁",
    palette: ["#f77062", "#fe5196"],
    upright: {
      keywords: "耐心、柔韧、稳住情绪",
      meaning: "真正的厉害不是硬刚，而是你明明能炸毛，却还是能温柔地把事处理好。",
      advice: "别小看自己的韧劲，慢稳比急狠管用。"
    },
    reversed: {
      keywords: "心虚、急躁、情绪上头",
      meaning: "你最近可能表面还行，内心其实已经有点想原地打滚了。",
      advice: "先安顿情绪，再讨论对错。"
    }
  },
  {
    name: "隐者",
    icon: "🕯️",
    palette: ["#a1c4fd", "#c2e9fb"],
    upright: {
      keywords: "想想、独处、找答案",
      meaning: "外面太吵的时候，答案常常不在别人嘴里，而在你终于安静下来的那一刻。",
      advice: "给自己一点独处时间，不用每分钟都在线。"
    },
    reversed: {
      keywords: "躲太久、闷太深、断联",
      meaning: "你可能已经不是在思考，而是在逃避沟通了。",
      advice: "可以安静，但别把自己藏到谁都找不到。"
    }
  },
  {
    name: "命运之轮",
    icon: "🎡",
    palette: ["#fbc2eb", "#a6c1ee"],
    upright: {
      keywords: "转机、变化、时机来了",
      meaning: "局面在动，不管你愿不愿意，故事都快翻新页了。",
      advice: "顺势一点，别死抱着旧节奏不放。"
    },
    reversed: {
      keywords: "卡点、反复、节奏不顺",
      meaning: "最近像一直在转圈，事情不是没动，是动得不太痛快。",
      advice: "先别急着硬拧，等一个更顺的时机。"
    }
  },
  {
    name: "正义",
    icon: "⚖️",
    palette: ["#e0c3fc", "#8ec5fc"],
    upright: {
      keywords: "讲理、平衡、看事实",
      meaning: "这张牌不吃情绪牌，它更关心谁说得对、谁做得稳、证据摆在哪。",
      advice: "把感觉和事实分开看，判断会更准。"
    },
    reversed: {
      keywords: "偏心、逃避、说不清",
      meaning: "你可能在回避某个该面对的结论，或者心里已经偷偷偏了一边。",
      advice: "别让情绪给事实偷偷戴滤镜。"
    }
  },
  {
    name: "倒吊人",
    icon: "🧶",
    palette: ["#f6f1d3", "#648880"],
    upright: {
      keywords: "暂停、换角度、先别急",
      meaning: "现在不是猛冲的时候，停一下反而更容易看见问题到底卡在哪。",
      advice: "换个视角想，别在老位置上跟自己较劲。"
    },
    reversed: {
      keywords: "拖着、耗着、不甘心",
      meaning: "你可能知道该停，但心里又不愿意停，于是进入一种又累又倔的状态。",
      advice: "别把等待拖成消耗。"
    }
  },
  {
    name: "死神",
    icon: "🦋",
    palette: ["#434343", "#000000"],
    upright: {
      keywords: "结束、更新、旧的该翻篇",
      meaning: "别被名字吓到，这张牌更像大扫除，意思是有些旧模式真的该收了。",
      advice: "别留恋已经明显不合适的东西。"
    },
    reversed: {
      keywords: "不舍、拖延、旧事不放",
      meaning: "你可能明知道该变了，却还在抱着旧剧情不肯撒手。",
      advice: "翻篇不等于否定过去，只是给未来腾位置。"
    }
  },
  {
    name: "节制",
    icon: "🫖",
    palette: ["#c1dfc4", "#deecdd"],
    upright: {
      keywords: "平衡、调和、慢慢来",
      meaning: "这张牌很会打圆场，说明事情可以被调整到一个更舒服的状态。",
      advice: "别走极端，拿捏点分寸会更顺。"
    },
    reversed: {
      keywords: "失衡、过头、节奏怪",
      meaning: "有些地方已经有点过量了，也许是情绪，也许是投入，也许是期待。",
      advice: "先收一收，不要让事情发酵成满锅冒泡。"
    }
  },
  {
    name: "恶魔",
    icon: "🍖",
    palette: ["#7f00ff", "#e100ff"],
    upright: {
      keywords: "上头、执念、被吸住",
      meaning: "你现在可能被某种念头拿捏住了，明知不太妙，还是忍不住想继续。",
      advice: "先承认自己在上头，才有机会把绳子松开。"
    },
    reversed: {
      keywords: "松绑、清醒、准备挣脱",
      meaning: "这是醒过来的迹象，你已经没那么想继续被某件事牵着鼻子走了。",
      advice: "继续往清醒那边走，别又偷偷回头舔旧糖。"
    }
  },
  {
    name: "高塔",
    icon: "⚡",
    palette: ["#ff9a9e", "#fad0c4"],
    upright: {
      keywords: "突然、打破、重新认知",
      meaning: "有些事情可能会来得挺猛，但它不是纯搞事，而是帮你看清真相。",
      advice: "先别忙着嫌震撼，看看它到底拆掉了什么假设。"
    },
    reversed: {
      keywords: "闷雷、憋着、迟迟不爆",
      meaning: "问题可能早就在了，只是一直被压着，现在有种要冒头又没完全冒头的感觉。",
      advice: "早点处理，小震总比大炸舒服。"
    }
  },
  {
    name: "星星",
    icon: "⭐",
    palette: ["#89f7fe", "#66a6ff"],
    upright: {
      keywords: "希望、修复、慢慢亮起来",
      meaning: "这是张很温柔的牌，像在说别怕，虽然还没到终局，但好事在路上。",
      advice: "保留一点信心，别太早宣布完蛋。"
    },
    reversed: {
      keywords: "没底气、怀疑、亮度不够",
      meaning: "希望没有消失，只是你最近心里的灯有点忽明忽暗。",
      advice: "休息一下，别在电量不足时逼自己乐观。"
    }
  },
  {
    name: "月亮",
    icon: "🌛",
    palette: ["#667eea", "#764ba2"],
    upright: {
      keywords: "敏感、迷雾、想很多",
      meaning: "很多感觉是真的，但未必每个猜测都是真的，这张牌提醒你别让脑补太抢戏。",
      advice: "先分清直觉和脑补。"
    },
    reversed: {
      keywords: "看清、雾散、慢慢明白",
      meaning: "之前那些说不清的感觉，最近有机会慢慢露出轮廓。",
      advice: "别急着一口气看懂全部，先抓住最明确的部分。"
    }
  },
  {
    name: "太阳",
    icon: "☀️",
    palette: ["#fddb92", "#ff8c69"],
    upright: {
      keywords: "开心、清楚、状态回暖",
      meaning: "好消息，这张牌通常很给力，说明事情有机会往明朗、轻松的方向走。",
      advice: "该开心就开心，别一边顺利一边还硬找隐藏刀子。"
    },
    reversed: {
      keywords: "快乐打折、顾虑太多、放不开",
      meaning: "不是没有好事，是你可能还没完全放松下来，总担心后面有坑。",
      advice: "先允许自己接住一点快乐。"
    }
  },
  {
    name: "审判",
    icon: "📯",
    palette: ["#d4fc79", "#96e6a1"],
    upright: {
      keywords: "醒悟、回头看、该决定了",
      meaning: "有些旧题又回来敲门了，这次不是来烦你，是来催你给个成熟版本的答案。",
      advice: "别只复盘，要真的做决定。"
    },
    reversed: {
      keywords: "犹豫、绕圈、老问题重演",
      meaning: "你可能已经想过很多次，但每次都差那临门一脚。",
      advice: "别再把决定外包给明天的自己。"
    }
  },
  {
    name: "世界",
    icon: "🌍",
    palette: ["#43e97b", "#38f9d7"],
    upright: {
      keywords: "完成、圆满、准备进新阶段",
      meaning: "这张牌像在给你盖章：这一轮差不多了，你可以收尾，也可以升级。",
      advice: "好好庆祝一下，然后准备下一关。"
    },
    reversed: {
      keywords: "差一点、没收尾、心里悬着",
      meaning: "事情其实快到了，只是还差一个结尾动作，导致你总觉得不够踏实。",
      advice: "补上最后那一步，不要烂尾。"
    }
  }
];

const cardRoles = ["现状", "阻碍", "建议"];
// Fill this with your backend endpoint later, for example: "https://your-app.vercel.app/api/reading".
// Keep API keys on the backend only. The frontend sends card data and receives formatted reading text.
const AI_READING_ENDPOINT = "";

const photoInput = document.querySelector("#petPhoto");
const photoPreview = document.querySelector("#photoPreview");
const uploadPlaceholder = document.querySelector("#uploadPlaceholder");
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
    petChip.querySelector("strong").textContent = "今日上牌毛孩子";
    petChip.querySelector("p").textContent = "照片已就位，牌堆已经开始认真端详这位小朋友。";
  };
  reader.readAsDataURL(file);
}

async function runReading() {
  const question = questionInput.value.trim();

  if (!photoInput.files || photoInput.files.length === 0) {
    statusText.textContent = "先上传你家毛孩子的照片。牌堆嘴上很酷，实际也想先认认今天是哪位小朋友来问事。";
    photoInput.focus();
    return;
  }

  if (!question) {
    statusText.textContent = "先写下你的问题。牌会装高冷，但其实它们还是得先知道你在问什么。";
    questionInput.focus();
    return;
  }

  questionEcho.textContent = question;
  statusText.textContent = "抽牌完成。正位代表这股能量比较顺，逆位不是坏事，只是提醒你这块还有点别扭或卡住。";

  const selectedCards = drawThreeCards();
  renderCards(selectedCards);
  renderLoadingReading();

  drawButton.disabled = true;
  drawButton.textContent = "解牌中...";

  try {
    const aiReading = await requestAiReading(question, selectedCards);
    if (aiReading) {
      renderAiReading(aiReading);
      statusText.textContent = "AI 解牌完成。牌面已经说完，剩下就看你怎么和毛孩子开会了。";
      return;
    }

    renderReading(question, selectedCards);
  } catch (error) {
    console.warn("AI reading failed, falling back to local reading:", error);
    statusText.textContent = "AI 接口暂时没接上，先用本地解牌兜底，牌面照样能聊。";
    renderReading(question, selectedCards);
  } finally {
    drawButton.disabled = false;
    drawButton.textContent = "抽三张牌";
  }
}

function resetReading() {
  photoInput.value = "";
  questionInput.value = "";
  photoPreview.hidden = true;
  photoPreview.removeAttribute("src");
  uploadPlaceholder.hidden = false;
  petChipAvatar.textContent = "爪";
  petChipAvatar.style.backgroundImage = "";
  petChip.querySelector("strong").textContent = "还没上传照片";
  petChip.querySelector("p").textContent = "上传后这里会显示你家毛孩子的专属头像";
  questionEcho.textContent = "你还没提问，牌堆正在假装听不见。";
  statusText.textContent = "小提示：正位代表这股能量比较顺，逆位不是坏事，只是说明有点别扭、卡住，或者还没用对劲。";
  cardsGrid.innerHTML = `
    <article class="tarot-card placeholder-card">
      <div class="card-topline">等待抽牌</div>
      <div class="card-icon">✦</div>
      <h3>今天会抽到哪三张？</h3>
      <p>也许是提醒你冷静一点，也许是催你别再犹豫了。</p>
    </article>
  `;
  readingOutput.innerHTML = `
    <div class="empty-state">
      <h3>解牌区待命中</h3>
      <p>先上传照片、输入问题，再点击“抽三张牌”。</p>
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
    node.style.background = `linear-gradient(155deg, ${start}, ${end})`;
    node.style.color = "#fffaf4";
    node.querySelector(".card-topline").textContent = card.role;
    node.querySelector(".card-icon").textContent = card.icon;
    node.querySelector(".card-title").textContent = card.name;
    node.querySelector(".card-orientation").textContent = `${card.orientationLabel}：${getOrientationHint(card.orientation)}`;
    node.querySelector(".card-keywords").textContent = `关键词：${card.content.keywords}`;
    cardsGrid.appendChild(node);
  });
}

function renderLoadingReading() {
  readingOutput.innerHTML = `
    <div class="empty-state">
      <h3>正在解牌</h3>
      <p>三张牌已经就位，正在把它们翻译成比较像人话的版本。</p>
    </div>
  `;
}

function renderReading(question, cards) {
  const overallVibe = buildOverallVibe(cards);
  const overallSummary = buildOverallSummary(question, cards);
  const finalLine = buildFinalLine(cards);
  const details = cards
    .map(
      (card) => `
        <div class="reading-block">
          <h4>${card.role} · ${card.name} ${card.orientationLabel}</h4>
          <p><strong>${card.orientationLabel}是什么意思：</strong>${escapeHtml(getOrientationHint(card.orientation))}</p>
          <p><strong>这张牌代表什么：</strong>${escapeHtml(card.content.meaning)}</p>
          <p><strong>对你的问题意味着什么：</strong>${escapeHtml(buildQuestionMeaning(question, card))}</p>
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

async function requestAiReading(question, cards) {
  if (!AI_READING_ENDPOINT) {
    return null;
  }

  const payload = {
    question,
    spread: "three-card-pet-tarot",
    tone: "中文，轻松幽默，通俗易懂。先解释正位/逆位，再解释牌面代表什么、意味着什么、要注意什么。",
    pet: {
      hasPhoto: Boolean(photoInput.files && photoInput.files.length > 0)
    },
    cards: cards.map((card) => ({
      role: card.role,
      name: card.name,
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

function renderAiReading(reading) {
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

function buildOverallVibe(cards) {
  const uprightCount = cards.filter((card) => card.orientation === "upright").length;

  if (uprightCount === 3) {
    return "这组牌整体挺给力，说明事情并不是没路，更多是你已经摸到门把手了。现在最重要的不是怀疑自己，而是把动作做出来。";
  }

  if (uprightCount === 2) {
    return "整体方向不算差，牌面像在说：有戏，但中间有一个点明显卡住。只要把那个绊脚的小毛球踢开，局面会顺很多。";
  }

  if (uprightCount === 1) {
    return "这组牌的气氛有点拧，事情不是没有机会，而是你现在心态、节奏或沟通方式里有几处打结。先解结，比盲冲更重要。";
  }

  return "三张牌都在提醒你先别急着喊冲。这不是世界针对你，更像是毛孩子正用爪子按住你，叫你先停一下、看清楚、再行动。";
}

function buildOverallSummary(question, cards) {
  const names = cards.map((card) => card.name).join("、");
  const advice = cards[2].content.advice;
  return `围绕“${question}”这件事，${names} 组合起来更像是在告诉你：眼下先看清现状，再处理真正的卡点，最后按照更稳的方式往前走。别把每个小反应都当成终极结论，很多时候只是节奏没对上。尤其最后这张建议牌说得很明确：${advice}`;
}

function buildFinalLine(cards) {
  const upbeat = cards.filter((card) => card.orientation === "upright").length >= 2;
  const lines = upbeat
    ? [
        "简单翻译一下：可以行动，但别一边冲一边脑补翻车现场。",
        "毛孩子这边的口风是：你有机会，别先自己把自己劝退。",
        "本次牌面总结为一句话：不是没戏，是别演成内心小剧场连续剧。"
      ]
    : [
        "本次牌面比较像一句贴心提醒：先顺毛，再谈理想，不然谁都容易炸。",
        "翻译成人话就是：别急，先把最乱的那根线理出来。",
        "毛孩子锐评：你现在需要的不是瞎冲，是冷静地把爪子从毛线团里拿出来。"
      ];

  return lines[Math.floor(Math.random() * lines.length)];
}

function buildQuestionMeaning(question, card) {
  const prefix =
    card.role === "现状"
      ? "眼下你最真实的状态"
      : card.role === "阻碍"
        ? "这件事里最容易绊住你的点"
        : "这组牌最想给你的行动提醒";

  return `${prefix}，就藏在“${card.content.keywords}”这几个词里。放到“${question}”这个问题上看，它不是在让你神神叨叨地猜，而是在提醒你注意当下的节奏和反应。`;
}
