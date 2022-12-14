const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const { sign, JWT_EXPIRES_IN } = require("../utils/jwt");
const UserModel = mongoose.model("user");

module.exports = {
  async auth(req, res) {
    try {
      const { username, password } = req.body;
      const user = await UserModel.findOne({ username: username });
      const match = await bcrypt.compare(password, user?.password);
      const assinatura = sign(
        { _id: user?._id },
        `${process.env.TOKEN_SECRET}`,
        { expiresIn: JWT_EXPIRES_IN }
      );
      const accessToken = jwt.sign(
        { _id: user?._id, assinatura },
        `${process.env.TOKEN_SECRET}`
      );
      if (match) {
        res.json({ accessToken: accessToken, userId: user?._id });
      } else {
        res.status(400).send({ message: "Invalid Credentials" });
      }
    } catch (error) {
      res.status(400).send({ error });
    }
  },
  async verifyToken(req, res) {
    try {
      const { token } = req.body;
      jwt.verify(token, `${process.env.TOKEN_SECRET}`, (err, decoded) => {
        if (err) return res.status(200).send(false);
        decoded._id;
        return res.status(200).send(true);
      });
    } catch (error) {
      return res.status(200).send(false);
    }
  },
};
