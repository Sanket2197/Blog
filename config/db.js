const mongoose = require("mongoose");

const db = "mongodb://localhost:27017/BlogDB";

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log("Connected to MongoDB ...");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
