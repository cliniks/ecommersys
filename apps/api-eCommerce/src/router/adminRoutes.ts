import { Router } from "express";
import { AdminUseCases } from "../useCases/AdminUseCases";

const adminRoutes: Router = Router();

adminRoutes.get("/commission", AdminUseCases.commission.Global.FineOne);
adminRoutes.get("/commission/all", AdminUseCases.commission.Global.FindAll);
adminRoutes.post("/commission", AdminUseCases.commission.Global.addOne);
adminRoutes.patch("/commission/:id", AdminUseCases.commission.Global.Update);
adminRoutes.delete("/commission/:id", AdminUseCases.commission.Global.Delete);

adminRoutes.get("/commission/store", AdminUseCases.commission.Store.FineOne);
adminRoutes.get(
  "/commission/store/all",
  AdminUseCases.commission.Store.FindAll
);
adminRoutes.post("/commission/store", AdminUseCases.commission.Store.addOne);
adminRoutes.patch(
  "/commission/store/:id",
  AdminUseCases.commission.Store.Update
);
adminRoutes.delete(
  "/commission/store/:id",
  AdminUseCases.commission.Store.Delete
);

adminRoutes.get(
  "/commission/category",
  AdminUseCases.commission.Category.FineOne
);
adminRoutes.get(
  "/commission/category/all",
  AdminUseCases.commission.Category.FindAll
);
adminRoutes.get(
  "/commission/category/:storeId",
  AdminUseCases.commission.Category.storeCategoryCommission
);
adminRoutes.post(
  "/commission/category",
  AdminUseCases.commission.Category.addOne
);
adminRoutes.patch(
  "/commission/category/:id",
  AdminUseCases.commission.Category.Update
);
adminRoutes.delete(
  "/commission/category/:id",
  AdminUseCases.commission.Category.Delete
);

adminRoutes.get(
  "/commission/product",
  AdminUseCases.commission.Product.FineOne
);
adminRoutes.get(
  "/commission/product/all",
  AdminUseCases.commission.Product.FindAll
);
adminRoutes.get(
  "/commission/product/:storeId",
  AdminUseCases.commission.Product.storeProductCommission
);
adminRoutes.post(
  "/commission/product",
  AdminUseCases.commission.Product.addOne
);
adminRoutes.patch(
  "/commission/product/:id",
  AdminUseCases.commission.Product.Update
);
adminRoutes.delete(
  "/commission/product/:id",
  AdminUseCases.commission.Product.Delete
);

export { adminRoutes };
