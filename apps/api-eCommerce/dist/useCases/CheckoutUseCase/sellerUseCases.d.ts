import { Request, Response } from "express";
import { ISellerCheckoutProvider } from "../../providers/interfaces/ISellerCheckoutProvider";
export declare class SellerUseCases {
    private SellerProvider;
    constructor(SellerProvider: ISellerCheckoutProvider);
    addStore(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    confirmPayment(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    getAccount(_: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
