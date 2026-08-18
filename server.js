const express = require("express");
const app = express();
const port = config.PORT;                     // ReferenceError: config is not defined
app.get("/", (_req, res) => res.send("legacy app ok"));
app.listen(port, "0.0.0.0");