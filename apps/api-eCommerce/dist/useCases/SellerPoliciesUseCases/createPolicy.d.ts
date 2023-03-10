import { Request, Response } from "express";
import { IStorePolicyRepository } from "../../repositories/Interfaces";
export declare const createPolicy: (req: Request, res: Response, repository: IStorePolicyRepository) => Promise<Response<any, Record<string, any>>>;
