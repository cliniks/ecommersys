import { Request, Response, Router } from "express";
import { SellerAsaasImplementation } from "../providers/implementations/SellerAsaasProvider";
import { SellerUseCases } from "../useCases/CheckoutUseCase.ts/sellerUseCases";
import { verifyers } from "../middlewares/verifyers";

const SellerRoutes = Router();

const SellerProvider = new SellerAsaasImplementation();
const Store = new SellerUseCases(SellerProvider);

SellerRoutes.post("/addStore", (req: Request, res: Response) => Store.addStore(req, res));

export { SellerRoutes };
