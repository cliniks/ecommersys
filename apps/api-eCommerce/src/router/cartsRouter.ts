import { Router } from "express";
import { verifyers } from "../middlewares/verifyers";
import { cartsUseCases } from "../useCases/CartsUseCases";

const CartRouter: Router = Router();

CartRouter.get("/", verifyers.verifyToken, cartsUseCases.FineOne);

CartRouter.get("/all", verifyers.verifyAdmin, cartsUseCases.FindAll);

CartRouter.get("/getMyCart", verifyers.verifyToken, cartsUseCases.getMyCart);

CartRouter.post("/", verifyers.verifyToken, cartsUseCases.Add);

CartRouter.patch("/:id", verifyers.verifyToken, cartsUseCases.Update);

CartRouter.patch(
  "/incrementProduct/:id",
  verifyers.verifyToken,
  cartsUseCases.increment
);

CartRouter.patch(
  "/decrementProduct/:id",
  verifyers.verifyToken,
  cartsUseCases.decrement
);

CartRouter.post(
  "/insertCoupon/",
  verifyers.verifyToken,
  cartsUseCases.insertCoupon
);

CartRouter.delete("/:id", verifyers.verifyToken, cartsUseCases.Delete);

export { CartRouter };
