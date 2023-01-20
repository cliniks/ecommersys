import { Router } from "express";
import { categoryUseCases } from "../useCases/CategoryUseCases";

const CategoryRouter: Router = Router();

CategoryRouter.get("/", categoryUseCases.FineOne);

CategoryRouter.get("/all", categoryUseCases.FindAll);

CategoryRouter.post("/", categoryUseCases.Add);

CategoryRouter.patch("/:id", categoryUseCases.Update);

CategoryRouter.delete("/:id", categoryUseCases.Delete);

export { CategoryRouter };
