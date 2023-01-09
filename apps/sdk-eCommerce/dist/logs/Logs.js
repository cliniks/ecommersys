"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logs = void 0;
exports.Logs = [
    {
        message: "",
        updated: `{
      User: {
        account: {
          auth: (username: string, password: string) => {},
          createNewUser: (data: FormData) => {},
          getMyUser: () => {},
          updateUserInfo: (id: string, data: Partial<UserInfo>) => {},
          updateUserImage: (id: string, img: ImgObj) => {},
          solicitSeller: () => {},
        },
        dashboard: {},
        product: {
          getProduct: () => {},
        },
        cart: {
          getMyCart: () => {},
          insertProduct: (data: { productId: string; amount: string }) => {},
          removeProduct: (data: { productId: string; amount: string }) => {},
          insertCoupon: (CouponId: string) => {},
          removeCoupon: (CouponId: string) => {},
          insertAddress: (AddressId: string) => {},
          removeAddress: (AddressId: string) => {},
          clearMyCart: () => {},
        },
        order: {},
        checkout: {
          getSingle: (checkoutId: string) => {},
          generate: (orderId: string) => {},
          createPayment: (data: {
            type: string;
            value: string;
            checkoutId: string;
          }) => {},
          updatePayment: (data: {
            type: string;
            value: string;
            checkoutId: string;
          }) => {},
          confirmPayment: (checkoutId: string) => {},
          cancelOpen: (checkoutId: string) => {},
        },
      },
      Seller: {
        account: {
          getMySeller: () => {},
          updateSellerInfo: (id: string, data: Partial<Store>) => {},
          updateSellerImage: (id: string, img: any) => {},
        },
        dashboard: {
          product: {
            getMyProducts: () => {},
          },
          order: {},
          checkout: {
            getSingle: (key: string, value: string) => {},
            generate: (orderId: string) => {},
            createPayment: (data: {
              type: string;
              value: string;
              checkoutId: string;
            }) => {},
            updatePayment: (data: {
              type: string;
              value: string;
              checkoutId: string;
            }) => {},
            confirmPayment: (checkoutId: string) => {},
            cancelOpen: (checkoutId: string) => {},
          },
          coupon: {
            getSingle: (key: string, value: string) => {},
            getMyCoupons: () => {},
            create: (data: Coupon) => {},
            update: (couponId: string, data: Partial<Coupon>) => {},
            utilize: (couponId: string) => {},
            cancel: (couponId: string) => {},
          },
          category: {
            getSingle: (key: string, value: string) => {},
            getMyCategories: () => {},
            create: (data: Category) => {},
            update: (categoryId: string, data: Partial<Category>) => {},
            cancel: (categoryId: string) => {},
          },
          chat: {},
        },
        notifications: {},
      },
      Admin: {},
      Global: {
        products: {
          getSingle: (key: string, value: string) => {},
          getAll: () => {},
        },
        sellers: {
          getSingle: (key: string, value: string) => {},
          getAll: (page: string, size: string) => {},
        },
        emailSender: {
          sendEmailToken: (data: { email: string }) => {},
          confirmEmailToken: (data: { email: string; code: number }) => {},
        },
      },
    }`,
    },
];
