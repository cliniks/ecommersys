import { notificationTypes } from "../../../Entities/notification.entitie";
import { Response } from "../../../Errors";
import { IGlobalNotifications, getAllProps, getAllReturn } from "../../../interfaces";
import { notifyErrors } from "../../../services";
export declare class GlobalNotifications implements IGlobalNotifications {
    getAll(props: getAllProps): Promise<Response<notifyErrors, getAllReturn<notificationTypes>>>;
    readNotification(id: string): Promise<Response<notifyErrors, notificationTypes>>;
}
