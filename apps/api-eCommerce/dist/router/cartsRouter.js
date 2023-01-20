"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartRouter = void 0;
const express_1 = require("express");
const verifyers_1 = require("../middlewares/verifyers");
const CartsUseCases_1 = require("../useCases/CartsUseCases");
const CartRouter = (0, express_1.Router)();
exports.CartRouter = CartRouter;
CartRouter.get("/", CartsUseCases_1.cartsUseCases.FineOne);
CartRouter.get("/all", verifyers_1.verifyers.verifyAdmin, CartsUseCases_1.cartsUseCases.FindAll);
CartRouter.get("/myCart", verifyers_1.verifyers.verifyToken, CartsUseCases_1.cartsUseCases.FindAll);
CartRouter.post("/", CartsUseCases_1.cartsUseCases.Add);
CartRouter.patch("/:id", CartsUseCases_1.cartsUseCases.Update);
CartRouter.delete("/:id", CartsUseCases_1.cartsUseCases.Delete);
