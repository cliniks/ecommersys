import { Request, Response } from "express";

import { del } from "../CrudUseCases/delete";
import { get } from "../CrudUseCases/get";
import { update } from "../CrudUseCases/update";
import { createStoreAddress, createUserAddress } from "./createAddress";
import { getMyStoreAddress, getMyUserAddress } from "./getMyAddress";
import { getAll } from "../CrudUseCases/getAll";
import { AddressesRepository } from "../../repositories";
import { setDefaultAddress } from "./setDefault";

const address = AddressesRepository;

export const addressUseCases = {
  FineOne: async (req: Request, res: Response) => await get(req, res, address),
  FindAll: async (req: Request, res: Response) =>
    await getAll(req, res, address),
  FindAllUser: async (req: Request, res: Response) =>
    await getMyUserAddress(req, res, address),
  FindAllStore: async (req: Request, res: Response) =>
    await getMyStoreAddress(req, res, address),
  AddUser: async (req: Request, res: Response) =>
    createUserAddress(req, res, address),
  AddSeller: async (req: Request, res: Response) =>
    createStoreAddress(req, res, address),
  Update: async (req: Request, res: Response) =>
    await update(req, res, address),
  Delete: async (req: Request, res: Response) => await del(req, res, address),
  setDefault: async (req: Request, res: Response) =>
    await setDefaultAddress(req, res),
};
