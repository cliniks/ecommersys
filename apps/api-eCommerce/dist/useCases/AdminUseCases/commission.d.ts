import { Request, Response } from "express";
declare const globalCommission: {
    FineOne: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    addOne: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    FindAll: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    Update: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    Delete: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
};
declare const productsCommission: {
    FineOne: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    addOne: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    FindAll: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    Update: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    Delete: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    storeProductCommission: (req: Request, res: Response) => Promise<void>;
};
declare const categoryCommission: {
    FineOne: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    addOne: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    FindAll: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    Update: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    Delete: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    storeCategoryCommission: (req: Request, res: Response) => Promise<void>;
};
declare const storeCommission: {
    FineOne: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    addOne: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    FindAll: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    Update: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    Delete: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
};
export declare const commission: {
    Global: {
        FineOne: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
        addOne: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
        FindAll: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
        Update: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
        Delete: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    };
    Product: {
        FineOne: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
        addOne: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
        FindAll: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
        Update: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
        Delete: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
        storeProductCommission: (req: Request, res: Response) => Promise<void>;
    };
    Category: {
        FineOne: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
        addOne: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
        FindAll: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
        Update: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
        Delete: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
        storeCategoryCommission: (req: Request, res: Response) => Promise<void>;
    };
    Store: {
        FineOne: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
        addOne: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
        FindAll: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
        Update: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
        Delete: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    };
};
export declare type commissionType = {
    Global: typeof globalCommission;
    Product: typeof productsCommission;
    Category: typeof categoryCommission;
    Store: typeof storeCommission;
};
export {};
