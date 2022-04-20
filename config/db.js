/** @format */

const mongoose = require("mongoose");
require("dotenv").config();

const connect = () => {
  try {
    return mongoose.connect(
      process.env.MONGO_URL,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => {
        console.log("DB connected");
      }
    );
  } catch (error) {
    console.log("could not connect", error);
  }
};

module.exports = connect;
