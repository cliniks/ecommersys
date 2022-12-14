import mongoose from "mongoose";

const URI: string = `${process.env.DB_HOST}`;
const connectDB = () => {
  mongoose.connect(URI);
};

module.exports = connectDB;
