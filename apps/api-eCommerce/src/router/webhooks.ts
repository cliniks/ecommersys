import { NextFunction, Request, Response, Router } from "express";
import { updatePaymentStatus } from "../useCases/webhookUseCases";
import { IWebSocket } from "../providers/websobket/IWebSocket";
// import { verifyers } from "../middlewares/verifyers";

const WebhookRoutes = (socket: IWebSocket): Router => {
  const webhookRoutes: Router = Router();

  webhookRoutes.post("/asaas/payments", (req: Request, res: Response) => {
    updatePaymentStatus(req.body, socket);
    res.status(200).send();
  });
  return webhookRoutes;
};

export { WebhookRoutes };
