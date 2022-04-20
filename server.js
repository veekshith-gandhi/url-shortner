/** @format */

const express = require("express");
const connect = require("./config/db");
require("dotenv").config();
const app = express();

const displayRoute = require("./routes/display.routes");

const PORT = process.env.PORT || 8080;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use("/", displayRoute);

const start = async () => {
  await connect();
  app.listen(PORT, () => {
    console.log(`Listening PORT:${PORT}`);
  });
};

module.exports = start;
