require("dotenv").config();
const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
const connect = () => {
  mongoose.connect(process.env.MONGO_URL);
};

module.exports = { connect };
