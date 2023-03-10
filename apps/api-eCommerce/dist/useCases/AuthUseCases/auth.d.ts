import { Request, Response } from "express";
export declare const auth: (req: Request, res: Response) => Promise<void>;
export declare const verifyAccountExistence: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
