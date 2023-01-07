import { Router } from "express";
// import { verifyers } from "../middlewares/verifyers";
import { sellersUseCases } from "../useCases/SellersUseCases";

const SellersRoutes = Router();

SellersRoutes.get("/", sellersUseCases.FineOne);

SellersRoutes.get("/all", sellersUseCases.FindAll);

SellersRoutes.get("/getMyStore", sellersUseCases.getMyStore);

SellersRoutes.get("/getMyProducts", sellersUseCases.getMyProducts);

SellersRoutes.get("/getMyCategories", sellersUseCases.getMyCategories);

SellersRoutes.get("/getMyCoupons", sellersUseCases.getMyCoupons);

SellersRoutes.post("/", sellersUseCases.Add);

SellersRoutes.patch("/:id", sellersUseCases.Update);

SellersRoutes.delete("/:id", sellersUseCases.Delete);

SellersRoutes.get("/dashboard", sellersUseCases.DashboardStats);

export { SellersRoutes };
