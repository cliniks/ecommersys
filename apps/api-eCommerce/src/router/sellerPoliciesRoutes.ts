import { Router } from "express";
import { sellerPoliciesUseCases } from "../useCases/SellerPoliciesUseCases";
// import { verifyers } from "../middlewares/verifyers";

const SellerPoliciesRoutes: Router = Router();

SellerPoliciesRoutes.get("/", sellerPoliciesUseCases.FineOne);

SellerPoliciesRoutes.get("/myPolicies", sellerPoliciesUseCases.FindAll);

SellerPoliciesRoutes.post("/", sellerPoliciesUseCases.Add);

SellerPoliciesRoutes.patch("/:id", sellerPoliciesUseCases.Update);

SellerPoliciesRoutes.delete("/:id", sellerPoliciesUseCases.Delete);

export { SellerPoliciesRoutes };
