import { Request, Response } from "express";
import { ICheckoutRepository } from "../../repositories/Interfaces";
export declare const createCheckout: (req: Request, res: Response, repo: ICheckoutRepository) => void;
