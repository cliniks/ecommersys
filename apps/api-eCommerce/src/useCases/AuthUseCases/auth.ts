import { Request, Response } from "express";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../../entities/user.entitie";
import { ErrorHandling } from "../../errors/ErrorHandling";
import { EnumErrorHandling } from "../../errors/enumErrors";

const User = new UsersRepository();

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
        ErrorHandling({ code: EnumErrorHandling.incorrectPassword, res });
      }
    } else {
      ErrorHandling({ code: EnumErrorHandling.noUserWithThisEmail, res });
    }
  } catch (error) {
    console.log(error);
    ErrorHandling({ code: EnumErrorHandling.noUserWithThisEmail, res });
  }
};
