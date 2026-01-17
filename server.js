const express = require("express");

const app = express();
const PORT = 3002;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use(express.json());

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
