import {
  IUser,
  IUserAccount,
  IUserCart,
  IUserCheckout,
  IUserDashboard,
  IUserOrder,
  IUserProduct,
} from "../../interfaces/IUser";

import { userAccount } from "./userAccount";
import { userCart } from "./userCart";
import { userCheckout } from "./userCheckout";
import { userDashboard } from "./userDashboard";
import { userOrder } from "./userOrder";
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
  public cart: IUserCart = new userCart();
  public order: IUserOrder = new userOrder();
  public checkout: IUserCheckout = new userCheckout();
}

export default new User();
