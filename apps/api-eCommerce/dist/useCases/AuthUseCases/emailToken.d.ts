import { Request, Response } from "express";
export declare const createEmailToken: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const confirmEmailToken: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
