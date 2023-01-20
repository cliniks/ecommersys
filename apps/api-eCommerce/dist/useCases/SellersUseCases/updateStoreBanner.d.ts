import { Request, Response } from "express";
import { ISellersRepository } from "../../repositories/Interfaces/ISellersRepository";
export declare const updateStoreBanner: (req: Request, res: Response, repo: ISellersRepository) => Promise<void>;
