const express = require("express");
const router = express.Router();
const benefitApi = require("../../../controllers/api/v1/benefits");
const jwt = require('jsonwebtoken');
const passport = require("passport");



router.post("/create", passport.authenticate("jwt", { session: false }), benefitApi.create);
router.delete("/delete/:id", passport.authenticate("jwt", { session: false }), benefitApi.destroy);
router.get("/all", passport.authenticate("jwt", { session: false }), benefitApi.getBenefits);
//passport will put an authentication check on out delete request and

module.exports = router;