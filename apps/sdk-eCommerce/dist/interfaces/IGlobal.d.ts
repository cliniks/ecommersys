import { Category, Product, Store } from "../Entities";
import { notificationTypes } from "../Entities/notification.entitie";
import { Response } from "../Errors";
import { notifyErrors, productErrors, sellerErrors } from "../services";
import { categoryErrors } from "../services/mutations/category";
import { EmailSenderErrors } from "../services/mutations/emailSender";
export interface IGlobal {
    products: IGlobalProducts;
    uploads: IGlobalUploads;
    categories: IGlobalCategories;
    sellers: IGlobalSellers;
    emailSender: IGlobalEmailSender;
    notifications: IGlobalNotifications;
    logs: ILog[];
}
export interface IGlobalProducts {
    getSingle(props: getSingleProps): Promise<Response<productErrors, Product>>;
    getAll(props: getAllProps): Promise<Response<productErrors, getAllReturn<Product>>>;
}
export interface IGlobalNotifications {
    getAll(props: getAllProps): Promise<Response<notifyErrors, getAllReturn<notificationTypes>>>;
    readNotification(id: string): Promise<Response<notifyErrors, notificationTypes>>;
}
export interface IGlobalUploads {
    uploadImage(props: FormData): Promise<Response<productErrors, string>>;
    uploadDoc(props: FormData): Promise<Response<productErrors, string>>;
}
export interface IGlobalCategories {
    getSingle(props: getSingleProps): Promise<Response<categoryErrors, Category>>;
    getAll(props: getAllProps): Promise<Response<categoryErrors, getAllReturn<Category>>>;
    getAllGlobals(props: getAllProps): Promise<Response<categoryErrors, getAllReturn<Category>>>;
}
export interface IGlobalEmailSender {
    sendEmailToken: (data: {
        email: string;
    }) => Promise<Response<EmailSenderErrors, any>>;
    confirmEmailToken: (data: {
        email: string;
        code: number;
    }) => Promise<Response<EmailSenderErrors, any>>;
}
export interface IGlobalSellers {
    getSingle(props: getSingleProps): Promise<Response<sellerErrors, Store>>;
    getAll(props: getAllProps): Promise<Response<sellerErrors, getAllReturn<Store>>>;
}
export interface ILog {
    message: string;
    updated: Object | String;
}
export declare type getAllProps = {
    page?: number;
    size?: number;
    filter?: filterProps;
};
export declare type getSingleProps = {
    key?: string;
    value?: string;
    filter?: string;
};
export declare type filterProps = {
    key?: string;
    value?: any;
    fields?: string;
};
export declare type getAllReturn<t> = {
    result: t[];
    totalItems: number;
    pageSize: number;
    thisPage: number;
    totalPage: number;
};
