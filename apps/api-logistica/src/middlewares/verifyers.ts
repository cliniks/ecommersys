import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const verifyers = {
  async verifyToken(req: Request, res: Response, next: NextFunction) {
    try {
      const token = req.headers["x-access-token"];
      jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
        if (err) return res.status(400).send(err);
        decoded._id;
        next();
      });
    } catch (error) {
      return res.status(400).send(error);
    }
  },
};

export { verifyers };
