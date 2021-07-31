const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: path.join(__dirname, "/views") });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
