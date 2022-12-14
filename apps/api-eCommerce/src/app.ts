import express, { Request } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { router } from "./router/mainRouter";
import { GatewayPagRepository } from "./repositories/implementations/GatewayPagImplements";
import { SellersRoutes } from "./router/sellersRoutes";
import { CartRouter } from "./router/cartsRouter";
import { SalesRoutes } from "./router/salesRoutes";
import { ProductsRoutes } from "./router/productsRoutes";
import { UsersRoutes } from "./router/usersRoutes";
import { AuthRoutes } from "./router/authRoutes";
import { SellerSolicitateRoutes } from "./router/sellerSolicitateRoutes";

class App {
  public server: any;
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
    this.exceptionHandler();
    new GatewayPagRepository();
  }

  async middlewares() {
    this.server.use(cors());
    this.server.use(bodyParser.json());
    this.server.use(bodyParser.urlencoded({ extended: true }));
  }

  routes() {
    this.server.use("/", router);
    this.server.use("/auth", AuthRoutes);
    this.server.use("/carts", CartRouter);
    this.server.use("/sellers", SellersRoutes);
    this.server.use("/sellerSolicitate", SellerSolicitateRoutes);
    this.server.use("/sales", SalesRoutes);
    this.server.use("/products", ProductsRoutes);
    this.server.use("/users", UsersRoutes);
  }

  exceptionHandler() {
    this.server.use(async (err: any, req: Request, res: any, _next: any) => {
      if (process.env.NODE_ENV === "development") {
        return res.status(500).json({ err });
      }
      return res.status(500).json({ error: "Internal server error" });
    });
  }
}

export default new App().server;
