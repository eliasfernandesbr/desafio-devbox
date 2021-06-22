const express = require("express");
const cors = require("cors");

const app = express();
app.use(
  cors({
    origin: "*",
  })
);

const port = 5000;

app.get("/api/users", (req, res) => {
  res.send("teste API");
});

app.get("/", (req, res) => {
  res.json({ message: "hello world" });
});

app.listen(port, () => {
  console.log("🔸START BACKEND SERVER🔸");
});
