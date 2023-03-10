import { Model } from "mongoose";
import { Coupon } from "../../entities";
import { ICouponRepository, getAllProps, getOneProps } from "../Interfaces";
declare class CouponImplementation implements ICouponRepository {
    private model;
    private crud;
    constructor(model: Model<Coupon>);
    getOne: ({ key, value, fields }: getOneProps) => Promise<Coupon>;
    getAll: (props: getAllProps) => Promise<import("../Interfaces").getAllReturn<Coupon>>;
    getMany: (ids: string[], fields?: string) => Promise<Coupon[]>;
    addOne: (data: Coupon) => Promise<Coupon>;
    update: (id: string, data: any) => Promise<Coupon>;
    delete: (id: string) => Promise<any>;
}
export default CouponImplementation;
