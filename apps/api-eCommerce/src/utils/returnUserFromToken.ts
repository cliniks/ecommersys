import { Request } from "express";
import jwt from "jsonwebtoken";
import { User } from "../entities/user.entitie";
import { UsersRepository } from "../repositories";

const returnUserFromToken = async (req: Request): Promise<User> => {
  try {
    const repo = UsersRepository;

    const token = req.headers["x-access-token"];

    const decoded: User | any = jwt.decode(`${token}`);

    const userID = decoded._id;

    const user = (await repo.getOne({
      key: "_id",
      value: userID,
    })) as User;

    return user;
  } catch (error) {
    return null;
  }
};

const getUserFromToken = async (token: string): Promise<User> => {
  try {
    const repo = UsersRepository;
    const decoded: User | any = jwt.decode(`${token}`);
    const { userID } = decoded;
    return (await repo.getOne({
      key: "_id",
      value: userID,
    })) as User;
  } catch (error) {
    return null;
  }
};

export { returnUserFromToken, getUserFromToken };
