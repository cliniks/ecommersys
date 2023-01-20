import { Request, Response } from "express";
import { IUserCheckoutProvider } from "../../providers/IClientAsaasProvider";
export declare class UserUseCases {
    private GPProvider;
    constructor(GPProvider: IUserCheckoutProvider);
    newClient(req: Request, res: Response): Promise<void>;
    genCharge(req: Request, res: Response): Promise<void>;
    getCharge(req: Request, res: Response): Promise<void>;
}
