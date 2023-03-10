import { Request, Response } from "express";
export declare const getMyUserNotifications: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getMySellerNotifications: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getMyGlobalNotifications: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
