import { Coupon } from "../../entities/coupon.entitie";
import { ICouponRepository } from "../Interfaces/ICouponRepository";
import { ConnectRepo } from "./ConnectRepo";
export declare class CouponRepository extends ConnectRepo implements ICouponRepository {
    private model;
    private crud;
    constructor();
    getOne: ({ key, value }: getOneProps) => Promise<any>;
    getAll: (props: getAllProps) => Promise<{
        result: any[];
        totalItems: number;
        pageSize: number;
        thisPage: number;
        totalPage: number;
    }>;
    addOne: (data: Coupon) => Promise<any>;
    update: (id: string, data: any) => Promise<any>;
    delete: (id: string) => Promise<any>;
}
