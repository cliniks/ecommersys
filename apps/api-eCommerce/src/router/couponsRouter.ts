import { Router } from "express";
// import { verifyers } from "../middlewares/verifyers";
import CouponUseCases, { couponsUseCases } from "../useCases/CouponsUseCases";

const CouponsRouter: Router = Router();

CouponsRouter.get("/", couponsUseCases.FineOne);

CouponsRouter.get("/all", couponsUseCases.FindAll);

CouponsRouter.get("/many", couponsUseCases.findMany);

CouponsRouter.get("/manyCrud", async (req, res) => {
  const { fields }: any = req.query;
  return res.json(await CouponUseCases.getMany(req.body, fields));
});

CouponsRouter.post("/", couponsUseCases.Add);

CouponsRouter.patch("/:id", couponsUseCases.Update);

CouponsRouter.delete("/:id", couponsUseCases.Delete);

export { CouponsRouter };
