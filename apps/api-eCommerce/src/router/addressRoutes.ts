import { Router } from "express";
import { verifyers } from "../middlewares/verifyers";
import { addressUseCases } from "../useCases/AddressUseCases";

const AddressRouter: Router = Router();

AddressRouter.get("/", addressUseCases.FineOne);

AddressRouter.get("/all", addressUseCases.FindAll);

AddressRouter.get("/myCart", verifyers.verifyToken, addressUseCases.FindAll);

AddressRouter.post("/", addressUseCases.Add);

AddressRouter.patch("/:id", addressUseCases.Update);

AddressRouter.delete("/:id", addressUseCases.Delete);

export { AddressRouter };
