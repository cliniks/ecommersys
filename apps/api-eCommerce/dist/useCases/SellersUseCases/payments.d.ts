import { Request, Response } from "express";
export declare const getCards: (_: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getCard: (_: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const addCard: (_: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const updateCard: (_: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const deleteCard: (_: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const paymentsPageInfo: (_: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
