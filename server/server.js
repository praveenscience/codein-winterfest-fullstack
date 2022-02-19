const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json("Hello CodeIN");
});

app.listen(5000, () => {
  console.log(`Successfully started server in Port 5000!`);
});
