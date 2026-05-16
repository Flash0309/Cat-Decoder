const majorArcana = [
  {
    name: "愚者",
    arcana: "major",
    number: 0,
    icon: "✦",
    palette: ["#f4bc71", "#de6a57"],
    scene: "白猫背着小包站在高处，尾巴勾着风里的金穗。",
    upright: {
      keywords: "开始、试试看、轻装上阵",
      meaning: "故事刚要开场，重点不是你懂不懂全部，而是你愿不愿意迈出第一步。",
      advice: "先上路，再在路上修地图。"
    },
    reversed: {
      keywords: "莽撞、走神、没踩稳",
      meaning: "热情有了，但脚步有点虚，你可能一边想冲一边还没看清落脚点。",
      advice: "先把第一步踩实，再谈飞起来。"
    }
  },
  {
    name: "魔术师",
    arcana: "major",
    number: 1,
    icon: "✧",
    palette: ["#3fb8a6", "#6e8efb"],
    scene: "桌上摆着四件法器，猫咪抬爪把散乱的线索收拢成一束光。",
    upright: {
      keywords: "调动资源、主动出手、会整活",
      meaning: "你手里的牌并不差，关键在于你愿不愿意把现有条件真的用起来。",
      advice: "会什么就上什么，别把本事锁在袖子里。"
    },
    reversed: {
      keywords: "分心、嘴快手慢、用力飘",
      meaning: "想法不少，但执行像猫咪追逗猫棒，一会儿冲这边一会儿扑那边。",
      advice: "把最要紧的一件先落地。"
    }
  },
  {
    name: "女祭司",
    arcana: "major",
    number: 2,
    icon: "☾",
    palette: ["#8aa4d6", "#b9bfd4"],
    scene: "深蓝帘幕后，猫咪安静守着月轮和半开的秘密卷轴。",
    upright: {
      keywords: "直觉、观察、先别急",
      meaning: "答案还没完全说破，但你已经感到某些信号在慢慢浮起来。",
      advice: "先观察，不要急着替沉默下定义。"
    },
    reversed: {
      keywords: "脑补、闷着、信号糊",
      meaning: "你可能把很多猜测都装进心里，结果越想越像走进迷雾。",
      advice: "直觉可以听，但别只听脑内旁白。"
    }
  },
  {
    name: "女皇",
    arcana: "major",
    number: 3,
    icon: "❀",
    palette: ["#f7d98d", "#d9f2d8"],
    scene: "花毯和果篮围住一只软乎乎的长毛猫，地面像被阳光晒得暖烘烘。",
    upright: {
      keywords: "滋养、舒服、丰盛感",
      meaning: "这张牌会把事物往更柔软、更稳定、更有被照顾感的方向推。",
      advice: "先把自己和关系都照顾顺。"
    },
    reversed: {
      keywords: "操心过量、黏太紧、没电",
      meaning: "你可能已经给太多了，给到自己反而开始透支。",
      advice: "爱要流动，不是单向榨干。"
    }
  },
  {
    name: "皇帝",
    arcana: "major",
    number: 4,
    icon: "♜",
    palette: ["#be7a6d", "#5f6677"],
    scene: "深色王座前，一只老猫稳稳蹲着，周围是整齐排好的边界石。",
    upright: {
      keywords: "边界、秩序、稳住阵脚",
      meaning: "现在更重要的是定规则、定节奏、定底线，而不是继续靠感觉漂。",
      advice: "把该明确的框架说清楚。"
    },
    reversed: {
      keywords: "太硬、太拧、控制欲重",
      meaning: "你或对方可能太想把局面攥在手里，结果气氛先绷住了。",
      advice: "规矩是为了稳，不是为了压。"
    }
  },
  {
    name: "教皇",
    arcana: "major",
    number: 5,
    icon: "✢",
    palette: ["#d9c8a6", "#8c7f6f"],
    scene: "拱门下的老猫像导师一样坐着，爪边是传承多年的符号和铃铛。",
    upright: {
      keywords: "经验、指引、借鉴传统",
      meaning: "这件事不必全靠自己硬悟，有些成熟经验拿来用会更省力。",
      advice: "去找靠谱的经验值，而不是闷头撞墙。"
    },
    reversed: {
      keywords: "教条、旧办法失灵、听不进去",
      meaning: "照搬老套路未必还适合现在，或者你其实已经不想再按旧剧本演了。",
      advice: "参考经验，但别被经验绑住。"
    }
  },
  {
    name: "恋人",
    arcana: "major",
    number: 6,
    icon: "♡",
    palette: ["#f4bf98", "#cc76b5"],
    scene: "两只猫在花藤间互相看着，头顶有一轮温柔发亮的星。",
    upright: {
      keywords: "连接、选择、心意一致",
      meaning: "这张牌谈关系，也谈选择，重点是你心里已经开始偏向某个真正想要的答案。",
      advice: "别只算条件，也要听心里那句实话。"
    },
    reversed: {
      keywords: "拉扯、摇摆、讲不透",
      meaning: "彼此想法没有完全对上，或者你自己心里都还在打架。",
      advice: "先对自己诚实，再去谈关系。"
    }
  },
  {
    name: "战车",
    arcana: "major",
    number: 7,
    icon: "➹",
    palette: ["#0f9b8e", "#2b3a67"],
    scene: "两只花色不同的猫并排向前，车轮碾过夜色里发光的纹路。",
    upright: {
      keywords: "推进、掌舵、冲劲在手",
      meaning: "牌面在催行动，局面不是等一等就会自己变好，你得亲自扶住方向盘。",
      advice: "定好方向后就稳稳往前开。"
    },
    reversed: {
      keywords: "失控、着急、劲用歪了",
      meaning: "你可能太想快点见结果，结果越赶越容易把节奏开散。",
      advice: "别把推进变成横冲直撞。"
    }
  },
  {
    name: "力量",
    arcana: "major",
    number: 8,
    icon: "∞",
    palette: ["#f38874", "#d84f76"],
    scene: "一只小猫用极轻的动作安抚大狮子的额头，风里有安静的光。",
    upright: {
      keywords: "温柔韧劲、耐心、稳情绪",
      meaning: "真正的强不是硬碰硬，而是你明明有情绪，仍然能温柔又清醒地处理事情。",
      advice: "慢一点，你的稳定本身就是力量。"
    },
    reversed: {
      keywords: "心虚、急躁、情绪上脸",
      meaning: "外面还在撑着，里面其实已经有点想炸毛了。",
      advice: "先安顿情绪，再解决问题。"
    }
  },
  {
    name: "隐者",
    arcana: "major",
    number: 9,
    icon: "☼",
    palette: ["#bacce8", "#7c8ca8"],
    scene: "老猫提着一盏灯独自走在雪地，灯光把脚印照成一条细路。",
    upright: {
      keywords: "独处、思考、找答案",
      meaning: "当外界太吵，真正的答案往往出现在你安静下来之后。",
      advice: "给自己一点独处和整理空间。"
    },
    reversed: {
      keywords: "躲太久、闷太深、断联",
      meaning: "你可能已经不是在思考，而是在用沉默拖延面对。",
      advice: "可以安静，但别把沟通完全关掉。"
    }
  },
  {
    name: "命运之轮",
    arcana: "major",
    number: 10,
    icon: "◌",
    palette: ["#f7b2d5", "#8ea8e6"],
    scene: "轮盘上缠着月桂和丝带，四周的小猫像被风带着重新转向。",
    upright: {
      keywords: "转机、变化、时机翻页",
      meaning: "局面在动，旧节奏撑不久了，故事很快会换章节。",
      advice: "顺势一点，别死抱旧节拍。"
    },
    reversed: {
      keywords: "卡住、反复、时机不顺",
      meaning: "不是完全没动，而是有种一直在原地打圈的拖拽感。",
      advice: "先别硬拧，等窗口再推。"
    }
  },
  {
    name: "正义",
    arcana: "major",
    number: 11,
    icon: "⚖",
    palette: ["#d9c3fa", "#86b7f4"],
    scene: "长尾猫端坐在秤前，一边是真相，一边是情绪。",
    upright: {
      keywords: "看事实、讲理、平衡",
      meaning: "这张牌不吃情绪牌，更关心证据、秩序和对等。",
      advice: "把感觉和事实分开看。"
    },
    reversed: {
      keywords: "偏心、模糊、结论拖着",
      meaning: "有人在回避该面对的结论，或者心里其实已经偷偷偏了一边。",
      advice: "别让滤镜替你判断。"
    }
  },
  {
    name: "倒吊人",
    arcana: "major",
    number: 12,
    icon: "▽",
    palette: ["#ebe6c4", "#648580"],
    scene: "猫咪倒挂在藤枝上，脚边晃着铃铛，表情却很安静。",
    upright: {
      keywords: "暂停、换角度、先别催",
      meaning: "现在不是猛冲的时候，停一下反而更容易看见事情卡点。",
      advice: "换个角度，你会少绕很多弯。"
    },
    reversed: {
      keywords: "拖着、耗着、不甘心",
      meaning: "你知道该停，但心里又不愿意停，于是进入一种又累又拧的状态。",
      advice: "别把等待拖成消耗。"
    }
  },
  {
    name: "死神",
    arcana: "major",
    number: 13,
    icon: "✤",
    palette: ["#4a4a4a", "#161616"],
    scene: "黑猫从旧花园的门里走过，身后是落叶，前面是刚冒头的新芽。",
    upright: {
      keywords: "结束、翻篇、更新",
      meaning: "别被名字吓到，这张牌更像大扫除，提醒你旧模式该收尾了。",
      advice: "把不合适的留在昨天。"
    },
    reversed: {
      keywords: "拖延放手、旧事缠着、转不过弯",
      meaning: "你明知道该变了，却还在抱着旧剧情不肯撒手。",
      advice: "翻篇不是否定过去，是给以后腾位子。"
    }
  },
  {
    name: "节制",
    arcana: "major",
    number: 14,
    icon: "⚗",
    palette: ["#c7e4d2", "#e6efe1"],
    scene: "猫咪在两只杯子之间来回倒光，地面是一条刚刚好的中线。",
    upright: {
      keywords: "平衡、调和、拿捏分寸",
      meaning: "事情不是不能成，而是更适合被慢慢调到一个舒服的状态。",
      advice: "收一收极端，把节奏调匀。"
    },
    reversed: {
      keywords: "失衡、过量、节奏怪",
      meaning: "某个部分已经有点过头，可能是情绪、投入，也可能是期待。",
      advice: "先减一点，别让锅继续冒。"
    }
  },
  {
    name: "恶魔",
    arcana: "major",
    number: 15,
    icon: "♆",
    palette: ["#6326b7", "#d63dea"],
    scene: "昏紫灯下，毛线团缠住两只猫的爪子，像甜又黏的执念。",
    upright: {
      keywords: "上头、执念、被勾住",
      meaning: "你可能被某个念头或习惯拿捏住了，知道不太妙，却还是想继续。",
      advice: "先承认自己上头，绳子才松得开。"
    },
    reversed: {
      keywords: "松绑、醒神、准备抽身",
      meaning: "这是醒过来的迹象，你已经开始不想继续被旧牵引拖着走。",
      advice: "继续往清醒那边走。"
    }
  },
  {
    name: "高塔",
    arcana: "major",
    number: 16,
    icon: "⚡",
    palette: ["#e66b6c", "#f2b19d"],
    scene: "闪电劈开旧塔的尖顶，猫咪从裂缝里跳出，眼神终于亮了。",
    upright: {
      keywords: "突变、拆掉假设、看清",
      meaning: "有些真相会来得猛，但它不是单纯搞破坏，而是逼你看到真实。",
      advice: "别只顾着震惊，也看看它拆掉了什么。"
    },
    reversed: {
      keywords: "闷雷、积压、迟迟不爆",
      meaning: "问题早就在，只是一直被压着，眼下已经有要冒头的征兆。",
      advice: "早点处理，小震比大炸省事。"
    }
  },
  {
    name: "星星",
    arcana: "major",
    number: 17,
    icon: "✷",
    palette: ["#7ad7ee", "#4a7df0"],
    scene: "猫咪在水边仰头看七颗发亮的星，胡须上挂着清晨的露。",
    upright: {
      keywords: "希望、修复、慢慢亮",
      meaning: "这是张很温柔的牌，像在说别怕，好事虽然还在路上，但它没有消失。",
      advice: "先给自己留一盏灯。"
    },
    reversed: {
      keywords: "没底气、亮度不够、怀疑",
      meaning: "希望没有不见，只是你最近心里的灯有点忽明忽暗。",
      advice: "休息一下，再回来接住希望。"
    }
  },
  {
    name: "月亮",
    arcana: "major",
    number: 18,
    icon: "☽",
    palette: ["#556fd3", "#6f4d9f"],
    scene: "月光下的小路被潮气包住，猫咪耳朵竖起，像在分辨哪边是真声哪边是回音。",
    upright: {
      keywords: "迷雾、敏感、想很多",
      meaning: "很多感觉是真的，但并不是每个猜测都是真的，脑补别抢戏。",
      advice: "先分清直觉和脑补。"
    },
    reversed: {
      keywords: "雾散、看清、慢慢明白",
      meaning: "之前那些说不清的东西，最近有机会露出更明确的轮廓。",
      advice: "抓住已经变清楚的部分。"
    }
  },
  {
    name: "太阳",
    arcana: "major",
    number: 19,
    icon: "☼",
    palette: ["#f2d68a", "#ff8a63"],
    scene: "暖阳铺满庭院，一只猫在向日葵间打滚，连影子都很快乐。",
    upright: {
      keywords: "开心、明朗、回暖",
      meaning: "通常是张很给力的牌，说明事情有机会往轻松清楚的方向走。",
      advice: "该开心就开心，别硬给快乐找刀子。"
    },
    reversed: {
      keywords: "顾虑太多、快乐打折、放不开",
      meaning: "不是没有好事，而是你还没完全放松下来，总怕后面有坑。",
      advice: "先允许自己接住一点亮。"
    }
  },
  {
    name: "审判",
    arcana: "major",
    number: 20,
    icon: "⟡",
    palette: ["#d4ef83", "#88d8a4"],
    scene: "号角在云间响起，猫咪们从旧梦里抬头，像终于准备回应召唤。",
    upright: {
      keywords: "醒悟、回头看、该决定了",
      meaning: "旧题再次敲门，不是来烦你，而是催你给出更成熟的答案。",
      advice: "复盘之后，记得真的做决定。"
    },
    reversed: {
      keywords: "犹豫、绕圈、老问题反复",
      meaning: "你已经想过很多次，但每次都差临门一脚。",
      advice: "别再把决定外包给明天。"
    }
  },
  {
    name: "世界",
    arcana: "major",
    number: 21,
    icon: "◎",
    palette: ["#43c97f", "#29d9cb"],
    scene: "花环围住一只抬头的猫，四角的守护者像在为它的完成鼓掌。",
    upright: {
      keywords: "完成、圆满、进入新阶段",
      meaning: "这一轮差不多了，你可以收尾，也可以升阶。",
      advice: "把收尾做漂亮，然后向下一关走。"
    },
    reversed: {
      keywords: "差一点、悬着、没收好尾",
      meaning: "事情其实快到了，只差一个结尾动作，让你心里一直不够踏实。",
      advice: "补上最后那一下，别烂尾。"
    }
  }
];

