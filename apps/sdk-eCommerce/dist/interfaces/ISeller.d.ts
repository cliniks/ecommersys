import { Category, Checkout, Coupon, Product, Store } from "../Entities";
import { Response } from "../Errors";
import { checkoutErrors, sellerErrors } from "../services";
import { categoryErrors } from "../services/mutations/category";
import { couponErrors } from "../services/mutations/coupon";
import { getAllProps, getAllReturn } from "./IGlobal";
export interface ISeller {
    store: ISellerAccount;
    dashboard: ISellerDashboard;
    notifications: ISellerNotifications;
}
export interface ISellerDashboard {
    product: ISellerDashboardProduct;
    order: ISellerDashboardOrder;
    checkout: ISellerDashboardCheckout;
    coupon: ISellerDashboardCoupon;
    category: ISellerDashboardCategory;
    chat: ISellerDashboardChat;
}
export interface ISellerNotifications {
}
export interface ISellerAccount {
    getMyStore: () => Promise<Response<sellerErrors, Store>>;
    updateSellerInfo: (id: string, data: Partial<Store>) => Promise<Response<sellerErrors, Store>>;
    updateStoreImage: (formData: FormData) => Promise<Response<sellerErrors, Store>>;
    updateStoreBanner: (formData: FormData) => Promise<Response<sellerErrors, Store>>;
}
export interface ISellerDashboardProduct {
    getMyProducts(props: getAllProps): Promise<Response<sellerErrors, getAllReturn<Product>>>;
    create(formData: FormData): Promise<Response<sellerErrors, Product>>;
    update(data: Partial<Product>): Promise<Response<sellerErrors, Product>>;
}
export interface ISellerDashboardOrder {
}
export interface ISellerDashboardCoupon {
    getSingle: (key: string, value: string) => Promise<Response<couponErrors, Coupon>>;
    getMyCoupons: (props: getAllProps) => Promise<Response<couponErrors, getAllReturn<Coupon>>>;
    create: (data: Coupon) => Promise<Response<couponErrors, Coupon>>;
    update: (couponId: string, data: Partial<Coupon>) => Promise<Response<couponErrors, Coupon>>;
    utilize: (couponId: string) => Promise<Response<couponErrors, Coupon>>;
    cancel: (couponId: string) => Promise<Response<couponErrors, Coupon>>;
}
export interface ISellerDashboardCategory {
    getSingle: (key: string, value: string) => Promise<Response<categoryErrors, Category>>;
    getMyCategories: (props: getAllProps) => Promise<Response<categoryErrors, getAllReturn<Category>>>;
    create: (data: Category) => Promise<Response<categoryErrors, Category>>;
    update: (categoryId: string, data: Partial<Category>) => Promise<Response<categoryErrors, Category>>;
    cancel: (categoryId: string) => Promise<Response<categoryErrors, Category>>;
}
export interface ISellerDashboardChat {
}
export interface ISellerDashboardCheckout {
    getSingle: (checkoutId: string) => Promise<Response<checkoutErrors, Checkout>>;
    generate: (orderId: string) => Promise<Response<checkoutErrors, Checkout>>;
    createPayment: (data: {
        type: string;
        value: string;
        checkoutId: string;
    }) => Promise<Response<checkoutErrors, Checkout>>;
    updatePayment: (data: {
        type: string;
        value: string;
        checkoutId: string;
    }) => Promise<Response<checkoutErrors, Checkout>>;
    confirmPayment: (checkoutId: string) => Promise<Response<checkoutErrors, Checkout>>;
    cancelOpen: (checkoutId: string) => Promise<Response<checkoutErrors, Checkout>>;
}
