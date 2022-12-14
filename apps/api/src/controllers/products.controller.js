const mongoose = require("mongoose");
const ProductModel = mongoose.model("product");
const UserModel = mongoose.model("user");
const StoreModel = mongoose.model("store");
const { returnUserFromToken } = require("../services/returnUserFromToken");

module.exports = {
  async searchOneProduct(req, res) {
    try {
      const { id } = req.params;
      let Data = await ProductModel.findById(id);
      const seller = await StoreModel.findById(Data.owner);
      const { storeInfo, img, name, tokenStripe } = seller;
      const UpdateView = await ProductModel.findByIdAndUpdate(id, { statistics: { ...Data.statistics, views: +Data.statistics.views + 1 } }, { new: true });
      Data.ownerData = { storeInfo, img, name, tokenStripe };
      Data.statistics = UpdateView.statistics;
      return res.json(Data);
    } catch (err) {
      return res.status(400).send("Produto não encontrado");
    }
  },
  async searchAllProducts(req, res) {
    try {
      const { page = 1, limit = 20 } = req.query;
      const Data = await ProductModel.paginate({}, { page, limit });
      return res.json(Data);
    } catch (err) {
      return res.status(400).send("Produtos não encontrados");
    }
  },
  async searchAllProductsFromSeller(req, res) {
    try {
      const { id } = req.params;
      const findProducts = await ProductModel.find({ owner: id });
      return res.json(findProducts);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async searchBestProducts(req, res) {
    return res.json("deve vir os melhores produtos com paginação");
  },
};
