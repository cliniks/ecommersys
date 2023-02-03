import { Router } from "express";
import { verifyers } from "../middlewares/verifyers";
import { addressUseCases } from "../useCases/AddressUseCases";

const AddressRouter: Router = Router();

AddressRouter.get("/", addressUseCases.FineOne);

AddressRouter.get(
  "/myUserAddress",
  verifyers.verifyToken,
  addressUseCases.FindAllUser
);

AddressRouter.get(
  "/myStoreAddress",
  verifyers.verifyToken,
  addressUseCases.FindAllStore
);

AddressRouter.post("/user", addressUseCases.AddUser);

AddressRouter.post("/seller", addressUseCases.AddSeller);

AddressRouter.patch("/:id", addressUseCases.Update);

AddressRouter.delete("/:id", addressUseCases.Delete);

export { AddressRouter };
