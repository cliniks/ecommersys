import { Request, Response } from "express";
import { INotifyRepository } from "../../repositories/Interfaces/INotifyRepository";
import { returnUserFromToken } from "../../utils/returnUserFromToken";

export const readNotification = async (
  req: Request,
  res: Response,
  repo: INotifyRepository
) => {
  try {
    const { id } = req.params;

    const user = await returnUserFromToken(req);

    const notification = await repo.getOne({ key: "_id", value: id });

    if (
      notification.direction === "allClients" ||
      notification.direction === "client"
    ) {
      if (
        notification.direction === "client" &&
        notification.directionId.includes(user._id) &&
        notification.isRead.includes(user._id)
      ) {
        let isRead = Array.from(notification.isRead || []);
        const findIndex = isRead.findIndex((item) => item === user._id);
        isRead.splice(findIndex, 1);
        const updateRepo = await repo.update(id, { isRead });
        return res.json(updateRepo);
      }
      let isRead = Array.from(notification.isRead || []);
      isRead.push(user._id);
      const updateRepo = await repo.update(id, { isRead });
      return res.json(updateRepo);
    }
    if (
      notification.direction === "allStores" ||
      notification.direction === "store"
    ) {
      if (
        notification.direction === "store" &&
        notification.directionId.includes(user.storeId) &&
        notification.isRead.includes(user.storeId)
      ) {
        let isRead = Array.from(notification.isRead || []);
        const findIndex = isRead.findIndex((item) => item === user.storeId);
        isRead.splice(findIndex, 1);
        const updateRepo = await repo.update(id, { isRead });
        return res.json(updateRepo);
      }
      let isRead = Array.from(notification.isRead || []);
      isRead.push(user.storeId);
      const updateRepo = await repo.update(id, { isRead });
      return res.json(updateRepo);
    }
    if (notification.direction === "global") {
      if (notification.isRead.includes(user._id)) {
        let isRead = Array.from(notification.isRead || []);
        const findIndex = isRead.findIndex((item) => item === user._id);
        isRead.splice(findIndex, 1);
        const updateRepo = await repo.update(id, { isRead });
        return res.json(updateRepo);
      }
      let isRead = Array.from(notification.isRead || []);
      isRead.push(user._id);
      const updateRepo = await repo.update(id, { isRead });
      return res.json(updateRepo);
    }
    throw new Error("não foi possível modificar notificação");
  } catch (err) {
    res.status(400).send(err.toString());
  }
};
