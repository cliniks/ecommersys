import { Errback, NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { returnUserFromToken } from "../utils/returnUserFromToken";
import { bearerTokenFromHeader } from "../utils/getFromHeaders";

const verifyers = {
  async verifyToken(req: Request, res: Response, next: NextFunction) {
    try {
      const token = `${req?.headers["x-access-token"]}`;
      const tokenSecret = `${process.env.TOKEN_SECRET}`;
      jwt.verify(token, tokenSecret);
      next();
    } catch (error: any | Errback) {
      res.status(400).send(error.toString());
    }
  },
  async verifyAppToken(req: Request, res: Response, next: NextFunction) {
    try {
      const token = bearerTokenFromHeader(`${req?.headers.authorization}`);
      const tokenSecret = `${process.env.CLINIKS_APPTOKEN}`;
      const verify = token?.trim() === tokenSecret?.trim();
      if (verify) next();
      else
        throw new Error("Token da aplicação é necessária, contate o supporte");
    } catch (error: any | Errback) {
      res.status(400).send(error.toString());
    }
  },
  async verifySeller(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await returnUserFromToken(req);
      if (user.access === 2 || user.access === 99) return next();
      else return res.status(400).send("Usuário não é um vendedor");
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async verifyThisSeller(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await returnUserFromToken(req);
      console.log(user.storeId.toString(), req.params.id.toString());
      if (user.storeId.toString() === req.params.id.toString()) return next();
      else return res.status(400).send("Usuário não é um vendedor");
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async verifyProductOwner(req: Request, res: Response, next: NextFunction) {
    try {
      const user: any = await returnUserFromToken(req);
      // const product: Product | null = await ProductModel.findById(
      //   req.params.id
      // );
      const product = { owner: "teste" };
      if (product) {
        if (user._id.toString() === product.owner) return next();
        else return res.status(400).send("Usuário não é o dono desse produto");
      }
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async verifyAccountOwner(req: Request, res: Response, next: NextFunction) {
    try {
      const GetUserByToken: any = await returnUserFromToken(req);
      // const user: User | null = await UserModel.findById(req.params.id);
      const user = { _id: "teste" };
      if (user) {
        if (GetUserByToken._id.toString() === user._id.toString())
          return next();
        else return res.status(400).send("Usuário não é o dono dessa imagem");
      }
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async verifyAdmin(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await returnUserFromToken(req);
      console.log(user.access);
      if (user.access === 99) return next();
      else return res.status(400).send("Usuário não é um administrador");
    } catch (error) {
      return res.status(400).send(error);
    }
  },
};

export { verifyers };
