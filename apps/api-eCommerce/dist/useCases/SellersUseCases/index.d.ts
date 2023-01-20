import { Request, Response } from "express";
export declare const sellersUseCases: {
    FineOne: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    FindAll: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    Add: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    Update: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    Delete: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    DashboardStats: (req: Request, res: Response) => Promise<void>;
    getMyCoupons: (req: Request, res: Response) => Promise<void>;
    getMyStore: (req: Request, res: Response) => Promise<void>;
    getMyProducts: (req: Request, res: Response) => Promise<void>;
    getMyCategories: (req: Request, res: Response) => Promise<void>;
    updateStoreImage: (req: Request, res: Response) => Promise<void>;
    updateStoreBanner: (req: Request, res: Response) => Promise<void>;
    GetCards: (req: Request, res: Response) => Promise<void>;
    GetCard: (req: Request, res: Response) => Promise<void>;
    AddCard: (req: Request, res: Response) => Promise<void>;
    UpdateCard: (req: Request, res: Response) => Promise<void>;
    DeleteCard: (req: Request, res: Response) => Promise<void>;
    GetPaymentsPageInfo: (req: Request, res: Response) => Promise<void>;
};
