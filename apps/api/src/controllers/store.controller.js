const mongoose = require("mongoose");
const UserModel = mongoose.model("user");
const StoreModel = mongoose.model("store");
const ProductModel = mongoose.model("product");
const { uploadImage, deleteFile } = require("../database/s3");
const { returnUserFromToken } = require("../services/returnUserFromToken");
const fs = require("fs");
const util = require("util");
const { ApiME } = require("../services/ApiMelhorEnvio");
const { ApiGP } = require("../services/ApiGatewayPag");
const unlinkFile = util.promisify(fs.unlink);

module.exports = {
  async createStore(req, res) {
    try {
      const UserId = await returnUserFromToken(req);
      const user = await UserModel.findById(UserId.id);
      if (user.storeId === "" || user.access !== 2) {
        let StoreOptions = req.body;
        StoreOptions.owner = UserId.id;
        const newStore = new StoreModel(StoreOptions).save();
        const createdStore = await newStore;
        const updateUser = await UserModel.findByIdAndUpdate(UserId, { storeId: createdStore._id.toString(), access: 2 }, { new: true });
        await ApiME.createStore(updateUser, createdStore, StoreModel);
        await ApiGP.createStore(updateUser, createdStore, StoreModel);
        const getStore = await StoreModel.findById(createdStore._id);
        return res.json({ getStore, updateUser });
      } else {
        return res.json("Você já possui uma loja");
      }
    } catch (error) {
      console.log(error);
      return res.status(400).send(error);
    }
  },
  async findStoreById(req, res) {
    try {
      const store = await StoreModel.findById(req.params.id);
      let storeData = store;
      let products = [];
      for (let i = 0; i < store.products.length; i++) {
        const getProduct = await ProductModel.findById(store.products[i]);
        products.push(getProduct);
      }
      storeData.products = products;
      const UpdateStore = await StoreModel.findByIdAndUpdate(
        storeData._id,
        { statistics: { ...store.statistics, views: store.statistics.views + 1 } },
        { new: true }
      );
      return res.json(UpdateStore);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async findStoreByName(req, res) {
    const { name } = req.params.query;
    try {
      const store = await StoreModel.findOne({ name: name });
      return res.json(store);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async findStores(req, res) {
    try {
      const store = await StoreModel.find();
      return res.json(store);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async addImage(req, res) {
    try {
      const UserId = await returnUserFromToken(req);
      const user = await UserModel.findById(UserId.id);
      const store = await StoreModel.findById(user.storeId);
      const file = req.file;
      const uploadToS3 = await uploadImage(file);
      const imgLocation = uploadToS3.Location;
      await unlinkFile(file.path);
      if (store.img !== process.env.INITIAL_IMAGE) await deleteFile(store.img);
      const updateStore = await StoreModel.findByIdAndUpdate(store.id, { img: imgLocation }, { new: true });
      return res.json(updateStore);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async deleteImage(req, res) {
    try {
      const UserId = await returnUserFromToken(req);
      const user = await UserModel.findById(UserId.id);
      const store = await StoreModel.findById(user.storeId);
      if (store.img !== process.env.INITIAL_IMAGE) {
        await StoreModel.findByIdAndUpdate(store._id, { img: process.env.INITIAL_IMAGE }, { new: true });
        await deleteFile(store.img);
        return res.json(`Deletado com sucesso`);
      } else {
        return res.json(`Esta imagem já foi deletada`);
      }
    } catch (error) {
      res.status(400).send(error);
    }
  },
  async updateStoreInfo(req, res) {
    try {
      const UserId = await returnUserFromToken(req);
      const user = await UserModel.findById(UserId.id);
      const store = await StoreModel.findById(user.storeId);
      const newInfos = req.body;
      const updateStore = await StoreModel.findByIdAndUpdate(store._id, { storeInfo: { ...store.storeInfo, ...newInfos } }, { new: true });
      return res.json(updateStore);
    } catch (error) {
      res.status(400).send(error);
    }
  },
  async addProduct(req, res) {
    try {
      let productData = req.body;
      const userToken = await returnUserFromToken(req);
      const user = await UserModel.findById(userToken._id);
      const store = await StoreModel.findById(user.storeId);
      productData.owner = store._id;
      productData.img = [];
      const newProduct = new ProductModel(productData).save();
      const productAdded = await newProduct;
      const updateStore = await StoreModel.findByIdAndUpdate(
        store._id,
        { $push: { products: productAdded._id.toString() }, productsCount: store.productsCount + 1 },
        { new: true }
      );
      // TODO Verificacao se a categoria
      return res.json({ productAdded, updateStore });
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async updateProduct(req, res) {
    try {
      const { id } = req.params;
      const updateItem = await ProductModel.findByIdAndUpdate(id, req.body, { new: true });
      return res.json(updateItem);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async addProductImage(req, res) {
    try {
      const product = await ProductModel.findById(req.params.id);
      const file = req.file;
      const uploadToS3 = await uploadImage(file);
      const imgLocation = uploadToS3.Location;
      await unlinkFile(file.path);
      if (product.img !== process.env.INITIAL_PRODUCT_IMAGE) await deleteFile(product.img);
      const updateProduct = await ProductModel.findByIdAndUpdate(req.params.id, { $push: { img: imgLocation } }, { safe: true, new: true, upsert: true });
      return res.json(updateProduct);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async deleteProductImage(req, res) {
    try {
      const img = req.body.img;
      const product = await ProductModel.findById(req.params.id);
      const images = product.img;
      if (images.includes(img)) {
        const filterImages = images.filter((item) => item !== img);
        await ProductModel.findByIdAndUpdate(req.params.id, { img: filterImages }, { new: true });
        await deleteFile(req.body.img);
        return res.json(`Deletado com sucesso`);
      } else {
        return res.json(`Esta imagem já foi deletada`);
      }
    } catch (error) {
      res.status(400).send(error);
    }
  },
};
