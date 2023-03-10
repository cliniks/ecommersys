import { Request, Response } from "express";
import { ISalesRepository } from "../../../repositories/Interfaces";
import { Product } from "../../../entities";
export declare const createPayment2: (req: Request, res: Response, repo: ISalesRepository) => Promise<void>;
export declare type ProductMapped = {
    product: Partial<Product>;
    productId: string;
    amount: number;
    couponApplied: string;
    discountValue: number;
    totalValue: number;
};
