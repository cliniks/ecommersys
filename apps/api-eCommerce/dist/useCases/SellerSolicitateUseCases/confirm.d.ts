import { Request, Response } from "express";
import { IStoreSolicitate } from "../../repositories/Interfaces/IStoreSolicitate";
export declare const confirm: (req: Request, res: Response, repo: IStoreSolicitate) => Promise<void>;
