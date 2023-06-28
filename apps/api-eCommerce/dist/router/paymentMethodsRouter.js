"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentMethodsRouter = void 0;
const express_1 = require("express");
const paymentMethodsUseCases_1 = require("../useCases/paymentMethodsUseCases");
const paymentMethodsRouter = (0, express_1.Router)();
exports.paymentMethodsRouter = paymentMethodsRouter;
paymentMethodsRouter.get("/", paymentMethodsUseCases_1.paymentMethodUseCases.FindSingle);
paymentMethodsRouter.get("/all", paymentMethodsUseCases_1.paymentMethodUseCases.FindAll);
paymentMethodsRouter.get("/myUserCards", paymentMethodsUseCases_1.paymentMethodUseCases.myUserCards);
paymentMethodsRouter.get("/mySellerCards", paymentMethodsUseCases_1.paymentMethodUseCases.mySellerCards);
paymentMethodsRouter.post("/", paymentMethodsUseCases_1.paymentMethodUseCases.AddPaymentMethod);
paymentMethodsRouter.patch("/:id", paymentMethodsUseCases_1.paymentMethodUseCases.Update);
paymentMethodsRouter.delete("/:id", paymentMethodsUseCases_1.paymentMethodUseCases.Delete);