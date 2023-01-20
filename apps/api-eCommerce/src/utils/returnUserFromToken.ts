import { Request } from "express";
import jwt from "jsonwebtoken";
import { User } from "../entities/user.entitie";
import { UsersRepository } from "../repositories/implementations/UsersRepository";

const returnUserFromToken = async (req: Request): Promise<User> => {
  try {
    const repo = new UsersRepository();

    const token = req.headers["x-access-token"];

    const decoded: User | any = jwt.decode(`${token}`);

    const userID = decoded._id;

    const user = (await repo.getOne({
      key: "_id",
      value: userID,
    })) as User;

    return user;
  } catch (error) {
    throw new Error("Não foi possível achar um usuário a partir desse token!");
  }
};

const getUserFromToken = async (token: string): Promise<User> => {
  try {
    const repo = new UsersRepository();
    const decoded: User | any = jwt.decode(`${token}`);
    const userID = decoded._id;
    return (await repo.getOne({
      key: "_id",
      value: userID,
    })) as User;
  } catch (error) {
    throw new Error("Não foi possível achar um usuário a partir desse token!");
  }
};

export { returnUserFromToken, getUserFromToken };
