import { Request, Response } from "express";
export declare const getMany: (req: Request, res: Response, repository: any) => Promise<Response<any, Record<string, any>>>;
