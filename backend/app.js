const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const app = express();
const connectToDatabse = require("./database/db");
const userRoutes = require("./routes/user.routes");

connectToDatabse();
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Running on / route");
});
app.use("/users", userRoutes);

module.exports = app;
