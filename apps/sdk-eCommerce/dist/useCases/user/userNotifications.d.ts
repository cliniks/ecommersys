import { notificationTypes } from "../../Entities/notification.entitie";
import { IUserNotifications } from "../../interfaces";
export declare class userNotifications implements IUserNotifications {
    myUserNotifications(): Promise<notificationTypes[]>;
}
