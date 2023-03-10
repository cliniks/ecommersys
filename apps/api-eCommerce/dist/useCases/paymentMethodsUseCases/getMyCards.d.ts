import { Request, Response } from "express";
import { IPaymentMethods } from "../../repositories/Interfaces/IPaymentMethodsRepository";
export declare const myUserCards: (req: Request, res: Response, repo: IPaymentMethods) => Promise<Response<any, Record<string, any>>>;
export declare const mySellerCards: (req: Request, res: Response, repo: IPaymentMethods) => Promise<Response<any, Record<string, any>>>;
