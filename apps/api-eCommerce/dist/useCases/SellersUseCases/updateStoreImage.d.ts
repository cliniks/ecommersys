import { Request, Response } from "express";
import { ISellersRepository } from "../../repositories/Interfaces";
export declare const updateStoreImage: (req: Request, res: Response, repo: ISellersRepository) => Promise<Response<any, Record<string, any>>>;
