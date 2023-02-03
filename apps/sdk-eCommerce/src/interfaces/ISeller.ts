import { Category, Checkout, Coupon, Product, Store } from "../Entities";
import { StorePolicy } from "../Entities/store.policies.entitie";
import { Response } from "../Errors";
import { checkoutErrors, sellerErrors } from "../services";
import { categoryErrors } from "../services/mutations/category";
import { couponErrors } from "../services/mutations/coupon";
import { getAllProps, getAllReturn, getSingleProps } from "./IGlobal";

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
  policy: ISellerDashboardPolicy;
  chat: ISellerDashboardChat;
}

export interface ISellerNotifications {
  connectNotifications(): void;
  disableNotifications(): void;
}

export interface ISellerAccount {
  getMyStore: () => Promise<Response<sellerErrors, Store>>;
  updateSellerInfo: (props: {
    id: string;
    data: Partial<Store>;
  }) => Promise<Response<sellerErrors, Store>>;
  updateStoreImage: (
    formData: FormData
  ) => Promise<Response<sellerErrors, Store>>;
  updateStoreBanner: (
    formData: FormData
  ) => Promise<Response<sellerErrors, Store>>;
}

export interface ISellerDashboardProduct {
  getMyProducts(
    props: getAllProps
  ): Promise<Response<sellerErrors, getAllReturn<Product>>>;
  create(formData: FormData): Promise<Response<sellerErrors, Product>>;
  update(data: {
    productId: string;
    data: Partial<Product>;
  }): Promise<Response<sellerErrors, Product>>;
}

export interface ISellerDashboardOrder {}

export interface ISellerDashboardCoupon {
  getSingle: (props: getSingleProps) => Promise<Response<couponErrors, Coupon>>;
  getMyCoupons: (
    props: getAllProps
  ) => Promise<Response<couponErrors, getAllReturn<Coupon>>>;
  create: (data: Coupon) => Promise<Response<couponErrors, Coupon>>;
  update: (props: {
    couponId: string;
    data: Partial<Coupon>;
  }) => Promise<Response<couponErrors, Coupon>>;
  utilize: (couponId: {
    couponId: string;
  }) => Promise<Response<couponErrors, Coupon>>;
  cancel: (couponId: {
    couponId: string;
  }) => Promise<Response<couponErrors, Coupon>>;
}

export interface ISellerDashboardCategory {
  getSingle: (
    props: getSingleProps
  ) => Promise<Response<categoryErrors, Category>>;
  getMyCategories: (
    props: getAllProps
  ) => Promise<Response<categoryErrors, getAllReturn<Category>>>;

  create: (data: Category) => Promise<Response<categoryErrors, Category>>;

  update: (props: {
    categoryId: string;
    data: Partial<Category>;
  }) => Promise<Response<categoryErrors, Category>>;

  cancel: (category: {
    categoryId: string;
  }) => Promise<Response<categoryErrors, Category>>;
}

export interface ISellerDashboardPolicy {
  getSingle: (
    props: getSingleProps
  ) => Promise<Response<categoryErrors, StorePolicy>>;

  getMyPolicies: (
    props: getAllProps
  ) => Promise<Response<categoryErrors, getAllReturn<StorePolicy>>>;

  create: (data: StorePolicy) => Promise<Response<categoryErrors, StorePolicy>>;

  update: (props: {
    policyId: string;
    data: Partial<StorePolicy>;
  }) => Promise<Response<categoryErrors, StorePolicy>>;

  delete: (policy: {
    policyId: string;
  }) => Promise<Response<categoryErrors, string>>;
}

export interface ISellerDashboardChat {
  getMyChats(): void;
  connectRoom(data: { roomId: string }): void;
  sendMessage(message): void;
}

export interface ISellerDashboardCheckout {
  getSingle: (
    props: getSingleProps
  ) => Promise<Response<checkoutErrors, Checkout>>;
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
  confirmPayment: (
    checkoutId: string
  ) => Promise<Response<checkoutErrors, Checkout>>;
  cancelOpen: (
    checkoutId: string
  ) => Promise<Response<checkoutErrors, Checkout>>;
}
