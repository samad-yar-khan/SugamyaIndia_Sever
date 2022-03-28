const express = require("express");
const router = express.Router();
const disabeledApi = require("../../../controllers/api/v1/disabeled");
const jwt = require('jsonwebtoken');
const passport = require("passport");

router.post("/create", passport.authenticate("jwt", { session: false }), disabeledApi.create);
router.post("/approve", passport.authenticate("jwt", { session: false }), disabeledApi.approve);
router.post("/disapprove", passport.authenticate("jwt", { session: false }), disabeledApi.disapprove);
//passport will put an authentication check on out delete request and

module.exports = router;