import { Request, Response } from "express";
import { IStorePolicyRepository } from "../../repositories/Interfaces";
export declare const getMyPolicies: (req: Request, res: Response, repo: IStorePolicyRepository) => Promise<Response<any, Record<string, any>>>;
