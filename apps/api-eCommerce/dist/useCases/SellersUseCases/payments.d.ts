import { Request, Response } from "express";
export declare const getCards: (_: Request, res: Response) => Promise<void>;
export declare const getCard: (_: Request, res: Response) => Promise<void>;
export declare const addCard: (_: Request, res: Response) => Promise<void>;
export declare const updateCard: (_: Request, res: Response) => Promise<void>;
export declare const deleteCard: (_: Request, res: Response) => Promise<void>;
export declare const paymentsPageInfo: (_: Request, res: Response) => Promise<void>;
