import express, { NextFunction, Request, Express } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { router } from "./router/mainRouter";
import { SellersRoutes } from "./router/sellersRoutes";
import { CartRouter } from "./router/cartsRouter";
import { SalesRoutes } from "./router/salesRoutes";
import { ProductsRoutes } from "./router/productsRoutes";
import { UsersRoutes } from "./router/usersRoutes";
import { AuthRoutes } from "./router/authRoutes";
import { SellerSolicitateRoutes } from "./router/sellerSolicitateRoutes";
import { ErrorHandling } from "./errors/ErrorHandling";
import { EnumErrorHandling } from "./errors/enumErrors";
import { verifyers } from "./middlewares/verifyers";
import { CategoryRouter } from "./router/categoryRouter";
import { WebsocketImplementation } from "./providers/websobket/WebSocketImplementation";
import { globalRouter } from "./router/globalRouter";
import { AddressRouter } from "./router/addressRoutes";
import { SellerPoliciesRoutes } from "./router/sellerPoliciesRoutes";
import { CouponsRouter } from "./router/couponsRouter";
import { documentRouter } from "./router/documentRouter";
import { GatewayPagImplementation } from "./repositories";
import { paymentMethodsRouter } from "./router/paymentMethodsRouter";
import { adminRoutes } from "./router/adminRoutes";
import { ClientsRouter } from "./router/clientsRouter";
import { NotifyRouter } from "./router/notifyRoutes";
import { WebhookRoutes } from "./router/webhooks";
import { BulkRoutes } from "./router/bulkRoutes";
import http from "http";
import { ChatsRoutes } from "./router/chatsRouter";
import { IWebSocket } from "./providers/websobket/IWebSocket";
import { TestsRoutes } from "./router/tests";

class App {
  public server: any;
  public app: Express;
  public websocket: IWebSocket;

  constructor() {
    this.app = express();
    this.server = http.createServer(this.app);
    this.middlewares();
    this.routes();
    this.exceptionHandler();
    new GatewayPagImplementation();
  }

  async middlewares() {
    this.app.use(cors());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.websocket = new WebsocketImplementation(this.server);
  }

  routes() {
    // verifyers.verifyAppToken,
    this.app.use("/", router);
    this.app.use("/auth", verifyers.verifyAppToken, AuthRoutes);
    this.app.use("/carts", verifyers.verifyAppToken, CartRouter);
    this.app.use("/sellers", verifyers.verifyAppToken, SellersRoutes);
    this.app.use(
      "/sellers/policies",
      verifyers.verifyAppToken,
      SellerPoliciesRoutes
    );
    this.app.use("/address", verifyers.verifyAppToken, AddressRouter);
    this.app.use("/payments", verifyers.verifyAppToken, paymentMethodsRouter);
    this.app.use(
      "/sellerSolicitate",
      verifyers.verifyAppToken,
      SellerSolicitateRoutes
    );
    this.app.use("/sales", verifyers.verifyAppToken, SalesRoutes);
    this.app.use("/products", verifyers.verifyAppToken, ProductsRoutes);
    this.app.use("/users", verifyers.verifyAppToken, UsersRoutes);
    this.app.use("/categories", verifyers.verifyAppToken, CategoryRouter);
    this.app.use("/coupons", verifyers.verifyAppToken, CouponsRouter);
    this.app.use("/globals", verifyers.verifyAppToken, globalRouter);
    this.app.use("/documents", verifyers.verifyAppToken, documentRouter);
    this.app.use("/clients", verifyers.verifyAppToken, ClientsRouter);
    this.app.use("/notify", verifyers.verifyAppToken, NotifyRouter);
    this.app.use("/chats", verifyers.verifyAppToken, ChatsRoutes);
    this.app.use("/webhooks", WebhookRoutes(this.websocket));
    this.app.use("/tests", TestsRoutes(this.websocket));
    this.app.use("/bulk", BulkRoutes);
    this.app.use(
      "/admin",
      verifyers.verifyAppToken,
      verifyers.verifyAdmin,
      adminRoutes
    );
  }

  exceptionHandler() {
    this.app.use(
      async (err: any, _: Request, res: any, _next: NextFunction) => {
        if (process.env.NODE_ENV === "development") {
          ErrorHandling({
            code: EnumErrorHandling.exception,
            message: err.toString(),
            res,
          });
        }
        // return res.status(500).json({ error: "Internal server error" });
        ErrorHandling({
          code: EnumErrorHandling.exception,
          message: err.toString(),
          res,
        });
      }
    );
  }
}

export default new App().server;
