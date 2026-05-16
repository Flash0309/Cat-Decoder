# AI 配置

当前前端已经能调用一个独立后端接口。

## 1. 部署后端

把这个目录作为一个 Vercel 项目导入。Vercel 会识别 `api/reading.js` 为 Serverless Function。

## 2. 配环境变量

在 Vercel 项目里配置：

- `AI_API_KEY`
- `AI_MODEL`
- `AI_API_BASE_URL`

默认按 OpenAI 兼容接口写的，直接可用的例子：

```text
AI_API_KEY=你的 key
AI_MODEL=gpt-4.1-mini
AI_API_BASE_URL=https://api.openai.com/v1
```

如果你用别的 OpenAI-compatible 服务，只要改 `AI_API_BASE_URL` 和 `AI_MODEL`。

## 3. 把前端接到后端

部署完成后，拿到类似下面的地址：

```text
https://your-vercel-project.vercel.app/api/reading
```

然后修改 [script.js](/Users/elvinhuang/Documents/Playground/script.js:337)：

```js
const AI_READING_ENDPOINT = "https://your-vercel-project.vercel.app/api/reading";
```

## 4. 返回格式

接口的输入输出契约见 [API_CONTRACT.md](/Users/elvinhuang/Documents/Playground/API_CONTRACT.md:1)。

## 5. 失败兜底

如果接口未配置、请求失败、或模型返回格式不对，前端会自动回退到本地规则式解牌。
