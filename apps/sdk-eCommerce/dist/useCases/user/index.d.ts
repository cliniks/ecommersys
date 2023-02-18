import { IUser, IUserAccount, IUserCart, IUserCheckout, IUserDashboard, IUserDocument, IUserOrder, IUserPayment, IUserProduct } from "../../interfaces/IUser";
export * from "./userAccount";
export * from "./userCart";
export * from "./userCheckout";
export * from "./userDashboard";
export * from "./userOrder";
export * from "./userProducts";
declare class User implements IUser {
    account: IUserAccount;
    dashboard: IUserDashboard;
    product: IUserProduct;
    payment: IUserPayment;
    cart: IUserCart;
    order: IUserOrder;
    checkout: IUserCheckout;
    document: IUserDocument;
}
declare const _default: User;
export default _default;
