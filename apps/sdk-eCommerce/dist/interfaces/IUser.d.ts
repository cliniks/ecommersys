import { Cart, Product, User, Checkout, StoreSolicitate, CartResponse, userInfo } from "../Entities";
import { cartErrors, userErrors, authRes, productErrors, checkoutErrors, paymentMethodsErrors } from "../services";
import { Response } from "../Errors";
import { getAllProps, getAllReturn, getSingleProps } from "./IGlobal";
import { Address } from "../Entities/address.entitie";
import { DocumentsType } from "../Entities/documents.entitie";
import { PaymentMethodType, tokenizeType } from "../Entities/paymentMethod.entitie";
export interface IUser {
    account: IUserAccount;
    product: IUserProduct;
    document: IUserDocument;
    payment: IUserPayment;
    cart: IUserCart;
    order: IUserOrder;
    checkout: IUserCheckout;
    dashboard: IUserDashboard;
}
export interface IUserAccount {
    auth: (props: {
        username: string;
        password: string;
    }) => Promise<Response<any, authRes>>;
    createNewUser: (data: FormData) => Promise<Response<userErrors, User>>;
    getMyAddress: (props: getAllProps) => Promise<Response<userErrors, getAllReturn<Address>>>;
    addAddress: (address: Address) => Promise<Response<userErrors, Address>>;
    setDefaultAddress: (addressId: string) => Promise<Response<userErrors, User>>;
    updateAddress: (props: {
        addressId: string;
        data: Partial<Address>;
    }) => Promise<Response<userErrors, Address>>;
    deleteAddress: (props: {
        addressId: string;
    }) => Promise<Response<userErrors, string>>;
    getMyUser: () => Promise<Response<userErrors, User>>;
    updateUserInfo: (props: {
        id: string;
        data: Partial<userInfo>;
    }) => Promise<Response<userErrors, User>>;
    updateUserImage: (props: {
        id: string;
        img: any;
    }) => Promise<Response<userErrors, User>>;
    solicitSeller: (data: StoreSolicitate) => Promise<Response<userErrors, StoreSolicitate>>;
    verifySolicitation: (id: string) => Promise<Response<userErrors, StoreSolicitate>>;
}
export interface IUserProduct {
    seeProduct({ productId, }: {
        productId: string;
    }): Promise<Response<productErrors, Product>>;
    likeProduct(productId: string): Promise<Response<productErrors, Product>>;
    favoriteProduct(productId: string): Promise<Response<productErrors, Product>>;
}
export interface IUserPayment {
    myUserCards(): Promise<Response<paymentMethodsErrors, getAllReturn<PaymentMethodType>>>;
    mySellerCards(): Promise<Response<paymentMethodsErrors, getAllReturn<PaymentMethodType>>>;
    addPaymentMethod(data: tokenizeType): Promise<Response<paymentMethodsErrors, PaymentMethodType>>;
    deletePaymentMethod(id: string): Promise<Response<paymentMethodsErrors, string>>;
}
export interface IUserCart {
    getMyCart(): Promise<Response<cartErrors, CartResponse>>;
    incrementProduct: (data: {
        productId: string;
        cartId: string;
        amount: number;
    }) => Promise<Response<cartErrors, Cart>>;
    decrementProduct: (data: {
        productId: string;
        cartId: string;
        amount: number;
    }) => Promise<Response<cartErrors, Cart>>;
    removeProduct: (data: {
        productId: string;
    }) => Promise<Response<cartErrors, Cart>>;
    insertCoupon: (couponId: string) => Promise<Response<cartErrors, Cart>>;
    removeCoupon: (CouponId: string) => Promise<Response<cartErrors, Cart>>;
    insertAddress: (AddressId: string) => Promise<Response<cartErrors, Cart>>;
    removeAddress: (AddressId: string) => Promise<Response<cartErrors, Cart>>;
    clearMyCart: () => Promise<Response<cartErrors, Cart>>;
}
export interface IUserOrder {
}
export interface IUserCheckout {
    getSingle: (props: getSingleProps) => Promise<Response<checkoutErrors, Checkout>>;
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
export interface IUserDocument {
    getSingle: (props: getSingleProps) => Promise<Response<userErrors, DocumentsType>>;
    getMyDocuments: (data: getAllProps) => Promise<Response<userErrors, getAllReturn<DocumentsType>>>;
    getAllDocuments: (data: getAllProps) => Promise<Response<userErrors, getAllReturn<DocumentsType>>>;
    addDocument: (data: DocumentsType) => Promise<Response<userErrors, DocumentsType>>;
    updateDocument: (data: {
        documentId: string;
        data: Partial<DocumentsType>;
    }) => Promise<Response<userErrors, DocumentsType>>;
    deleteDocument: (documentId: {
        documentId: string;
    }) => Promise<Response<userErrors, DocumentsType>>;
}
export interface IUserDashboard {
}
