import { Request, Response } from "express";
import { IStoreSolicitate } from "../../repositories/Interfaces/IStoreSolicitationRepository";
export declare const solicitate: (req: Request, res: Response, repo: IStoreSolicitate) => Promise<Response<any, Record<string, any>>>;
