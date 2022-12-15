import { Request } from "express";
import jwt from "jsonwebtoken";
import { User } from "../entities/user.entitie";
import { UsersRepository } from "../repositories/implementations/UsersRepository";

const returnUserFromToken = async (req: Request): Promise<User> => {
  try {
    const repo = new UsersRepository();
    const token = req.headers["x-access-token"];
    console.log({ token });
    const decoded: User | any = jwt.decode(`${token}`);
    console.log({ decoded });
    const userID = decoded._id;
    console.log({ userID });
    const user = (await repo.getOne({
      key: "_id",
      value: userID,
    })) as User;
    console.log({ user });
    return user;
  } catch (error) {
    throw new Error("Não foi possível achar um usuário a partir desse token!");
  }
};

export { returnUserFromToken };
