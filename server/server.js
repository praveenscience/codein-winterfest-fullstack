const express = require("express");
const app = express();

app.get("/api/hello", (req, res) => {
  res.json("I work as a SDE");
});

app.listen(5000, () => {
  console.log(`Successfully started server in Port 5000!`);
});
