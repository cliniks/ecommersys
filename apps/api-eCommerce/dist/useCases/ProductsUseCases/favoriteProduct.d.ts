import { IProductsRepository } from "../../repositories/Interfaces";
import { Request, Response } from "express";
export declare const favoriteProduct: (req: Request, res: Response, repo: IProductsRepository) => Promise<Response<any, Record<string, any>>>;
