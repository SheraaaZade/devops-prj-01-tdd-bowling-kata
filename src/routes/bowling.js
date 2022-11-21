const express = require("express");
// const Inventions = require("../models/Invention");
// const keyToUpperCase = require("../services/keyToUpperCase");
// const sortPerCreationDate = require("../services/sortPerCreationDate");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to the bowling !");
});

module.exports = router;
