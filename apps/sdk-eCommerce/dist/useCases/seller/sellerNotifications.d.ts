import { notificationTypes } from "../../Entities/notification.entitie";
import { ISellerNotifications } from "../../interfaces";
export declare class sellerNotifications implements ISellerNotifications {
    mySellerNotifications(): Promise<notificationTypes[]>;
}
