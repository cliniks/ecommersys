const { uploadImage, deleteFile } = require("../database/s3");
const mongoose = require("mongoose");
const UserModel = mongoose.model("user");
const StoreModel = mongoose.model("store");
const ProductModel = mongoose.model("product");
const bcrypt = require("bcrypt");
const fs = require("fs");
const { returnUserFromToken } = require("../services/returnUserFromToken");
const { ApiGP } = require("../services/ApiGatewayPag");
const { ApiME } = require("../services/ApiMelhorEnvio");
const util = require("util");
const unlinkFile = util.promisify(fs.unlink);

module.exports = {
  async addUser(req, res) {
    try {
      const { password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new UserModel({
        ...req.body,
        password: hashedPassword,
      }).save();
      const savedUser = await user;
      // await ApiGP.addClient(savedUser, UserModel);
      // await ApiME.addClient(savedUser, UserModel);
      const updatedUser = UserModel.findById(savedUser._id);
      return res.json(updatedUser);
    } catch (error) {
      console.log(error);
      return res.status(400).send({ error });
    }
  },
  async getAllUsers(req, res) {
    try {
      const { page = 1, limit = 10 } = req.query;
      const Data = await UserModel.paginate({}, { page, limit });
      return res.json(Data);
    } catch (err) {
      return res.status(400).send("Usuários não encontrados");
    }
  },
  async getOneUser(req, res) {
    try {
      const { id } = req.params;
      const User = await UserModel.findById(id);
      const Store = await StoreModel;
      const {
        userInfo,
        _id,
        img,
        myOrders,
        myBuys,
        favorites,
        likes,
        cart,
        access,
        storeId,
        wallet,
      } = User;
      return res.json({
        userInfo,
        _id,
        img,
        myOrders,
        myBuys,
        favorites,
        likes,
        cart,
        access,
        storeId,
        wallet,
      });
    } catch (err) {
      return res.status(400).send("Usuário não encontrado");
    }
  },
  async addImage(req, res) {
    try {
      const UserId = await returnUserFromToken(req);
      const user = await UserModel.findById(UserId.id);
      const file = req.file;
      const uploadToS3 = await uploadImage(file);
      const imgLocation = uploadToS3.Location;
      await unlinkFile(file.path);
      if (user.img !== process.env.INITIAL_IMAGE) await deleteFile(user.img);
      const updateUser = await UserModel.findByIdAndUpdate(
        user._id,
        { img: imgLocation },
        { new: true }
      );
      return res.json(updateUser);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async deleteImage(req, res) {
    try {
      const UserId = await returnUserFromToken(req);
      const user = await UserModel.findById(UserId.id);
      if (user.img !== process.env.INITIAL_IMAGE) {
        await UserModel.findByIdAndUpdate(
          UserId.id,
          { img: process.env.INITIAL_IMAGE },
          { new: true }
        );
        await deleteFile(user.img);
        return res.json(`Deletado com sucesso`);
      } else {
        return res.json(`Esta imagem já foi deletada`);
      }
    } catch (error) {
      res.status(400).send(error);
    }
  },
  async updateUser(req, res) {
    try {
      const user = await UserModel.findById(req.params.id);
      const newInfo = req.body;
      const updateUser = await UserModel.findByIdAndUpdate(
        req.params.id,
        { userInfo: { ...user.userInfo, ...newInfo } },
        { new: true }
      );
      return res.json(updateUser);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async addToCart(req, res) {
    try {
      const { id: userId } = req.params;
      const { productId, qnt, sizeId } = req.body;
      const user = await UserModel.findById(userId);
      const product = await ProductModel.findById(productId);
      const validateUnique = user.cart.filter(
        (item) => item?._id === `${productId}/${sizeId}`
      );
      if (validateUnique.length > 0) {
        const ProductSizeMaxCount = product.sizes.filter(
          (item) => item?._id.toString() === sizeId.toString()
        );
        const updateProductCount = user.cart.map((item) => {
          if (item._id === `${productId}/${sizeId}`) {
            if (item.qnt < ProductSizeMaxCount[0].qnt) {
              item.qnt++;
            }
            return item;
          }
          return item;
        });
        await UserModel.findByIdAndUpdate(userId, { cart: updateProductCount });
        const userUpdated = await UserModel.findById(userId);
        return res.json(userUpdated.cart);
      } else {
        const productSize = product.sizes.filter(
          (item) => item?._id.toString() === sizeId.toString()
        );
        const cartObject = {
          _id: `${productId}/${sizeId}`,
          productId,
          name: product.name,
          img: product.img[0],
          value: product.value,
          size: { type: productSize[0].sizeType, _id: productSize[0]._id },
          qnt,
        };
        await UserModel.findByIdAndUpdate(userId, {
          $push: { cart: { ...cartObject } },
        });
        const userUpdated = await UserModel.findById(userId);
        return res.json(userUpdated.cart);
      }
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async removeFromCart(req, res) {
    try {
      const { id: userId } = req.params;
      const { productId, sizeId } = req.body;
      const user = await UserModel.findById(userId);
      if (user.cart.length > 0) {
        await UserModel.findByIdAndUpdate(userId, {
          $pull: { cart: { _id: `${productId}/${sizeId}` } },
        });
        const userUpdated = await UserModel.findById(userId);
        return res.json(userUpdated.cart);
      } else {
        return res.status(400).send("Carrinho está vazio");
      }
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async incrementProduct(req, res) {
    try {
      const { id: userId } = req.params;
      const { productId, sizeId } = req.body;
      const user = await UserModel.findById(userId);
      const product = await ProductModel.findById(productId);
      if (user.cart.length > 0) {
        const ProductSizeMaxCount = product.sizes.filter(
          (item) => item?._id.toString() === sizeId.toString()
        );
        const updateProductCount = user.cart.map((item) => {
          if (item._id === `${productId}/${sizeId}`) {
            if (item.qnt < ProductSizeMaxCount[0].qnt) {
              item.qnt++;
            }
            return item;
          }
          return item;
        });
        await UserModel.findByIdAndUpdate(userId, { cart: updateProductCount });
        const userUpdated = await UserModel.findById(userId);
        return res.json(userUpdated.cart);
      } else {
        return res.status(400).send("Você não possui produtos em seu carrinho");
      }
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async decrementProduct(req, res) {
    try {
      const { id: userId } = req.params;
      const { productId, sizeId } = req.body;
      const user = await UserModel.findById(userId);
      if (user.cart.length > 0) {
        const updateProductCount = Promise.all(
          user.cart.map(async (item) => {
            if (item._id === `${productId}/${sizeId}`) {
              if (item.qnt > 1) {
                return { ...item, qnt: (item.qnt -= 1) };
              } else {
                await UserModel.findByIdAndUpdate(userId, {
                  $pull: { cart: { _id: `${productId}/${sizeId}` } },
                });
                return null;
              }
            }
            return item;
          })
        );
        const getUpdatedCart = await updateProductCount;
        const filterUpdatedCart = getUpdatedCart.filter(
          (item) => item !== null
        );
        await UserModel.findByIdAndUpdate(userId, { cart: filterUpdatedCart });
        const userUpdated = await UserModel.findById(userId);
        return res.json(userUpdated.cart);
      } else {
        return res.status(400).send("Você não possui produtos em seu carrinho");
      }
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async likeProduct(req, res) {
    try {
      const { id } = req.params;
      const userToken = await returnUserFromToken(req);
      const product = await ProductModel.findById(id);
      let likers = product.likers;
      if (!likers.includes(userToken.id)) {
        const updateProduct = await ProductModel.findByIdAndUpdate(
          id,
          { likes: product.likes + 1, $push: { likers: userToken.id } },
          { new: true }
        );
        const updateUser = await UserModel.findByIdAndUpdate(
          userToken.id,
          { $push: { likes: id } },
          { new: true }
        );
        return res.json({ updateProduct, updateUser });
      } else {
        const updateLikers = likers.filter((item) => item !== userToken.id);
        const updatedProduct = await ProductModel.findByIdAndUpdate(
          id,
          { likes: product.likes - 1, likers: updateLikers },
          { new: true }
        );
        const updatedUser = await UserModel.findByIdAndUpdate(
          userToken.id,
          { $pull: { likes: id } },
          { new: true }
        );
        return res.json({ updatedProduct, updatedUser });
      }
    } catch (error) {
      return res.json(`Não foi possível atualizar imagem`);
    }
  },
  async favoriteProduct(req, res) {
    try {
      const { id } = req.params;
      const userToken = await returnUserFromToken(req);
      const product = await ProductModel.findById(id);
      let favorites = product.favorites;
      if (!favorites.includes(userToken.id)) {
        const updateProduct = await ProductModel.findByIdAndUpdate(
          id,
          { $push: { favorites: userToken.id } },
          { new: true }
        );
        const updateUser = await UserModel.findByIdAndUpdate(
          userToken.id,
          { $push: { favorites: id } },
          { new: true }
        );
        return res.json({ updateProduct, updateUser });
      } else {
        const updateFavorites = favorites.filter(
          (item) => item !== userToken.id
        );
        const updatedProduct = await ProductModel.findByIdAndUpdate(
          id,
          { favorites: updateFavorites },
          { new: true }
        );
        const updatedUser = await UserModel.findByIdAndUpdate(
          userToken.id,
          { $pull: { favorites: id } },
          { new: true }
        );
        return res.json({ updatedProduct, updatedUser });
      }
    } catch (error) {
      return res.json(`Não foi possível atualizar imagem`);
    }
  },
  async getMyUser(req, res) {
    try {
      const userToken = await returnUserFromToken(req);
      const user = await UserModel.findById(userToken.id);
      let userDate = ({
        username,
        wallet,
        img,
        userInfo,
        myOrders,
        myBuys,
        wishList,
        favorites,
        likes,
        messages,
        cart,
        storeId,
        storeData,
        access,
      } = user);
      return res.json(userDate);
    } catch (error) {
      return res.json(error);
    }
  },
};
