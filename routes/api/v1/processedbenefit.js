const express = require("express");
const router = express.Router();
const processedBenefitApi = require("../../../controllers/api/v1/benefitsProcessed");
const jwt = require('jsonwebtoken');
const passport = require("passport");

router.post("/create", passport.authenticate("jwt", { session: false }), processedBenefitApi.create);
router.post("/approve", passport.authenticate("jwt", { session: false }), processedBenefitApi.approve);
router.post("/disapprove", passport.authenticate("jwt", { session: false }), processedBenefitApi.disapprove);
router.get("/all", passport.authenticate("jwt", { session: false }), processedBenefitApi.all);
//passport will put an authentication check on out delete request and

module.exports = router;