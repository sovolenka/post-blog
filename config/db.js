const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const MONGO_HOSTNAME = process.env.APP_MONGO_HOST;
const MONGO_PORT = process.env.MONGO_INITDB_ROOT_PORT;
const MONGO_DB = process.env.MONGO_INITDB_ROOT_DB;

const url = `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`;

const connectDB = async () => {
  try {
    await mongoose.connect(url);
    console.log("Connected to MongoDB!");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
