const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const UserModel = mongoose.model("user");

const returnUserFromToken = async (req) => {
  try {
    const token = req.headers["x-access-token"];
    const decoded = jwt.decode(token);
    const user = await UserModel.findById(decoded._id);
    return user;
  } catch (error) {
    return error;
  }
};

exports.returnUserFromToken = returnUserFromToken;
