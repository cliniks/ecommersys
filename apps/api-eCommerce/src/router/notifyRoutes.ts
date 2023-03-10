import { Router } from "express";
import { notifyUseCases } from "../useCases/NotifyUseCases";

const NotifyRouter: Router = Router();

NotifyRouter.get("/", notifyUseCases.FineOne);

NotifyRouter.get("/myUserNotifies", notifyUseCases.getMyUserNotifications);

NotifyRouter.get("/mySellerNotifies", notifyUseCases.getMySellerNotifications);

NotifyRouter.get("/globalNotifies", notifyUseCases.getGlobalNotifications);

NotifyRouter.get("/readNotification/:id", notifyUseCases.readNotification);

NotifyRouter.get("/many", notifyUseCases.findMany);

NotifyRouter.get("/all", notifyUseCases.FindAll);

NotifyRouter.post("/", notifyUseCases.Add);

NotifyRouter.patch("/:id", notifyUseCases.Update);

NotifyRouter.delete("/:id", notifyUseCases.Delete);

export { NotifyRouter };
