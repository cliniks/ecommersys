import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { router } from "./router/mainRouter";
import { ClientRouter } from "./router/clientRoutes";
import { GatewayPagRepository } from "./repositories/implementations/GatewayPagImplements";
import { SellerRoutes } from "./router/sellerRoutes";

class App {
  public server: any;
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
    this.exceptionHandler();
    new GatewayPagRepository();
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(bodyParser.json());
    this.server.use(bodyParser.urlencoded({ extended: true }));
  }

  routes() {
    this.server.use("/", router);
    this.server.use("/client", ClientRouter);
    this.server.use("/seller", SellerRoutes);
  }

  exceptionHandler() {
    this.server.use(async (err: any, req: any, res: any, _next: any) => {
      if (process.env.NODE_ENV === "development") {
        return res.status(500).json({ err });
      }
      return res.status(500).json({ error: "Internal server error" });
    });
  }
}

export default new App().server;
