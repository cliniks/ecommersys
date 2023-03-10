import { Request, Response } from "express";
import { CrudUseCases } from "../CrudUseCases";
import { Coupon } from "../../entities";
export declare const couponsUseCases: {
    FineOne: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    FindAll: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    findMany: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    Add: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    Update: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    Delete: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
};
declare class CouponUseCases extends CrudUseCases<Coupon> {
    constructor();
}
declare const _default: CouponUseCases;
export default _default;
