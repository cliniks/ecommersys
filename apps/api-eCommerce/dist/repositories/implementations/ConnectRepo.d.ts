import mongoose from "mongoose";
export declare class ConnectRepo {
    users: mongoose.Connection;
    evaluations: mongoose.Connection;
    sellers: mongoose.Connection;
    sellerSolicitations: mongoose.Connection;
    orders: mongoose.Connection;
    carts: mongoose.Connection;
    products: mongoose.Connection;
    coupons: mongoose.Connection;
    categories: mongoose.Connection;
    wallets: mongoose.Connection;
    walletsHistory: mongoose.Connection;
    gatewayPagDB: {
        orders: mongoose.Connection;
        history: mongoose.Connection;
        logs: mongoose.Connection;
    };
    logisticsDB: {
        orders: mongoose.Connection;
        history: mongoose.Connection;
        logs: mongoose.Connection;
    };
    chatDB: {
        rooms: mongoose.Connection;
        chats: mongoose.Connection;
        messages: mongoose.Connection;
        logs: mongoose.Connection;
    };
    notifyDB: {
        notify: mongoose.Connection;
    };
}
