import { Request, Response } from "express";
import { IDocumentRepository } from "../../repositories/Interfaces";
export declare const getMyDocuments: (req: Request, res: Response, repo: IDocumentRepository) => Promise<Response<any, Record<string, any>>>;
