import { Request, Response } from "express";
export declare const addressUseCases: {
    FineOne: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    FindAll: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    FindAllUser: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    FindAllStore: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    AddUser: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    AddSeller: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    Update: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    Delete: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    setDefault: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
};
