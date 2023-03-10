import { Request, Response } from "express";
export declare const createUserAddress: (req: Request, res: Response, repository: any) => Promise<Response<any, Record<string, any>>>;
export declare const createStoreAddress: (req: Request, res: Response, repository: any) => Promise<Response<any, Record<string, any>>>;
