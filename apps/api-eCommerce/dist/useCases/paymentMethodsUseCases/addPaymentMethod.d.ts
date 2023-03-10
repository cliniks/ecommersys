import { Request, Response } from "express";
import { IPaymentMethods } from "../../repositories/Interfaces/IPaymentMethodsRepository";
export declare const AddPaymentMethod: (req: Request, res: Response, repo: IPaymentMethods) => Promise<Response<any, Record<string, any>>>;
