import { Cart, Product, UserInfo, User, Checkout, Store } from "../Entities";

import {
  cartErrors,
  userErrors,
  authRes,
  productErrors,
  checkoutErrors,
  sellerErrors,
} from "../services";

import { Response } from "../Errors";

import {
  userAccount,
  userCart,
  userCheckout,
  userDashboard,
  userOrder,
  userProduct,
} from "../useCases";
import { getAllProps } from "./IGlobal";

export interface IUser {
  account: userAccount;
  product: userProduct;
  cart: userCart;
  order: userOrder;
  checkout: userCheckout;
  dashboard: userDashboard;
}

export interface IUserAccount {
  auth: (username: string, password: string) => Promise<Response<any, authRes>>;
  createNewUser: (data: FormData) => Promise<Response<userErrors, User>>;
  getMyUser: () => Promise<Response<userErrors, User>>;
  updateUserInfo: (
    id: string,
    data: Partial<UserInfo>
  ) => Promise<Response<userErrors, User>>;
  updateUserImage: (
    id: string,
    img: any
  ) => Promise<Response<userErrors, User>>;
  solicitSeller: () => Promise<Response<sellerErrors, Store>>;
}

export interface IUserProduct {
  seeProduct(productId: string): Promise<Response<productErrors, Product>>;
}

export interface IUserCart {
  getMyCart(props: getAllProps): Promise<Response<cartErrors, Cart>>;
  insertProduct: (data: {
    productId: string;
    amount: string;
  }) => Promise<Response<cartErrors, Cart>>;
  removeProduct: (data: {
    productId: string;
    amount: string;
  }) => Promise<Response<cartErrors, Cart>>;
  insertCoupon: (CouponId: string) => Promise<Response<cartErrors, Cart>>;
  removeCoupon: (CouponId: string) => Promise<Response<cartErrors, Cart>>;
  insertAddress: (AddressId: string) => Promise<Response<cartErrors, Cart>>;
  removeAddress: (AddressId: string) => Promise<Response<cartErrors, Cart>>;
  clearMyCart: () => Promise<Response<cartErrors, Cart>>;
}

export interface IUserOrder {}

export interface IUserCheckout {
  getSingle: (
    checkoutId: string
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

export interface IUserDashboard {}
