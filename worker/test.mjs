import worker from "./src/index.js";

const stored = [];
const env = {
  ADMIN_TOKEN: "test-token",
  DB: {
    prepare(sql) {
      return {
        bind(message) {
          return {
            async run() {
              stored.push({ id: stored.length + 1, message, created_at: "2026-06-02 00:00:00" });
            },
          };
        },
        async all() {
          return { results: stored.slice().reverse() };
        },
      };
    },
  },
};

const submitted = await worker.fetch(
  new Request("https://worker.example/api/messages", {
    method: "POST",
    headers: { "Content-Type": "application/json", Origin: "https://www.xunotes.com" },
    body: JSON.stringify({ message: "Test message" }),
  }),
  env,
);

if (submitted.status !== 201) throw new Error(`Expected POST 201, received ${submitted.status}`);

const unauthorized = await worker.fetch(new Request("https://worker.example/api/messages"), env);
if (unauthorized.status !== 401) throw new Error(`Expected GET 401, received ${unauthorized.status}`);

const loaded = await worker.fetch(
  new Request("https://worker.example/api/messages", {
    headers: { Authorization: "Bearer test-token" },
  }),
  env,
);

const messages = await loaded.json();
if (messages.length !== 1 || messages[0].message !== "Test message") {
  throw new Error("Expected the submitted message to be returned.");
}

console.log("Worker message flow passed.");
