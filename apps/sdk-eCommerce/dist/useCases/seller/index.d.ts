import { ISellerNotifications, ISeller, ISellerAccount, ISellerDashboard } from "../../interfaces/ISeller";
declare class Seller implements ISeller {
    store: ISellerAccount;
    dashboard: ISellerDashboard;
    notifications: ISellerNotifications;
}
declare const _default: Seller;
export default _default;
