import { Request, Response } from "express";

import { del } from "../CrudUseCases/delete";
import { get } from "../CrudUseCases/get";
import { update } from "../CrudUseCases/update";
import { AddressRepository } from "../../repositories/implementations/AddressRepository";
import { createStoreAddress, createUserAddress } from "./createAddress";
import { getMyStoreAddress, getMyUserAddress } from "./getMyAddress";

const address = new AddressRepository();

export const addressUseCases = {
  FineOne: async (req: Request, res: Response) => await get(req, res, address),
  FindAllUser: async (req: Request, res: Response) =>
    await getMyUserAddress(req, res),
  FindAllStore: async (req: Request, res: Response) =>
    await getMyStoreAddress(req, res),
  AddUser: async (req: Request, res: Response) =>
    createUserAddress(req, res, address),
  AddSeller: async (req: Request, res: Response) =>
    createStoreAddress(req, res, address),
  Update: async (req: Request, res: Response) =>
    await update(req, res, address),
  Delete: async (req: Request, res: Response) => await del(req, res, address),
};
