const express = require("express");

const app = express();

const PORT = Number(process.env.PORT || 3000);

app.disable("x-powered-by");

app.get("/", (_req, res) => res.json({ ok: true, version: "v2-khach-tu-sua" }));

app.get("/health", (_req, res) => res.send("ok"));

app.listen(PORT, "0.0.0.0", () => console.log("listening " + PORT));

