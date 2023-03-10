import { Request } from "express";
import jwt from "jsonwebtoken";
import { User } from "../entities/user.entitie";
import { UsersRepository } from "../repositories";

const returnUserFromToken = async (req: Request): Promise<User> => {
  try {
    const userRepo = UsersRepository;

    const token = req.headers["x-access-token"];

    const decoded: User | any = jwt.decode(`${token}`);

    const userID = await decoded;

    const user = await userRepo.getOne({ key: "_id", value: userID._id });

    return user;
  } catch (error) {
    console.log({ error });
    return null;
  }
};

const getUserFromToken = async (token: string): Promise<User> => {
  try {
    const userRepo = UsersRepository;
    const decoded: User | any = jwt.decode(`${token}`);

    const userID = await decoded;

    const user = await userRepo.getOne({ key: "_id", value: userID._id });

    return user;
  } catch (error) {
    return null;
  }
};

export { returnUserFromToken, getUserFromToken };
