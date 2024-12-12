const { body } = require("express-validator");

const userRegisterValidation = [
  body("email").isEmail().withMessage("Invalid Email"),
  body("fullname.firstname")
    .isLength({ min: 3 })
    .withMessage("First Name must be atleast 3 characters long"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be atleast 6 characters long"),
];

const userLoginValidation = [
  body("email").isEmail().withMessage("Invalid Email"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be atleast 6 characters long"),
];

module.exports = {
  userRegisterValidation,
  userLoginValidation,
};
