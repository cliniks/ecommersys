import { Router } from "express";
import { ordersUseCases } from "../useCases/OrdersUseCases";

const ordersRoutes: Router = Router();

ordersRoutes.get("/", ordersUseCases.FineOne);

ordersRoutes.get("/all", ordersUseCases.FindAll);

ordersRoutes.patch("/:id", ordersUseCases.Update);

ordersRoutes.delete("/:id", ordersUseCases.Delete);

export { ordersRoutes };
