import { Request, Response } from "express";
import { IUserCheckoutProvider } from "../../providers/interfaces/IClientAsaasProvider";
export declare class UserUseCases {
    private GPProvider;
    constructor(GPProvider: IUserCheckoutProvider);
    newClient(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    genCharge(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    getCharge(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
