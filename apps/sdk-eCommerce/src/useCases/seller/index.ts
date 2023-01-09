import {
  ISellerNotifications,
  ISeller,
  ISellerAccount,
  ISellerDashboard,
} from "../../interfaces/ISeller";
import { sellerAccount } from "./sellerAccount";
import { sellerDashboard } from "./sellerDashboard";
import { sellerNotifications } from "./sellerNotifications";

class Seller implements ISeller {
  store: ISellerAccount = new sellerAccount();
  dashboard: ISellerDashboard = new sellerDashboard();
  notifications: ISellerNotifications = new sellerNotifications();
}

export default new Seller();
