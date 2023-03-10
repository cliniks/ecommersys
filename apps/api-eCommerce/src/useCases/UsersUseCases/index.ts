import { Request, Response } from "express";

import { RedisImplementation, UsersRepository } from "../../repositories";

import { confirmEmailToken, createEmailToken } from "./emailToken";

import { updateUserInfo } from "./updateUserInfo";

import { userGetProduct } from "./userGetProduct";

import { getAll } from "../CrudUseCases/getAll";

import { update } from "../CrudUseCases/update";

import { del } from "../CrudUseCases/delete";

import { updateImage } from "./updateImage";

import { get } from "../CrudUseCases/get";

import { newUser } from "./newUser";

import { myUser } from "./myUser";
import { getMany } from "../CrudUseCases/getMany";

const users = UsersRepository;

const cache = new RedisImplementation();

export const usersUseCases = {
  FindOne: async (req: Request, res: Response) => await get(req, res, users),

  FindMany: async (req: Request, res: Response) =>
    await getMany(req, res, users),

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
    await createEmailToken(req, res, cache),

  confirmEmailToken: async (req: Request, res: Response) =>
    await confirmEmailToken(req, res, cache),

  seeProduct: async (req: Request, res: Response) =>
    await userGetProduct(req, res, users),
};
