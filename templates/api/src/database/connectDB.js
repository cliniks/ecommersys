const mongoose = require("mongoose");

const URI = process.env.DB_HOST;
const authMongo = { user: process.env.DB_USER, pass: process.env.DB_PASS };
const connectDB = async () => {
  await mongoose.connect(URI, { user: authMongo.user, pass: authMongo.pass, useUnifiedTopology: true, useNewUrlParser: true });
};

module.exports = connectDB;
