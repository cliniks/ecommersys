import { NextFunction, Request, Response, Router } from "express";
import { updatePaymentStatus } from "../useCases/webhookUseCases";
import { IWebSocket } from "../providers/websobket/IWebSocket";
import { verifyCnpjExistence, verifyCpfExistence } from "../controllers";
// import { verifyers } from "../middlewares/verifyers";

const TestsRoutes = (socket: IWebSocket): Router => {
  const testsRoutes: Router = Router();

  testsRoutes.get(
    "/verifyCpf",
    async (req, res) => await verifyCpfExistence(req, res, socket)
  );
  testsRoutes.get(
    "/verifyCnpj",
    async (req, res) => await verifyCnpjExistence(req, res, socket)
  );

  return testsRoutes;
};

export { TestsRoutes };
