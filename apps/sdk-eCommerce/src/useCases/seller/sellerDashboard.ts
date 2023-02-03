import {
  ISellerDashboard,
  ISellerDashboardCategory,
  ISellerDashboardChat,
  ISellerDashboardCheckout,
  ISellerDashboardCoupon,
  ISellerDashboardOrder,
  ISellerDashboardPolicy,
  ISellerDashboardProduct,
} from "../../interfaces";
import { sellerCategory } from "./sellerCategory";
import { sellerChat } from "./sellerChat";
import { sellerCheckout } from "./sellerCheckout";
import { sellerCoupon } from "./sellerCoupon";
import { sellerOrder } from "./sellerOrder";
import { sellerPolicy } from "./sellerPolicies";
import { sellerProduct } from "./sellerProducts";

export class sellerDashboard implements ISellerDashboard {
  product: ISellerDashboardProduct = new sellerProduct();
  order: ISellerDashboardOrder = new sellerOrder();
  checkout: ISellerDashboardCheckout = new sellerCheckout();
  coupon: ISellerDashboardCoupon = new sellerCoupon();
  category: ISellerDashboardCategory = new sellerCategory();
  policy: ISellerDashboardPolicy = new sellerPolicy();
  chat: ISellerDashboardChat = new sellerChat();
}
