import { Request, Response } from "express";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../../entities/user.entitie";

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
        { _id: user._id },
        `${process.env.TOKEN_SECRET}`
      );
      if (match) {
        res.json({ accessToken: accessToken, userId: user?._id });
      } else {
        res.status(400).send({ message: "Invalid Credentials" });
      }
    } else {
      throw new Error("não foi possível achar o usuário");
    }
  } catch (error) {
    res.status(400).send({ error });
  }
};
