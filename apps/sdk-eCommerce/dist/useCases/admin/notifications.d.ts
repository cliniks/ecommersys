import { notificationTypes } from "../../Entities/notification.entitie";
import { IAdminNotifications, getAllProps, getAllReturn, getSingleProps } from "../../interfaces";
export declare class AdminNotifications implements IAdminNotifications<notificationTypes> {
    getAll(props: getAllProps): Promise<getAllReturn<notificationTypes>>;
    getSingle(props: getSingleProps): Promise<notificationTypes>;
    update(props: {
        notifyId: string;
        data: Partial<notificationTypes>;
    }): Promise<notificationTypes>;
    add(data: Partial<notificationTypes>): Promise<notificationTypes>;
    delete(data: {
        notifyId: string;
    }): Promise<string>;
}
