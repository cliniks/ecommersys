import { Request, Response } from "express";
import jwt from "jsonwebtoken";

export const verifyToken = async (req: Request, res: Response) => {
  try {
    const { token } = req.body;
    jwt.verify(
      token,
      `${process.env.TOKEN_SECRET}`,
      (err: any, decoded: any): any => {
        if (err) return res.status(200).send(false);
        decoded._id;
        res.status(200).send(true);
      }
    );
  } catch (error) {
    res.status(200).send(false);
  }
};
