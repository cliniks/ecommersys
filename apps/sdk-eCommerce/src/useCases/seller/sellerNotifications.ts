import { notificationTypes } from "../../Entities/notification.entitie";
import { ISellerNotifications } from "../../interfaces";
import { notifyMutations } from "../../services";
import { Try } from "../../utils";

export class sellerNotifications implements ISellerNotifications {
  // connectNotifications(): void {}
  // disableNotifications(): void {}
  mySellerNotifications(): Promise<notificationTypes[]> {
    return Try(notifyMutations.getAllSellerNotify);
  }
}
