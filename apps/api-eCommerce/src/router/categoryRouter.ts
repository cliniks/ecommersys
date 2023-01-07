import { Router } from "express";
import { verifyers } from "../middlewares/verifyers";
import { categoryUseCases } from "../useCases/CategoryUseCases";

const CategoryRouter = Router();

CategoryRouter.get("/", categoryUseCases.FineOne);

CategoryRouter.get("/all", verifyers.verifyAdmin, categoryUseCases.FindAll);

CategoryRouter.post("/", categoryUseCases.Add);

CategoryRouter.patch("/:id", categoryUseCases.Update);

CategoryRouter.delete("/:id", categoryUseCases.Delete);

export { CategoryRouter };
