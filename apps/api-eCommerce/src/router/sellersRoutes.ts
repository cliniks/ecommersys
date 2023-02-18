import { Router } from "express";
// import { verifyers } from "../middlewares/verifyers";
import { sellersUseCases } from "../useCases/SellersUseCases";
import multer from "multer";
import { SellerPoliciesRoutes } from "./sellerPoliciesRoutes";

const upload = multer({ dest: "uploads/" });

const SellersRoutes: Router = Router();

SellersRoutes.get("/", sellersUseCases.FineOne);

SellersRoutes.get("/all", sellersUseCases.FindAll);

SellersRoutes.get("/getMyStore", sellersUseCases.getMyStore);

SellersRoutes.get("/getMyProducts", sellersUseCases.getMyProducts);

SellersRoutes.get("/getMyCategories", sellersUseCases.getMyCategories);

SellersRoutes.get("/getMyCoupons", sellersUseCases.getMyCoupons);

SellersRoutes.use("policies", SellerPoliciesRoutes);

SellersRoutes.post("/", sellersUseCases.Add);

SellersRoutes.patch(
  "/updateStoreImage",
  upload.single("img"),
  sellersUseCases.updateStoreImage
);

SellersRoutes.patch(
  "/updateStoreBanner",
  upload.single("img"),
  sellersUseCases.updateStoreBanner
);

SellersRoutes.patch("/:id", sellersUseCases.Update);

SellersRoutes.delete("/:id", sellersUseCases.Delete);

SellersRoutes.get("/dashboard", sellersUseCases.DashboardStats);

export { SellersRoutes };
