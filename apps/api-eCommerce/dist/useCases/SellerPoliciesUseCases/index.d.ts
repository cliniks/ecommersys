import { Request, Response } from "express";
export declare const sellerPoliciesUseCases: {
    FineOne: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    FindAll: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    getMyPolicies: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    Add: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    Update: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    Delete: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
};
