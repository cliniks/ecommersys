import { Router } from "express";
import { ClientUseCases } from "../useCases/ClientUseCases";

const ClientsRouter: Router = Router();

ClientsRouter.get("/myClients", ClientUseCases.getMyStoreClients);

export { ClientsRouter };
