const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const { returnUserFromToken } = require("./returnUserFromToken");
const ProductModel = mongoose.model("product");
const UserModel = mongoose.model("user");

module.exports = {
  async verifyToken(req, res, next) {
    try {
      const token = req.headers["x-access-token"];
      jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
        if (err) return res.status(400).send(err);
        decoded._id;
        next();
      });
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async verifySeller(req, res, next) {
    try {
      const user = await returnUserFromToken(req);
      if (user.access === 2) return next();
      else return res.status(400).send("Usuário não é um vendedor");
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async verifyThisSeller(req, res, next) {
    try {
      const user = await returnUserFromToken(req);
      if (user.storeId.toString() === req.params.id.toString()) return next();
      else return res.status(400).send("Usuário não é um vendedor");
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async verifyProductOwner(req, res, next) {
    try {
      const user = await returnUserFromToken(req);
      const product = await ProductModel.findById(req.params.id);
      if (user._id.toString() === product?.owner) return next();
      else return res.status(400).send("Usuário não é o dono desse produto");
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async verifyAccountOwner(req, res, next) {
    try {
      const GetUserByToken = await returnUserFromToken(req);
      const user = await UserModel.findById(req.params.id);
      if (GetUserByToken._id.toString() === user?._id.toString()) return next();
      else return res.status(400).send("Usuário não é o dono dessa imagem");
    } catch (error) {
      return res.status(400).send(error);
    }
  },
};
