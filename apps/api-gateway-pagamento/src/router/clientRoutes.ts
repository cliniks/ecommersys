import { Request, Response, Router } from "express";
import { ClientAsaasImplementation } from "../providers/implementations/ClientAsaasImplementation";
import { UserUseCases } from "../useCases/CheckoutUseCase.ts/clientUseCases";
import { verifyers } from "../middlewares/verifyers";
import { GatewayPagRepository } from "../repositories/implementations/GatewayPagImplements";

const ClientRouter = Router();

const UserProvider = new ClientAsaasImplementation();
const Repository = new GatewayPagRepository();
const User = new UserUseCases(UserProvider, Repository);

ClientRouter.get("/", (req: Request, res: Response) => res.json({ msg: "Roteamento ASAAS" }));

// Client GatewayPag
ClientRouter.post("/newClient", (req: Request, res: Response) => User.newClient(req, res));
ClientRouter.post("/genCharge", (req: Request, res: Response) => User.genCharge(req, res));
ClientRouter.get("/getCharge/:id", (req: Request, res: Response) => User.getCharge(req, res));

export { ClientRouter };
