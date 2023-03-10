import { Request, Response } from "express";
import { ISalesRepository } from "../../repositories/Interfaces";
export declare const createPayment: (req: Request, res: Response, repo: ISalesRepository) => Promise<void>;
