const {
  verifyToken,
  verifySeller,
  verifyProductOwner,
  verifyAccountOwner,
  verifyThisSeller,
} = require("../services/verifyers");
const express = require("express");
const routes = express.Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

routes.get("/", (req, res) => {
  return res.json({ msg: "Server Cliniks" });
});

const authController = require("../controllers/auth.controller");
routes.post("/auth", authController.auth);
routes.post("/verifyToken", authController.verifyToken);

const userController = require("../controllers/user.controller");
routes.post("/addUser", userController.addUser);
routes.patch(
  "/addUserImage/:id",
  verifyToken,
  verifyAccountOwner,
  upload.single("image"),
  userController.addImage
);
routes.patch(
  "/updateUser/:id",
  verifyToken,
  verifyAccountOwner,
  userController.updateUser
);
routes.get("/users", verifyToken, userController.getAllUsers);
routes.get("/user/:id", userController.getOneUser);
routes.delete(
  "/deleteUserImage/:id",
  verifyToken,
  verifyAccountOwner,
  userController.deleteImage
);
routes.patch(
  "/addToCart/:id",
  verifyToken,
  verifyAccountOwner,
  userController.addToCart
);
routes.patch(
  "/removeFromCart/:id",
  verifyToken,
  verifyAccountOwner,
  userController.removeFromCart
);
routes.patch(
  "/incrementProduct/:id",
  verifyToken,
  verifyAccountOwner,
  userController.incrementProduct
);
routes.patch(
  "/decrementProduct/:id",
  verifyToken,
  verifyAccountOwner,
  userController.decrementProduct
);
routes.patch("/likeProduct/:id", verifyToken, userController.likeProduct);
routes.patch(
  "/favoriteProduct/:id",
  verifyToken,
  userController.favoriteProduct
);
routes.get("/getMyUser", verifyToken, userController.getMyUser);

const productsController = require("../controllers/products.controller");
routes.get("/product/:id", verifyToken, productsController.searchOneProduct);
routes.get("/products/all", productsController.searchAllProducts);
routes.get(
  "/productsFromSeller/:id",
  verifyToken,
  productsController.searchAllProductsFromSeller
);
routes.get("/searchBestProducts/", productsController.searchBestProducts);

const storeControler = require("../controllers/store.controller");
routes.post(
  "/addProduct",
  verifyToken,
  verifySeller,
  storeControler.addProduct
);
routes.post("/createStore", verifyToken, storeControler.createStore);
routes.patch(
  "/addStoreImage/:id",
  verifyToken,
  verifyThisSeller,
  upload.single("image"),
  storeControler.addImage
);
routes.delete(
  "/deleteStoreImage/:id",
  verifyToken,
  verifyThisSeller,
  storeControler.deleteImage
);
routes.get("/findOneStore/:id", storeControler.findStoreById);
routes.get("/findAllStores", storeControler.findStores);
routes.patch(
  "/updateStoreInfo/:id",
  verifyToken,
  verifyThisSeller,
  storeControler.updateStoreInfo
);
routes.patch(
  "/addProductImg/:id",
  verifyToken,
  verifySeller,
  upload.single("image"),
  storeControler.addProductImage
);
routes.patch(
  "/updateProduct/:id",
  verifyToken,
  verifySeller,
  verifyProductOwner,
  storeControler.updateProduct
);
routes.delete(
  "/deleteProductImage/:id",
  verifyToken,
  verifySeller,
  verifyProductOwner,
  storeControler.deleteProductImage
);
routes.get("/store/:name", storeControler.findStoreByName);
routes.get("/findAllStores", storeControler.findStores);

module.exports = routes;
