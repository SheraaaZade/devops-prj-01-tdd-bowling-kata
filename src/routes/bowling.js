const express = require("express");
 const Bowlings = require("../models/Bowling");
// const keyToUpperCase = require("../services/keyToUpperCase");
// const sortPerCreationDate = require("../services/sortPerCreationDate");
const router = express.Router();

router.get("/", (req, res) => {
  let score= 0;
  // for(let i=0; i < bowling.length;i++){

  // }

  res.render('bowling',Bowlings.list());
});

module.exports = router;
