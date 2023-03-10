import { Request, Response } from "express";
export declare const paymentMethodUseCases: {
    FindSingle: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    FindAll: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    myUserCards: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    mySellerCards: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    Update: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    Delete: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    AddPaymentMethod: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    DeletePaymentMethod: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
};
