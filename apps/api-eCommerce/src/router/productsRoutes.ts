import { Router } from "express";
import { verifyers } from "../middlewares/verifyers";
import { productsUseCases } from "../useCases/ProductsUseCases";

const ProductsRoutes: Router = Router();

ProductsRoutes.get("/", productsUseCases.FineOne);

ProductsRoutes.get("/all", productsUseCases.FindAll);

ProductsRoutes.post(
  "/",
  verifyers.verifySeller,
  // verifyers.verifyThisSeller,
  productsUseCases.CreateProduct
);

ProductsRoutes.patch("/:id", productsUseCases.Update);

ProductsRoutes.delete("/:id", productsUseCases.Delete);

export { ProductsRoutes };
