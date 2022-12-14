import { UserSchema } from "../models/user.model";

import jwt from "jsonwebtoken";
import mongoose from "mongoose";
const UserModel = mongoose.model("user", UserSchema);

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

export { returnUserFromToken };
