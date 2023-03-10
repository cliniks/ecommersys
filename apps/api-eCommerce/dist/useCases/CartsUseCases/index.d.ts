import { Request, Response } from "express";
export declare const cartsUseCases: {
    FineOne: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    getMyCart: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    FindAll: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    Add: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    Update: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    Delete: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    increment: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    decrement: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    insertCoupon: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
};
