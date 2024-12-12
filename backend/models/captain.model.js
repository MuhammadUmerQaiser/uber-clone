const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const captainScheman = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minLength: [3, "First Name must be atleast 3 characters long"],
    },
    lastname: {
      type: String,
      minLength: [3, "Last Name must be atleast 3 characters long"],
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minLength: [6, "First Name must be atleast 6 characters long"],
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  socketId: {
    type: String,
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "inactive",
  },
  vehicle: {
    color: {
      type: String,
      required: true,
      minLength: [3, "Color must be atleast 3 characters long"],
    },
    plate: {
      type: String,
      required: true,
      minLength: [3, "Plate must be atleast 3 characters long"],
    },
    capacity: {
      type: Number,
      required: true,
      minLength: [1, "Capacity must be atleast 1"],
    },
    vehicleType: {
      type: String,
      enum: ["motorcycle", "car", "auto"],
      required: true,
    },
  },
  location: {
    lat: {
      type: Number,
    },
    lng: {
      type: Number,
    },
  },
});

captainScheman.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });
  return token;
};

captainScheman.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

captainScheman.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};

const captainModel = mongoose.model("captain", captainScheman);

module.exports = captainModel;
