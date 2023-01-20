import { Request, Response } from "express";
import { ISellerCheckoutProvider } from "../../providers/ISellerCheckoutProvider";
export declare class SellerUseCases {
    private SellerProvider;
    constructor(SellerProvider: ISellerCheckoutProvider);
    addStore(req: Request, res: Response): Promise<void>;
    confirmPayment(req: Request, res: Response): Promise<void>;
    getAccount(_: Request, res: Response): Promise<void>;
}
