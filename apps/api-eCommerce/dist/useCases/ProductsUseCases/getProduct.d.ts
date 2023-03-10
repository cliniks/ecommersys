import { IProductsRepository } from "../../repositories/Interfaces";
import { Request, Response } from "express";
export declare const getSingleProduct: (req: Request, res: Response, repo: IProductsRepository) => Promise<Response<any, Record<string, any>>>;
