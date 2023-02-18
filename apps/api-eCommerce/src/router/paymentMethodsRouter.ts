import { Router } from "express";
import { paymentMethodUseCases } from "../useCases/paymentMethodsUseCases";

const paymentMethodsRouter: Router = Router();

paymentMethodsRouter.get("/", paymentMethodUseCases.FindSingle);

paymentMethodsRouter.get("/all", paymentMethodUseCases.FindAll);

paymentMethodsRouter.get("/myUserCards", paymentMethodUseCases.myUserCards);

paymentMethodsRouter.get("/mySellerCards", paymentMethodUseCases.mySellerCards);

paymentMethodsRouter.post("/", paymentMethodUseCases.AddPaymentMethod);

paymentMethodsRouter.patch("/:id", paymentMethodUseCases.Update);

paymentMethodsRouter.delete("/:id", paymentMethodUseCases.Delete);

export { paymentMethodsRouter };
