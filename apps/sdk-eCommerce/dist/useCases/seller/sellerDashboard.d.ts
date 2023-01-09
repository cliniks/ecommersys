import { ISellerDashboard, ISellerDashboardCategory, ISellerDashboardChat, ISellerDashboardCheckout, ISellerDashboardCoupon, ISellerDashboardOrder, ISellerDashboardProduct } from "../../interfaces";
export declare class sellerDashboard implements ISellerDashboard {
    product: ISellerDashboardProduct;
    order: ISellerDashboardOrder;
    checkout: ISellerDashboardCheckout;
    coupon: ISellerDashboardCoupon;
    category: ISellerDashboardCategory;
    chat: ISellerDashboardChat;
}
