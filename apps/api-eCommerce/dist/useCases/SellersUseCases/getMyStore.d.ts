import { Request, Response } from "express";
import { ISellersRepository } from "../../repositories/Interfaces";
export declare const getMyStore: (req: Request, res: Response, repo: ISellersRepository) => Promise<Response<any, Record<string, any>>>;
