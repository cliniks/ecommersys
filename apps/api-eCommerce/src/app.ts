import express, { NextFunction, Request } from "express";
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
import { ErrorHandling } from "./errors/ErrorHandling";
import { EnumErrorHandling } from "./errors/enumErrors";
import { verifyers } from "./middlewares/verifyers";

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
    // verifyers.verifyAppToken,
    this.server.use("/", router);
    this.server.use("/auth", verifyers.verifyAppToken, AuthRoutes);
    this.server.use("/carts", verifyers.verifyAppToken, CartRouter);
    this.server.use("/sellers", verifyers.verifyAppToken, SellersRoutes);
    this.server.use(
      "/sellerSolicitate",
      verifyers.verifyAppToken,
      SellerSolicitateRoutes
    );
    this.server.use("/sales", verifyers.verifyAppToken, SalesRoutes);
    this.server.use("/products", verifyers.verifyAppToken, ProductsRoutes);
    this.server.use("/users", verifyers.verifyAppToken, UsersRoutes);
  }

  exceptionHandler() {
    this.server.use(
      async (err: any, _: Request, res: any, _next: NextFunction) => {
        if (process.env.NODE_ENV === "development") {
          return ErrorHandling({
            code: EnumErrorHandling.exception,
            message: err.response,
            res,
          });
        }
        // return res.status(500).json({ error: "Internal server error" });
        return ErrorHandling({
          code: EnumErrorHandling.exception,
          message: err.response,
          res,
        });
      }
    );
  }
}

export default new App().server;
