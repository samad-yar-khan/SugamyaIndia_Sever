const express = require("express");

const router = express.Router();



router.use('/users' , require('./users'));
router.use('/disability' , require('./disability'));
router.use('/disabeled' , require('./disabeled'));
router.use('/benefit' , require('./benefit'));




module.exports = router;

//
//npm install --save bcrypt body-parser jsonwebtoken passport passport-jwt passport-local
