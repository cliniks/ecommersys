import { Router } from "express";
// import { verifyers } from "../middlewares/verifyers";
import { couponsUseCases } from "../useCases/CouponsUseCases";

const CouponsRouter: Router = Router();

CouponsRouter.get("/", couponsUseCases.FineOne);

CouponsRouter.get("/all", couponsUseCases.FindAll);

CouponsRouter.post("/", couponsUseCases.Add);

CouponsRouter.patch("/:id", couponsUseCases.Update);

CouponsRouter.delete("/:id", couponsUseCases.Delete);

export { CouponsRouter };
