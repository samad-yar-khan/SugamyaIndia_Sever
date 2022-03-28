const express = require("express");
const router = express.Router();
const disabilityApi = require("../../../controllers/api/v1/disability");
const jwt = require('jsonwebtoken');
const passport = require("passport");



router.post("/create", passport.authenticate("jwt", { session: false }), disabilityApi.create);
router.delete("/delete/:id", passport.authenticate("jwt", { session: false }), disabilityApi.destroy);
router.get("/all", passport.authenticate("jwt", { session: false }), disabilityApi.getDisabilities);
//passport will put an authentication check on out delete request and

module.exports = router;