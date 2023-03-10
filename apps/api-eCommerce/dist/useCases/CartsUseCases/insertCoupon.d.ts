import { Request, Response } from "express";
import { ICartsRepository } from "../../repositories/Interfaces";
export declare const insertCoupon: (req: Request, res: Response, repo: ICartsRepository) => Promise<Response<any, Record<string, any>>>;
