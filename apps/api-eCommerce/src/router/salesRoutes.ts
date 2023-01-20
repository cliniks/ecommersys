import { Router } from "express";
// import { verifyers } from "../middlewares/verifyers";
import { salesUseCases } from "../useCases/SalesUseCases";

const SalesRoutes: Router = Router();

SalesRoutes.get("/", salesUseCases.FineOne);

SalesRoutes.get("/all", salesUseCases.FindAll);

SalesRoutes.post("/", salesUseCases.Add);

SalesRoutes.patch("/:id", salesUseCases.Update);

SalesRoutes.delete("/:id", salesUseCases.Delete);

export { SalesRoutes };
