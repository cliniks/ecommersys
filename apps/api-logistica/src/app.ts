import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { router } from "./router/mainRouter";
import { AuthRoutes } from "./router/authRoutes";
import { UserRouter } from "./router/userRoutes";
import { SellerRouter } from "./router/sellerRoutes";

class App {
  public server: any;
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
    this.exceptionHandler();
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(bodyParser.json());
    this.server.use(bodyParser.urlencoded({ extended: true }));
  }

  routes() {
    this.server.use("/", router);
    this.server.use("/auth", AuthRoutes);
    this.server.use("/seller", SellerRouter);
    this.server.use("/user", UserRouter);
  }

  exceptionHandler() {
    this.server.use(async (err, req, res, _next) => {
      if (process.env.NODE_ENV === "development") {
        return res.status(500).json({ err });
      }
      return res.status(500).json({ error: "Internal server error" });
    });
  }
}

export default new App().server;
