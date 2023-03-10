import {
  IUser,
  IUserAccount,
  IUserCart,
  IUserCheckout,
  IUserDashboard,
  IUserDocument,
  IUserNotifications,
  IUserOrder,
  IUserPayment,
  IUserProduct,
} from "../../interfaces/IUser";

import { userAccount } from "./userAccount";
import { userCart } from "./userCart";
import { userCheckout } from "./userCheckout";
import { userDashboard } from "./userDashboard";
import { userDocuments } from "./userDocuments";
import { userNotifications } from "./userNotifications";
import { userOrder } from "./userOrder";
import { userPayments } from "./userPayments";
import { userProduct } from "./userProducts";

export * from "./userAccount";
export * from "./userCart";
export * from "./userCheckout";
export * from "./userDashboard";
export * from "./userOrder";
export * from "./userProducts";

class User implements IUser {
  public account: IUserAccount = new userAccount();
  public dashboard: IUserDashboard = new userDashboard();
  public product: IUserProduct = new userProduct();
  public payment: IUserPayment = new userPayments();
  public cart: IUserCart = new userCart();
  public order: IUserOrder = new userOrder();
  public checkout: IUserCheckout = new userCheckout();
  public document: IUserDocument = new userDocuments();
  public notifications: IUserNotifications = new userNotifications();
}

export default new User();
