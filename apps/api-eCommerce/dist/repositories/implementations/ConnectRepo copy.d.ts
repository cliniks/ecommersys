import mongoose from "mongoose";
export declare class ConnectRepo {
    admin: mongoose.Connection;
    commission: mongoose.Connection;
    users: mongoose.Connection;
    address: mongoose.Connection;
    evaluations: mongoose.Connection;
    sellers: mongoose.Connection;
    sellersPolicies: mongoose.Connection;
    sellerSolicitations: mongoose.Connection;
    orders: mongoose.Connection;
    checkout: mongoose.Connection;
    carts: mongoose.Connection;
    products: mongoose.Connection;
    documents: mongoose.Connection;
    coupons: mongoose.Connection;
    categories: mongoose.Connection;
    wallets: mongoose.Connection;
    walletsHistory: mongoose.Connection;
    gatewayPagDB: {
        orders: mongoose.Connection;
        history: mongoose.Connection;
    };
    logisticsDB: {
        orders: mongoose.Connection;
        history: mongoose.Connection;
    };
    chatDB: {
        rooms: mongoose.Connection;
        chats: mongoose.Connection;
        messages: mongoose.Connection;
    };
    notifyDB: {
        notify: mongoose.Connection;
    };
}
