import { Request, Response } from "express";
export declare const notifyUseCases: {
    FineOne: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    getMyUserNotifications: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    getMySellerNotifications: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    getGlobalNotifications: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    findMany: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    FindAll: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    Add: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    Update: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    Delete: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
};
