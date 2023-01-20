import { Router } from "express";
import { sellersSolicitateUseCases } from "../useCases/SellerSolicitateUseCases";
import { verifyers } from "../middlewares/verifyers";

const SellerSolicitateRoutes: Router = Router();

SellerSolicitateRoutes.get("/", sellersSolicitateUseCases.FineOne);

SellerSolicitateRoutes.get("/all", sellersSolicitateUseCases.FindAll);

SellerSolicitateRoutes.post(
  "/",
  verifyers.verifyToken,
  sellersSolicitateUseCases.Solicitate
);

SellerSolicitateRoutes.post(
  "/confirm/:id",
  verifyers.verifyToken,
  sellersSolicitateUseCases.Confirm
);

export { SellerSolicitateRoutes };
