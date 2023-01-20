import { Request, Response } from "express";
export declare const usersUseCases: {
    FindOne: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    getMyUser: (req: Request, res: Response) => Promise<void>;
    FindAll: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    newUser: (req: Request, res: Response) => Promise<void>;
    updateImage: (req: Request, res: Response) => Promise<void>;
    updateUserInfo: (req: Request, res: Response) => Promise<void>;
    Update: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    Delete: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    createEmailToken: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    confirmEmailToken: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    seeProduct: (req: Request, res: Response) => Promise<void>;
};
