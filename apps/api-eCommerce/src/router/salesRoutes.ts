import { Router } from "express";
// import { verifyers } from "../middlewares/verifyers";
import { salesUseCases } from "../useCases/SalesUseCases";

const SalesRoutes: Router = Router();

SalesRoutes.get("/", salesUseCases.FineOne);

SalesRoutes.get("/all", salesUseCases.FindAll);

SalesRoutes.get("/:id", salesUseCases.getSingleOrder);

// SalesRoutes.post("/", salesUseCases.Add);

SalesRoutes.patch("/:id", salesUseCases.Update);

SalesRoutes.delete("/:id", salesUseCases.Delete);

SalesRoutes.post("/genPayment", salesUseCases.Add);

export { SalesRoutes };
