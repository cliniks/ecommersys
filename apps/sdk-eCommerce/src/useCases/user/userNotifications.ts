import { notificationTypes } from "../../Entities/notification.entitie";
import { IUserNotifications } from "../../interfaces";
import { notifyMutations } from "../../services";
import { Try } from "../../utils";

export class userNotifications implements IUserNotifications {
  myUserNotifications(): Promise<notificationTypes[]> {
    return Try(notifyMutations.getAllUserNotify);
  }
}
