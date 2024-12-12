const express = require("express");
const router = express.Router();
const captainController = require("../controllers/captain.controller");
const { captainRegisterValidation, captainLoginValidation } = require("../validation/captain.validator");
const { authCaptain } = require("../middleware/auth.middleware");

router.post("/register", captainRegisterValidation, captainController.registerCaptain);
router.post("/login", captainLoginValidation, captainController.loginCaptain);
router.get("/profile", authCaptain, captainController.getCaptainProfile);
router.get("/logout", authCaptain, captainController.logoutCaptain);

module.exports = router;
