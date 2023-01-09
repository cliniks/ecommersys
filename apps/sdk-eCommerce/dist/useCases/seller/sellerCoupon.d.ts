import { Coupon } from "../../Entities";
import { Response } from "../../Errors";
import { ISellerDashboardCoupon, getAllProps, getAllReturn } from "../../interfaces";
import { couponErrors } from "../../services/mutations/coupon";
export declare class sellerCoupon implements ISellerDashboardCoupon {
    getSingle(key: string, value: string): Promise<Response<couponErrors, Coupon>>;
    getMyCoupons(props: getAllProps): Promise<Response<couponErrors, getAllReturn<Coupon>>>;
    create(data: Coupon): Promise<Response<couponErrors, Coupon>>;
    update(couponId: string, data: Partial<Coupon>): Promise<Response<couponErrors, Coupon>>;
    utilize(couponId: string): Promise<Response<couponErrors, Coupon>>;
    cancel(couponId: string): Promise<Response<couponErrors, Coupon>>;
}
