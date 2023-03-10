import { notificationTypes } from "../../Entities/notification.entitie";
import {
  IAdminNotifications,
  getAllProps,
  getAllReturn,
  getSingleProps,
} from "../../interfaces";
import { notifyMutations } from "../../services";
import { Try } from "../../utils";

export class AdminNotifications
  implements IAdminNotifications<notificationTypes>
{
  async getAll(props: getAllProps): Promise<getAllReturn<notificationTypes>> {
    return await Try(notifyMutations.getAllNotify, props);
  }
  async getSingle(props: getSingleProps): Promise<notificationTypes> {
    return await Try(notifyMutations.getOneNotify, props);
  }
  async update(props: {
    notifyId: string;
    data: Partial<notificationTypes>;
  }): Promise<notificationTypes> {
    return await Try(notifyMutations.update, props);
  }
  async add(data: Partial<notificationTypes>): Promise<notificationTypes> {
    return await Try(notifyMutations.add, data);
  }
  async delete(data: { notifyId: string }): Promise<string> {
    return await Try(notifyMutations.delete, data);
  }
}
