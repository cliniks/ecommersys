import { Request, Response } from "express";
export declare const get: (req: Request, res: Response, repository: any) => Promise<Response<any, Record<string, any>>>;
