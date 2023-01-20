import { Request, Response } from "express";
import { ISellersRepository } from "../../repositories/Interfaces/ISellersRepository";
export declare const getMyStore: (req: Request, res: Response, repo: ISellersRepository) => Promise<void>;
