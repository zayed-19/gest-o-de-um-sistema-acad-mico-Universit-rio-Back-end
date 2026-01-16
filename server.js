const express = require("express");
const routesRoot = require("./src/routes/index");
const cors = require("cors");

const app = express();
const PORT = 3002;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use(cors());

app.use(express.json());
app.use("/api/v1", routesRoot);

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
