// Mô phỏng webpack 4: băm bằng MD4 — OpenSSL 3 (Node 17+) đã bỏ thuật toán này.
const crypto = require("crypto");
const h = crypto.createHash("md4").update("bundle").digest("hex");
console.log("build ok, hash=" + h);
