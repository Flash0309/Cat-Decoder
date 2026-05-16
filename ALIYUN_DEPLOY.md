# Aliyun deployment

## Runtime

- Debian 12
- Nginx on ports 80/443
- Node.js 22
- API service listens on `127.0.0.1:3001`

## Files

- Static site:
  - `index.html`
  - `styles.css`
  - `script.js`
- API service:
  - `server.js`
  - `api/reading.js`
  - `package.json`

## Environment

Create `/opt/cat-decoder/.env`:

```bash
AI_API_KEY=your_key
AI_MODEL=gpt-4.1-mini
AI_API_BASE_URL=https://api.openai.com/v1
PORT=3001
```

## Start

```bash
cd /opt/cat-decoder
set -a
. ./.env
set +a
npm start
```

For production, use `systemd` to load the same environment file and keep the process running.
