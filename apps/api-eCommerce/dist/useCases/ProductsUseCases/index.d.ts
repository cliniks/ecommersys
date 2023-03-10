import { Request, Response } from "express";
export declare const productsUseCases: {
    FineOne: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    FindMany: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    FindAll: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    CreateProduct: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    Update: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    Delete: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    favoriteProduct: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    likeProduct: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
};
