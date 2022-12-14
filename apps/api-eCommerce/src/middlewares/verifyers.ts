import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { returnUserFromToken } from "../utils/returnUserFromToken";

const verifyers = {
  async verifyToken(req: Request, res: Response, next: NextFunction) {
    try {
      const token = req.headers["x-access-token"] as string;
      const tokenSecret = process.env.TOKEN_SECRET as string;
      jwt.verify(token, tokenSecret, (err: any, decoded: any) => {
        if (err) res.status(400).send(err);
        decoded._id;
        next();
      });
    } catch (error) {
      res.status(400).send(error);
    }
  },
  async verifySeller(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await returnUserFromToken(req);
      if (user.access === 2) return next();
      else return res.status(400).send("Usuário não é um vendedor");
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async verifyThisSeller(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await returnUserFromToken(req);
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
};

export { verifyers };
