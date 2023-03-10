import { notificationTypes } from "../../../Entities/notification.entitie";
import { Response } from "../../../Errors";
import {
  IGlobalNotifications,
  getAllProps,
  getAllReturn,
} from "../../../interfaces";
import { notifyErrors, notifyMutations } from "../../../services";
import { Try } from "../../../utils";

export class GlobalNotifications implements IGlobalNotifications {
  async getAll(
    props: getAllProps
  ): Promise<Response<notifyErrors, getAllReturn<notificationTypes>>> {
    return await Try(notifyMutations.getAllNotify, props);
  }
  async readNotification(
    id: string
  ): Promise<Response<notifyErrors, notificationTypes>> {
    return await Try(notifyMutations.readNotification, id);
  }
}
