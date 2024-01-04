const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.SERVER_PORT;
const cors = require("cors");

app.use(express.json());

app.use(cors());
app.use("/api", require("./API/Users/Routers"));
app.use("/api", require("./API/Stories/Routers"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
