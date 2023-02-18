import { Router } from "express";
import { documentUseCases } from "../useCases/DocumentUseCases";

const documentRouter: Router = Router();

documentRouter.get("/", documentUseCases.FineOne);

documentRouter.get("/myDocuments", documentUseCases.getMyDocuments);

documentRouter.get("/all", documentUseCases.FindAll);

documentRouter.post("/", documentUseCases.Add);

documentRouter.patch("/:id", documentUseCases.Update);

documentRouter.delete("/:id", documentUseCases.Delete);

export { documentRouter };
