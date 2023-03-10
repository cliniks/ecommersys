import { notificationTypes } from "../../Entities/notification.entitie";
import { Either } from "../../Errors/Either";
import { getAllProps, getAllReturn } from "../../interfaces";
export declare const notifyMutations: {
    getOneNotify: ({ key, value, }: {
        key: string;
        value: string;
    }) => Promise<Either<"Não foi possível localizar a notificação", notificationTypes>>;
    getAllNotify: (props: getAllProps) => Promise<Either<"Não foi possível localizar a notificação", getAllReturn<notificationTypes>>>;
    readNotification: (id: string) => Promise<Either<"Não foi possível localizar a notificação", notificationTypes>>;
    getAllUserNotify: (props: getAllProps) => Promise<Either<"Não foi possível localizar a notificação", notificationTypes[]>>;
    getAllSellerNotify: (props: getAllProps) => Promise<Either<"Não foi possível localizar a notificação", notificationTypes[]>>;
    getAllGlobalNotify: (props: getAllProps) => Promise<Either<"Não foi possível localizar a notificação", getAllReturn<notificationTypes>>>;
    add: (data: Partial<notificationTypes>) => Promise<Either<notifyErrors, notificationTypes>>;
    update: ({ notifyId, data, }: {
        notifyId: string;
        data: Partial<notificationTypes>;
    }) => Promise<Either<notifyErrors, notificationTypes>>;
    delete: ({ notifyId, }: {
        notifyId: string;
    }) => Promise<Either<notifyErrors, string>>;
};
export declare type notifyErrors = "Não foi possível localizar a notificação";
