import { Request, Response } from "express";
export declare const sellersSolicitateUseCases: {
    FineOne: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    FindAll: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    Solicitate: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    Confirm: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    Reject: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    delete: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
};