const suitConfigs = [
  {
    key: "wands",
    name: "权杖",
    icon: "✹",
    element: "火",
    domain: "行动、热情和推进",
    visual: "枝杖、火星和奔跑的爪印",
    palette: ["#b6432e", "#f0a453"],
    uprightTone: "这股牌气更像在催你动起来。",
    reversedTone: "这股牌气提醒你别把冲劲开歪。"
  },
  {
    key: "cups",
    name: "圣杯",
    icon: "◔",
    element: "水",
    domain: "情绪、关系和感受流动",
    visual: "瓷杯、水波和月下倒映的猫影",
    palette: ["#3b8ac4", "#7dd9d5"],
    uprightTone: "这股牌气更偏向感受与连结。",
    reversedTone: "这股牌气提醒你情绪水位有点乱。"
  },
  {
    key: "swords",
    name: "宝剑",
    icon: "✧",
    element: "风",
    domain: "判断、真相和思考切面",
    visual: "利刃、风线和夜色里的清晰轮廓",
    palette: ["#5b6793", "#c1d0e0"],
    uprightTone: "这股牌气在逼你把事情看清。",
    reversedTone: "这股牌气说明思路或沟通有点打结。"
  },
  {
    key: "pentacles",
    name: "星币",
    icon: "◈",
    element: "土",
    domain: "现实、资源和长期稳定",
    visual: "金币、草叶和被阳光晒热的地面",
    palette: ["#73924f", "#d7b76e"],
    uprightTone: "这股牌气更讲落地、稳定和积累。",
    reversedTone: "这股牌气提醒你现实层面还有松动。"
  }
];

