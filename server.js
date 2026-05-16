const http = require("http");
const { URL } = require("url");

const readingHandler = require("./api/reading");

const PORT = Number(process.env.PORT || 3001);

const server = http.createServer(async (req, res) => {
  const requestUrl = new URL(req.url, `http://${req.headers.host || "localhost"}`);

  if (requestUrl.pathname !== "/api/reading") {
    sendJson(res, 404, { error: "Not found" });
    return;
  }

  const body = await readJsonBody(req);

  const wrappedReq = {
    method: req.method,
    headers: req.headers,
    body
  };

  const wrappedRes = createResponseAdapter(res);
  await readingHandler(wrappedReq, wrappedRes);
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(`Cat Decoder API listening on 127.0.0.1:${PORT}`);
});

function createResponseAdapter(res) {
  return {
    status(code) {
      res.statusCode = code;
      return this;
    },
    setHeader(name, value) {
      res.setHeader(name, value);
    },
    json(payload) {
      if (!res.headersSent) {
        res.setHeader("Content-Type", "application/json; charset=utf-8");
      }
      res.end(JSON.stringify(payload));
    },
    end(payload = "") {
      res.end(payload);
    }
  };
}

function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    if (req.method === "GET" || req.method === "HEAD" || req.method === "OPTIONS") {
      resolve({});
      return;
    }

    let raw = "";

    req.on("data", (chunk) => {
      raw += chunk;
    });

    req.on("end", () => {
      if (!raw) {
        resolve({});
        return;
      }

      try {
        resolve(JSON.parse(raw));
      } catch {
        reject(new Error("Request body must be valid JSON."));
      }
    });

    req.on("error", reject);
  });
}

function sendJson(res, statusCode, payload) {
  res.statusCode = statusCode;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify(payload));
}
