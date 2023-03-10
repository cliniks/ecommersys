import { Request, Response } from "express";
import { IAddressRepository } from "../../repositories/Interfaces";
export declare const getMyStoreAddress: (req: Request, res: Response, addresses: IAddressRepository) => Promise<Response<any, Record<string, any>>>;
export declare const getMyUserAddress: (req: Request, res: Response, addresses: IAddressRepository) => Promise<Response<any, Record<string, any>>>;
