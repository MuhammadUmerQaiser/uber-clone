const { body } = require("express-validator");

const captainRegisterValidation = [
  body("email").isEmail().withMessage("Invalid Email"),
  body("fullname.firstname")
    .isLength({ min: 3 })
    .withMessage("First Name must be atleast 3 characters long"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be atleast 6 characters long"),
  body("vehicle.color")
    .isLength({ min: 3 })
    .withMessage("Color must be atleast 3 characters long"),
  body("vehicle.plate")
    .isLength({ min: 3 })
    .withMessage("Plate must be atleast 3 characters long"),
  body("vehicle.capacity")
    .isLength({ min: 1 })
    .withMessage("Capacity must be atleast 1"),
  body("vehicle.vehicleType")
    .isIn(["motorcycle", "car", "auto"])
    .withMessage("Invalid Vehicle Type"),
];

const captainLoginValidation = [
  body("email").isEmail().withMessage("Invalid Email"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be atleast 6 characters long"),
];

module.exports = {
  captainRegisterValidation,
  captainLoginValidation,
};
