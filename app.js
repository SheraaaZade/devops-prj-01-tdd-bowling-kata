const express = require("express");
const app = express();
const bowlingRouter = require("./src/routes/bowling");
const port = 3000;

app.use(bowlingRouter);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
  });
module.exports = app;