const express = require('express');

const router = express.Router();
// const Bowlings = require('../models/Bowling');
// const keyToUpperCase = require("../services/keyToUpperCase");
// const sortPerCreationDate = require("../services/sortPerCreationDate");

router.get('/', (req, res) => {
  // let score= 0;
  // for(let i=0; i < bowling.length;i++){

  // }
  res.sendfile('index.html');
});
module.exports = router;
