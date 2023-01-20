"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsRoutes = void 0;
const express_1 = require("express");
const verifyers_1 = require("../middlewares/verifyers");
const ProductsUseCases_1 = require("../useCases/ProductsUseCases");
const ProductsRoutes = (0, express_1.Router)();
exports.ProductsRoutes = ProductsRoutes;
ProductsRoutes.get("/", ProductsUseCases_1.productsUseCases.FineOne);
ProductsRoutes.get("/all", ProductsUseCases_1.productsUseCases.FindAll);
ProductsRoutes.post("/", verifyers_1.verifyers.verifySeller, 
// verifyers.verifyThisSeller,
ProductsUseCases_1.productsUseCases.CreateProduct);
ProductsRoutes.patch("/:id", ProductsUseCases_1.productsUseCases.Update);
ProductsRoutes.delete("/:id", ProductsUseCases_1.productsUseCases.Delete);
