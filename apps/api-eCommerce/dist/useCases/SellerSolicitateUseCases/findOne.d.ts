import { Request, Response } from "express";
import { IStoreSolicitate } from "../../repositories/Interfaces";
export declare const findOne: (req: Request, res: Response, repo: IStoreSolicitate) => Promise<Response<any, Record<string, any>>>;
