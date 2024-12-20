const blackListTokenModel = require("../models/blackListToken.model");
const captainModel = require("../models/captain.model");
const captainServive = require("../services/captain.service");
const { validationResult } = require("express-validator");

const registerCaptain = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, email, password, vehicle } = req.body;

    const isCaptainAlreadyExist = await captainModel.findOne({ email });

    if (isCaptainAlreadyExist) {
      return res.status(400).json({ message: "Captain already exist" });
    }

    const hashedPassword = await captainModel.hashPassword(password);

    const captain = await captainServive.createCaptain({
      firstname: fullname.firstname,
      lastname: fullname.lastname,
      email,
      password: hashedPassword,
      color: vehicle.color,
      plate: vehicle.plate,
      capacity: vehicle.capacity,
      vehicleType: vehicle.vehicleType,
    });

    const token = captain.generateAuthToken();

    return res.status(200).json({ token, captain });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

const loginCaptain = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    const captain = await captainModel.findOne({ email }).select("+password");

    if (!captain) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const isMatch = await captain.comparePassword(password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = captain.generateAuthToken();
    res.cookie("token", token);
    return res.status(200).json({ token, captain });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

const getCaptainProfile = async (req, res, next) => {
  try {
    return res.status(200).json(req.captain);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

const logoutCaptain = async (req, res, next) => {
  try {
    res.clearCookie("token");
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

    await blackListTokenModel.create({ token });
    return res.status(200).json({ message: "Logged out" });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = {
  registerCaptain,
  loginCaptain,
  getCaptainProfile,
  logoutCaptain,
};
