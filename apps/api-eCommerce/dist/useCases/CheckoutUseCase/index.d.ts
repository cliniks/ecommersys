import { Request, Response } from "express";
import { IUserCheckoutProvider } from "../../providers/interfaces/IClientAsaasProvider";
import { ISellerCheckoutProvider } from "../../providers/interfaces/ISellerCheckoutProvider";
import { ICheckoutRepository } from "../../repositories/Interfaces";
import { UserUseCases } from "./clientUseCases";
import { SellerUseCases } from "./sellerUseCases";
export declare class CheckoutUseCases {
    repo: ICheckoutRepository;
    clientGPProvider: IUserCheckoutProvider;
    sellerGPProvider: ISellerCheckoutProvider;
    asaas: {
        clientUseCases: UserUseCases;
        sellerUseCases: SellerUseCases;
    };
    constructor(repo: ICheckoutRepository, clientGPProvider: IUserCheckoutProvider, sellerGPProvider: ISellerCheckoutProvider);
    create: (req: Request, res: Response) => void;
    update: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    delete: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
