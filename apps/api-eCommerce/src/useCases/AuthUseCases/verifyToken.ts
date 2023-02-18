import { Request, Response } from "express";
import jwt from "jsonwebtoken";

export const verifyToken = async (req: Request, res: Response) => {
  try {
    const { token } = req.body;
    return jwt.verify(
      token,
      `${process.env.TOKEN_SECRET}`,
      (err: any, decoded: any): any => {
        if (err) {
          console.log("err", err);
          return res.status(200).send(false);
        }
        console.log("success", decoded._id);
        return res.status(200).send(true);
      }
    );
  } catch (error) {
    return res.status(400).send(false);
  }
};
