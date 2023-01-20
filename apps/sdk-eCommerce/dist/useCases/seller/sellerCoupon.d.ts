import { Coupon } from "../../Entities";
import { Response } from "../../Errors";
import { ISellerDashboardCoupon, getAllProps, getAllReturn, getSingleProps } from "../../interfaces";
import { couponErrors } from "../../services/mutations/coupon";
export declare class sellerCoupon implements ISellerDashboardCoupon {
    getSingle(props: getSingleProps): Promise<Response<couponErrors, Coupon>>;
    getMyCoupons(props: getAllProps): Promise<Response<couponErrors, getAllReturn<Coupon>>>;
    create(data: Coupon): Promise<Response<couponErrors, Coupon>>;
    update(props: {
        couponId: string;
        data: Partial<Coupon>;
    }): Promise<Response<couponErrors, Coupon>>;
    utilize(props: {
        couponId: string;
    }): Promise<Response<couponErrors, Coupon>>;
    cancel(props: {
        couponId: string;
    }): Promise<Response<couponErrors, Coupon>>;
}
