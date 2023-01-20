import { Coupon } from "../../Entities";
import { Response } from "../../Errors";
import {
  ISellerDashboardCoupon,
  getAllProps,
  getAllReturn,
  getSingleProps,
} from "../../interfaces";
import { sellerMutations } from "../../services";
import { couponErrors, couponMutation } from "../../services/mutations/coupon";
import { Try } from "../../utils";

export class sellerCoupon implements ISellerDashboardCoupon {
  async getSingle(
    props: getSingleProps
  ): Promise<Response<couponErrors, Coupon>> {
    return await Try(couponMutation.getSingle, props);
  }
  async getMyCoupons(
    props: getAllProps
  ): Promise<Response<couponErrors, getAllReturn<Coupon>>> {
    return await Try(sellerMutations.getMyCoupons, props);
  }

  async create(data: Coupon): Promise<Response<couponErrors, Coupon>> {
    return await Try(couponMutation.createCoupon, data);
  }
  async update(props: {
    couponId: string;
    data: Partial<Coupon>;
  }): Promise<Response<couponErrors, Coupon>> {
    return await Try(couponMutation.updateCoupon, props);
  }
  async utilize(props: {
    couponId: string;
  }): Promise<Response<couponErrors, Coupon>> {
    return await Try(couponMutation.utilizeCoupon, props);
  }
  async cancel(props: {
    couponId: string;
  }): Promise<Response<couponErrors, Coupon>> {
    return await Try(couponMutation.cancelCoupon, props);
  }
}
