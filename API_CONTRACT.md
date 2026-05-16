# 有点喵数 AI 解牌接口

前端已经预留了 AI 解牌调用点。之后只需要在 `script.js` 里设置：

```js
const AI_READING_ENDPOINT = "https://your-domain.com/api/reading";
```

API Key 不要放在前端。这个地址应该指向你自己的后端、Serverless Function 或 Cloudflare Worker。

## Request

前端会用 `POST` 请求发送 JSON：

```json
{
  "question": "它最近为什么老在门口发呆？",
  "spread": "three-card-pet-tarot",
  "tone": "中文，轻松幽默，通俗易懂。先解释正位/逆位，再解释牌面代表什么、意味着什么、要注意什么。",
  "pet": {
    "hasPhoto": true
  },
  "cards": [
    {
      "role": "现状",
      "name": "愚者",
      "orientation": "正位",
      "keywords": "开始、好奇、想试试看",
      "baseMeaning": "新故事要开场了，别一直在门口闻半天，差不多该迈步了。",
      "baseAdvice": "可以大胆试，但别把计划写得像猫抓过一样乱。"
    }
  ]
}
```

当前版本只上传 `hasPhoto`，不会把宠物照片传给后端。

## Response

后端请返回 JSON，字段固定如下：

```json
{
  "overall": "整体气氛说明。",
  "cards": [
    {
      "role": "现状",
      "title": "愚者 正位",
      "orientationMeaning": "正位代表这股能量比较顺，事情正在往前走。",
      "meaning": "这张牌代表新的开始、好奇和想试试看。",
      "questionMeaning": "放到你的问题里，它像是在说这件事可能只是毛孩子在观察新变化。",
      "advice": "先观察环境有没有变化，不用立刻紧张。"
    },
    {
      "role": "阻碍",
      "title": "月亮 逆位",
      "orientationMeaning": "逆位不是坏事，只是说明这里有点卡住或信息不清。",
      "meaning": "这张牌代表误会、脑补和慢慢看清。",
      "questionMeaning": "你可能想太多了，先别把每次发呆都理解成大事件。",
      "advice": "记录几天它发呆的时间和环境，别只靠一眼判断。"
    },
    {
      "role": "建议",
      "title": "太阳 正位",
      "orientationMeaning": "正位代表这股能量比较顺，事情有机会变明朗。",
      "meaning": "这张牌代表清楚、轻松和状态回暖。",
      "questionMeaning": "更像是一个可以被看明白的小问题，不像严重警报。",
      "advice": "给它一点陪伴，也检查一下门外是不是有什么新动静。"
    }
  ],
  "summary": "三张牌合起来看，这件事更像是环境变化带来的好奇和一点点不安。",
  "oneLiner": "一句话：先别急着破案，可能只是它发现门口比电视剧还精彩。"
}
```

如果接口未配置、接口失败、或返回字段不完整，前端会自动回退到本地规则式解牌。
