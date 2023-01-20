import { Request, Response } from "express";
import { IRedisRepository } from "../../repositories/Interfaces/IRedisRepository";
export declare const createEmailToken: (req: Request, res: Response, cache: IRedisRepository) => Promise<Response<any, Record<string, any>>>;
export declare const confirmEmailToken: (req: Request, res: Response, cache: IRedisRepository) => Promise<Response<any, Record<string, any>>>;
