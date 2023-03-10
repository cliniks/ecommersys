import { Request, Response } from "express";
import { IUsersRepository } from "../../repositories/Interfaces";
export declare const newUser: (req: Request, res: Response, repository: IUsersRepository) => Promise<Response<any, Record<string, any>>>;
