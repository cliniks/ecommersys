import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../../entities/user.entitie";
import { EnumErrorHandling } from "../../errors/enumErrors";
import { UsersRepository } from "../../repositories";

const User = UsersRepository;

export const auth = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const user: User | any = await User.getOne({
      key: "username",
      value: username,
    });
    if (user) {
      const match = await bcrypt.compare(password, user.password);
      const accessToken = jwt.sign(
        { _id: user._id, seller: user.storeId },
        `${process.env.TOKEN_SECRET}`
      );
      if (match) {
        res.json({
          accessToken: accessToken,
          userId: user?._id,
          seller: user.storeId,
        });
      } else {
        throw new Error(EnumErrorHandling[EnumErrorHandling.incorrectPassword]);
      }
    } else {
      throw new Error(EnumErrorHandling[EnumErrorHandling.noUserWithThisEmail]);
    }
  } catch (error: any) {
    res.status(400).send(error.toString());
  }
};

export const verifyAccountExistence = async (req: Request, res: Response) => {
  try {
    const { username } = req.body;
    const verify = await User.getOne({ key: "username", value: username });
    if (verify) return res.json(true);
    return res.json(false);
  } catch (err) {
    return res.json(false);
  }
};
