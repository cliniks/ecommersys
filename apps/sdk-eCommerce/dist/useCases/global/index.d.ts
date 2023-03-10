import { IGlobal, IGlobalCategories, IGlobalEmailSender, IGlobalNotifications, IGlobalProducts, IGlobalSellers, IGlobalUploads, ILog } from "../../interfaces/IGlobal";
declare class Global implements IGlobal {
    products: IGlobalProducts;
    categories: IGlobalCategories;
    sellers: IGlobalSellers;
    emailSender: IGlobalEmailSender;
    uploads: IGlobalUploads;
    notifications: IGlobalNotifications;
    logs: ILog[];
}
declare const _default: Global;
export default _default;
