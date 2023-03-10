"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const mainRouter_1 = require("./router/mainRouter");
const sellersRoutes_1 = require("./router/sellersRoutes");
const cartsRouter_1 = require("./router/cartsRouter");
const salesRoutes_1 = require("./router/salesRoutes");
const productsRoutes_1 = require("./router/productsRoutes");
const usersRoutes_1 = require("./router/usersRoutes");
const authRoutes_1 = require("./router/authRoutes");
const sellerSolicitateRoutes_1 = require("./router/sellerSolicitateRoutes");
const ErrorHandling_1 = require("./errors/ErrorHandling");
const enumErrors_1 = require("./errors/enumErrors");
const verifyers_1 = require("./middlewares/verifyers");
const categoryRouter_1 = require("./router/categoryRouter");
const WebSocketImplementation_1 = require("./providers/websobket/WebSocketImplementation");
const globalRouter_1 = require("./router/globalRouter");
const addressRoutes_1 = require("./router/addressRoutes");
const sellerPoliciesRoutes_1 = require("./router/sellerPoliciesRoutes");
const couponsRouter_1 = require("./router/couponsRouter");
const documentRouter_1 = require("./router/documentRouter");
const repositories_1 = require("./repositories");
const paymentMethodsRouter_1 = require("./router/paymentMethodsRouter");
const adminRoutes_1 = require("./router/adminRoutes");
const clientsRouter_1 = require("./router/clientsRouter");
const notifyRoutes_1 = require("./router/notifyRoutes");
class App {
    constructor() {
        this.server = (0, express_1.default)();
        this.middlewares();
        this.routes();
        this.exceptionHandler();
        new repositories_1.GatewayPagImplementation();
    }
    async middlewares() {
        this.server.use((0, cors_1.default)());
        this.server.use(body_parser_1.default.json());
        this.server.use(body_parser_1.default.urlencoded({ extended: true }));
        new WebSocketImplementation_1.WebsocketImplementation();
    }
    routes() {
        // verifyers.verifyAppToken,
        this.server.use("/", mainRouter_1.router);
        this.server.use("/auth", verifyers_1.verifyers.verifyAppToken, authRoutes_1.AuthRoutes);
        this.server.use("/carts", verifyers_1.verifyers.verifyAppToken, cartsRouter_1.CartRouter);
        this.server.use("/sellers", verifyers_1.verifyers.verifyAppToken, sellersRoutes_1.SellersRoutes);
        this.server.use("/sellers/policies", verifyers_1.verifyers.verifyAppToken, sellerPoliciesRoutes_1.SellerPoliciesRoutes);
        this.server.use("/address", verifyers_1.verifyers.verifyAppToken, addressRoutes_1.AddressRouter);
        this.server.use("/payments", verifyers_1.verifyers.verifyAppToken, paymentMethodsRouter_1.paymentMethodsRouter);
        this.server.use("/sellerSolicitate", verifyers_1.verifyers.verifyAppToken, sellerSolicitateRoutes_1.SellerSolicitateRoutes);
        this.server.use("/sales", verifyers_1.verifyers.verifyAppToken, salesRoutes_1.SalesRoutes);
        this.server.use("/products", verifyers_1.verifyers.verifyAppToken, productsRoutes_1.ProductsRoutes);
        this.server.use("/users", verifyers_1.verifyers.verifyAppToken, usersRoutes_1.UsersRoutes);
        this.server.use("/categories", verifyers_1.verifyers.verifyAppToken, categoryRouter_1.CategoryRouter);
        this.server.use("/coupons", verifyers_1.verifyers.verifyAppToken, couponsRouter_1.CouponsRouter);
        this.server.use("/globals", verifyers_1.verifyers.verifyAppToken, globalRouter_1.globalRouter);
        this.server.use("/documents", verifyers_1.verifyers.verifyAppToken, documentRouter_1.documentRouter);
        this.server.use("/clients", verifyers_1.verifyers.verifyAppToken, clientsRouter_1.ClientsRouter);
        this.server.use("/notify", verifyers_1.verifyers.verifyAppToken, notifyRoutes_1.NotifyRouter);
        this.server.use("/admin", verifyers_1.verifyers.verifyAppToken, verifyers_1.verifyers.verifyAdmin, adminRoutes_1.adminRoutes);
    }
    exceptionHandler() {
        this.server.use(async (err, _, res, _next) => {
            if (process.env.NODE_ENV === "development") {
                (0, ErrorHandling_1.ErrorHandling)({
                    code: enumErrors_1.EnumErrorHandling.exception,
                    message: err.toString(),
                    res,
                });
            }
            // return res.status(500).json({ error: "Internal server error" });
            (0, ErrorHandling_1.ErrorHandling)({
                code: enumErrors_1.EnumErrorHandling.exception,
                message: err.toString(),
                res,
            });
        });
    }
}
exports.default = new App().server;
