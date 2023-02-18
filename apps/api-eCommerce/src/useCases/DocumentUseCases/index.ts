import { Request, Response } from "express";

import { del } from "../CrudUseCases/delete";
import { get } from "../CrudUseCases/get";
import { getAll } from "../CrudUseCases/getAll";
import { update } from "../CrudUseCases/update";
import { getMyDocuments } from "./getMyProducts";
import { addDocument } from "./addDocument";
import { DocumentsRepository } from "../../repositories";

const repo = DocumentsRepository;

export const documentUseCases = {
  FineOne: async (req: Request, res: Response) => await get(req, res, repo),
  FindAll: async (req: Request, res: Response) => await getAll(req, res, repo),
  getMyDocuments: async (req: Request, res: Response) =>
    await getMyDocuments(req, res, repo),
  Add: async (req: Request, res: Response) => await addDocument(req, res, repo),
  Update: async (req: Request, res: Response) => await update(req, res, repo),
  Delete: async (req: Request, res: Response) => await del(req, res, repo),
};
