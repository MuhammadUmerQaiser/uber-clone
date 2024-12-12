const express = require("express");
const router = express.Router();
const captainController = require("../controllers/captain.controller");
const { captainRegisterValidation } = require("../validation/captain.validator");

router.post("/register", captainRegisterValidation, captainController.registerCaptain);

module.exports = router;
