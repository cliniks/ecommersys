import { Router } from "express";
// import { verifyers } from "../middlewares/verifyers";
import { cartsUseCases } from "../useCases/CartsUseCases";

const CartRouter = Router();

CartRouter.get("/", cartsUseCases.FineOne);

CartRouter.get("/all", cartsUseCases.FindAll);

CartRouter.post("/", cartsUseCases.Add);

CartRouter.patch("/:id", cartsUseCases.Update);

CartRouter.delete("/:id", cartsUseCases.Delete);

export { CartRouter };
