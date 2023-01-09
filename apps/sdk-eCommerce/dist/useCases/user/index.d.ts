import { IUser, IUserAccount, IUserCart, IUserCheckout, IUserDashboard, IUserOrder, IUserProduct } from "../../interfaces/IUser";
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
    cart: IUserCart;
    order: IUserOrder;
    checkout: IUserCheckout;
}
declare const _default: User;
export default _default;