const rankConfigs = [
  {
    key: "ace",
    name: "王牌",
    scene: "一只猫爪从云里递出新的讯号",
    uprightKeywords: ["开端", "机会", "火花"],
    reversedKeywords: ["迟疑", "机会擦边", "没接住"],
    uprightMeaning: "新的起点已经冒头，重点是你愿不愿意伸手接住。",
    reversedMeaning: "机会不是没有，而是你还没完全把它抓稳。",
    uprightAdvice: "先从最小的一步开始。",
    reversedAdvice: "别只盯着想法，先让动作跟上。"
  },
  {
    key: "two",
    name: "二",
    scene: "两只猫站在分岔口互相看着",
    uprightKeywords: ["配合", "选择", "平衡"],
    reversedKeywords: ["拉扯", "摇摆", "没对齐"],
    uprightMeaning: "这里强调两端之间如何对上节奏和方向。",
    reversedMeaning: "两股力量还没谈拢，所以局面有点拧。",
    uprightAdvice: "先把关键的选择说清楚。",
    reversedAdvice: "别让拖延伪装成考虑周全。"
  },
  {
    key: "three",
    name: "三",
    scene: "三只猫围着同一块场地开始搭建",
    uprightKeywords: ["展开", "协作", "成形"],
    reversedKeywords: ["散乱", "配合差", "起步磕绊"],
    uprightMeaning: "事情开始有结构了，不再只是想法停留在脑子里。",
    reversedMeaning: "方向并非没有，只是执行上还没形成同频。",
    uprightAdvice: "把能合作的力量用起来。",
    reversedAdvice: "先修正分工和步骤。"
  },
  {
    key: "four",
    name: "四",
    scene: "猫咪把身体团成一圈守住边界",
    uprightKeywords: ["稳定", "停驻", "守住"],
    reversedKeywords: ["僵住", "卡着不动", "守太紧"],
    uprightMeaning: "这里的重点是稳固和暂时定住阵脚。",
    reversedMeaning: "守得太紧也会变成一种停滞和消耗。",
    uprightAdvice: "先稳住基础，再往外扩。",
    reversedAdvice: "别因为怕变动而把自己困住。"
  },
  {
    key: "five",
    name: "五",
    scene: "几只猫在风里互相试探爪子先后",
    uprightKeywords: ["摩擦", "调整", "冲撞"],
    reversedKeywords: ["积怨", "别扭", "躲冲突"],
    uprightMeaning: "摩擦不一定是坏事，它常常说明调整开始发生。",
    reversedMeaning: "表面安静，不代表底下没有拉扯。",
    uprightAdvice: "把冲突当成校准，而不是战争。",
    reversedAdvice: "该说的别一直憋。"
  },
  {
    key: "six",
    name: "六",
    scene: "猫咪从高处回头，看见路已经被接续起来",
    uprightKeywords: ["回流", "照应", "小有进展"],
    reversedKeywords: ["落差", "心里不平", "回不到原位"],
    uprightMeaning: "某些事情开始出现回应，或者你终于看见进展。",
    reversedMeaning: "期待和现实之间仍然有点落差。",
    uprightAdvice: "接住已经在发生的改善。",
    reversedAdvice: "别一直拿现在和理想版硬比。"
  },
  {
    key: "seven",
    name: "七",
    scene: "猫咪在更高处观望，像在判断下一跳值不值得",
    uprightKeywords: ["评估", "拉开距离", "策略"],
    reversedKeywords: ["犹豫过头", "不敢跳", "判断失焦"],
    uprightMeaning: "这一步更需要判断，不是立刻扑出去。",
    reversedMeaning: "你可能看了太久，反而忘了为什么出发。",
    uprightAdvice: "把目标和代价一起看。",
    reversedAdvice: "评估要有结论，别无限延长。"
  },
  {
    key: "eight",
    name: "八",
    scene: "夜色里一串连贯的猫爪印向前延伸",
    uprightKeywords: ["加速", "连贯", "推进明显"],
    reversedKeywords: ["乱速", "节奏散", "推进受阻"],
    uprightMeaning: "事情进入更快的流速，很多动作会比预想更连续。",
    reversedMeaning: "不是完全停住，而是节奏一快就容易散掉。",
    uprightAdvice: "趁势推进，把握窗口。",
    reversedAdvice: "先收节奏，再补速度。"
  },
  {
    key: "nine",
    name: "九",
    scene: "猫咪回头检查一路收集来的成果和伤痕",
    uprightKeywords: ["收束", "成熟", "快到终点"],
    reversedKeywords: ["疲惫", "过度紧绷", "差临门一脚"],
    uprightMeaning: "你已经走到后段，很多东西比你以为的更接近完成。",
    reversedMeaning: "不是做不到，而是现在的疲惫让你怀疑自己。",
    uprightAdvice: "撑住最后一段，但别硬扛过头。",
    reversedAdvice: "休整一下，别在累的时候否定成果。"
  },
  {
    key: "ten",
    name: "十",
    scene: "整幅画面被装满，猫咪终于站在结果中央",
    uprightKeywords: ["结果", "满格", "阶段收官"],
    reversedKeywords: ["超载", "撑太满", "结果压身"],
    uprightMeaning: "事情到达一个很实在的结果面，重心转向如何承接。",
    reversedMeaning: "装得太满就容易变成压力和负担。",
    uprightAdvice: "把结果接住，再整理下一步。",
    reversedAdvice: "该卸的重量别继续扛着。"
  },
  {
    key: "page",
    name: "侍从",
    scene: "年轻的小猫捧着新线索认真端详",
    uprightKeywords: ["消息", "学习", "试探起步"],
    reversedKeywords: ["幼稚", "分心", "还没准备好"],
    uprightMeaning: "这里常带着新消息、新兴趣或刚刚冒头的尝试。",
    reversedMeaning: "你可能还在试探阶段，稳定度不够。",
    uprightAdvice: "保留好奇，但要边学边做。",
    reversedAdvice: "先把基础补齐再冲。"
  },
  {
    key: "knight",
    name: "骑士",
    scene: "猫骑士朝着目标快速跃出，披风带风",
    uprightKeywords: ["行动", "推进", "带头往前"],
    reversedKeywords: ["太冲", "方向飘", "行动变噪音"],
    uprightMeaning: "事情更像进入执行档，需要有人真的往前带。",
    reversedMeaning: "光有速度不够，方向飘了就容易白忙。",
    uprightAdvice: "动起来，但别忘了控方向。",
    reversedAdvice: "先校准目标，再继续冲。"
  },
  {
    key: "queen",
    name: "皇后",
    scene: "成熟的猫安稳坐着，像把一切都收拢得刚好",
    uprightKeywords: ["成熟", "包容", "内在掌控"],
    reversedKeywords: ["闷着扛", "过度细腻", "累而不说"],
    uprightMeaning: "这张更强调柔中带稳，用成熟方式照看局面。",
    reversedMeaning: "太会照顾别人，也可能让自己长期过载。",
    uprightAdvice: "用成熟感稳住关系和节奏。",
    reversedAdvice: "别把所有事都独自消化。"
  },
  {
    key: "king",
    name: "国王",
    scene: "老猫坐镇高处，周围秩序已经成型",
    uprightKeywords: ["定盘", "负责", "掌握全局"],
    reversedKeywords: ["压太死", "固执", "控制感过重"],
    uprightMeaning: "这里强调结果导向和全局视角，说明需要更成熟地收盘。",
    reversedMeaning: "全局感一旦走偏，就会变成压制和僵化。",
    uprightAdvice: "站高一点看，稳稳收盘。",
    reversedAdvice: "掌控不是把一切捏死。"
  }
];

