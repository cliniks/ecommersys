import { Request, Response } from "express";
export declare const getMyCoupons: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const createCoupon: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const deleteCoupon: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const updateCoupon: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
