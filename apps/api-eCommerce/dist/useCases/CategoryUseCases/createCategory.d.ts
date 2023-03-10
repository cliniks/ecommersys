import { Request, Response } from "express";
import { ICategoryRepository } from "../../repositories/Interfaces";
export declare const createCategory: (req: Request, res: Response, repository: ICategoryRepository) => Promise<Response<any, Record<string, any>>>;
