import { Request, Response } from "express";

import { del } from "../CrudUseCases/delete";

import { get } from "../CrudUseCases/get";

import { getAll } from "../CrudUseCases/getAll";

import { update } from "../CrudUseCases/update";

import { notifyRepository } from "../../repositories";

import { add } from "../CrudUseCases/add";

import { getMany } from "../CrudUseCases/getMany";

import {
  getMyGlobalNotifications,
  getMySellerNotifications,
  getMyUserNotifications,
} from "./getMyNotifications";

import { readNotification } from "./readNotifications";

const notifications = notifyRepository;

export const notifyUseCases = {
  FineOne: async (req: Request, res: Response) =>
    await get(req, res, notifications),

  readNotification: async (req: Request, res: Response) =>
    await readNotification(req, res, notifications),

  getMyUserNotifications: async (req: Request, res: Response) =>
    await getMyUserNotifications(req, res),

  getMySellerNotifications: async (req: Request, res: Response) =>
    await getMySellerNotifications(req, res),

  getGlobalNotifications: async (req: Request, res: Response) =>
    await getMyGlobalNotifications(req, res),

  findMany: async (req: Request, res: Response) =>
    await getMany(req, res, notifications),

  FindAll: async (req: Request, res: Response) =>
    await getAll(req, res, notifications),

  Add: async (req: Request, res: Response) =>
    await add(req, res, notifications),

  Update: async (req: Request, res: Response) =>
    await update(req, res, notifications),

  Delete: async (req: Request, res: Response) =>
    await del(req, res, notifications),
};
