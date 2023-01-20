import { NextFunction, Request, Response } from "express";
declare const verifyers: {
    verifyToken(req: Request, res: Response, next: NextFunction): Promise<void>;
    verifyAppToken(req: Request, res: Response, next: NextFunction): Promise<void>;
    verifySeller(req: Request, res: Response, next: NextFunction): Promise<void | Response<any, Record<string, any>>>;
    verifyThisSeller(req: Request, res: Response, next: NextFunction): Promise<void | Response<any, Record<string, any>>>;
    verifyProductOwner(req: Request, res: Response, next: NextFunction): Promise<void | Response<any, Record<string, any>>>;
    verifyAccountOwner(req: Request, res: Response, next: NextFunction): Promise<void | Response<any, Record<string, any>>>;
    verifyAdmin(req: Request, res: Response, next: NextFunction): Promise<void | Response<any, Record<string, any>>>;
};
export { verifyers };
