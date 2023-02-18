import { Router } from "express";
import { ClientAsaasImplementation } from "../providers/implementations/ClientAsaasImplementation";
import { TokenizeCard } from "../providers/controllers";

const gatewayPagRouter: Router = Router();

const gatPag = new ClientAsaasImplementation();

gatewayPagRouter.get("/", (req, res) => res.json("teste"));
gatewayPagRouter.post("/tokenCard", TokenizeCard);

export { gatewayPagRouter };
