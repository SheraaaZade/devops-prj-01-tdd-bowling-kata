const express = require("express");
 const Bowlings = require("../models/Bowling");
// const keyToUpperCase = require("../services/keyToUpperCase");
// const sortPerCreationDate = require("../services/sortPerCreationDate");
const router = express.Router();

router.get("/", (req, res) => {
  const bowling = Bowlings.list();
  res.send(bowling);
});

module.exports = router;
