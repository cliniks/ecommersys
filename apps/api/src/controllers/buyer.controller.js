const mongoose = require("mongoose");
const ProductModel = mongoose.model("product");
const UserModel = mongoose.model("user");
const { returnUserFromToken } = require("../services/returnUserFromToken");

module.exports = {
  async orderBuyProduct(req, res) {},
  async confirmBuyProduct(req, res) {},
  async cancelOrderProduct(req, res) {},
  async generatePix(req, res) {},
  async confirmPix(req, res) {},
};
