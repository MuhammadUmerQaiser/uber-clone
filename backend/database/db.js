const mongoose = require("mongoose");

const connectToDatabse = () => {
  mongoose
    .connect(process.env.DB_URI)
    .then(() => {
      console.log("Connected to DB.");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectToDatabse;
