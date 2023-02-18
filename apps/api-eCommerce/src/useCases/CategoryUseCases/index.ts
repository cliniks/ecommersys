import { Request, Response } from "express";

import { del } from "../CrudUseCases/delete";

import { get } from "../CrudUseCases/get";

import { getAll } from "../CrudUseCases/getAll";

import { update } from "../CrudUseCases/update";

import { createCategory } from "./createCategory";

import { CategoriesRepository } from "../../repositories";

const category = CategoriesRepository;

export const categoryUseCases = {
  FineOne: async (req: Request, res: Response) => await get(req, res, category),

  FindAll: async (req: Request, res: Response) =>
    await getAll(req, res, category),

  Add: async (req: Request, res: Response) =>
    await createCategory(req, res, category),

  Update: async (req: Request, res: Response) =>
    await update(req, res, category),

  Delete: async (req: Request, res: Response) => await del(req, res, category),
};