const rankNumbers = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Page", "Knight", "Queen", "King"];

function buildMinorArcana() {
  const cards = [];

  suitConfigs.forEach((suit, suitIndex) => {
    rankConfigs.forEach((rank, rankIndex) => {
      const serial = 22 + suitIndex * rankConfigs.length + rankIndex;
      const name = `${suit.name}${rank.name}`;
      cards.push({
        name,
        arcana: "minor",
        number: serial,
        suit: suit.name,
        rank: rank.name,
        shortCode: `${rankNumbers[rankIndex]} of ${suit.name}`,
        icon: suit.icon,
        palette: suit.palette,
        scene: `${rank.scene}，周围是 ${suit.visual}。`,
        upright: {
          keywords: `${rank.uprightKeywords.join("、")}、${suit.domain.split("、")[0]}`,
          meaning: `${rank.uprightMeaning}${suit.uprightTone}它主要落在 ${suit.domain} 这条线上。`,
          advice: `${rank.uprightAdvice}${suit.name}这组牌适合从 ${suit.domain.split("、")[0]} 这一步先处理。`
        },
        reversed: {
          keywords: `${rank.reversedKeywords.join("、")}、${suit.domain.split("、")[0]}失衡`,
          meaning: `${rank.reversedMeaning}${suit.reversedTone}问题多半卡在 ${suit.domain} 这里。`,
          advice: `${rank.reversedAdvice}先把 ${suit.domain.split("、")[0]} 这层理顺。`
        }
      });
    });
  });

  return cards;
}

window.tarotDeckData = [...majorArcana, ...buildMinorArcana()];
