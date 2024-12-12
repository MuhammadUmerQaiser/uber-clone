const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const { userRegisterValidation, userLoginValidation } = require("../validation/user.validator");
const { authUser } = require("../middleware/auth.middleware");

router.post("/register", userRegisterValidation, userController.registerUser);
router.post("/login", userLoginValidation, userController.loginUser);
router.get("/profile", authUser, userController.getUserProfile);
router.get("/logout", authUser, userController.logoutUser);

module.exports = router;
