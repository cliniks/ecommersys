import { Router } from "express";
import { verifyers } from "../middlewares/verifyers";
import { productsUseCases } from "../useCases/ProductsUseCases";
import multer from "multer";

const upload = multer({ dest: "uploads/" });

const ProductsRoutes = Router();

ProductsRoutes.get("/", productsUseCases.FineOne);

ProductsRoutes.get("/all", productsUseCases.FindAll);

ProductsRoutes.post(
  "/",
  verifyers.verifySeller,
  // verifyers.verifyThisSeller,
  upload.array("img", 3),
  productsUseCases.CreateProduct
);

ProductsRoutes.patch("/:id", productsUseCases.Update);

ProductsRoutes.delete("/:id", productsUseCases.Delete);

export { ProductsRoutes };
