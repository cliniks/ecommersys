import { Request, Response } from "express";
export declare const usersUseCases: {
    FindOne: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    FindMany: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    getMyUser: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    FindAll: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    newUser: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    updateImage: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    updateUserInfo: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    Update: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    Delete: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    createEmailToken: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    confirmEmailToken: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    seeProduct: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
};
