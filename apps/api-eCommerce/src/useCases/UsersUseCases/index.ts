import { Request, Response } from "express";
import { RedisImplementation } from "../../repositories/implementations/RedisRepo";

import { UsersRepository } from "../../repositories/implementations/UsersRepository";

import { del } from "../CrudUseCases/delete";
import { get } from "../CrudUseCases/get";
import { getAll } from "../CrudUseCases/getAll";
import { update } from "../CrudUseCases/update";
import { confirmEmailToken, createEmailToken } from "./emailToken";
import { myUser } from "./myUser";
import { newUser } from "./newUser";
import { updateImage } from "./updateImage";
import { updateUserInfo } from "./updateUserInfo";

const users = new UsersRepository();
const cache = new RedisImplementation();

export const usersUseCases = {
  FindOne: async (req: Request, res: Response) => await get(req, res, users),
  getMyUser: async (req: Request, res: Response) => await myUser(req, res),
  FindAll: async (req: Request, res: Response) => await getAll(req, res, users),
  newUser: async (req: Request, res: Response) =>
    await newUser(req, res, users),
  updateImage: async (req: Request, res: Response) =>
    await updateImage(req, res, users),
  updateUserInfo: async (req: Request, res: Response) =>
    await updateUserInfo(req, res, users),
  Update: async (req: Request, res: Response) => await update(req, res, users),
  Delete: async (req: Request, res: Response) => await del(req, res, users),
  createEmailToken: async (req: Request, res: Response) =>
    createEmailToken(req, res, cache),
  confirmEmailToken: async (req: Request, res: Response) =>
    confirmEmailToken(req, res, cache),
};
