import { Coupon } from "../../Entities";
import { Response } from "../../Errors";
import {
  ISellerDashboardCoupon,
  getAllProps,
  getAllReturn,
} from "../../interfaces";
import { sellerMutations } from "../../services";
import { couponErrors, couponMutation } from "../../services/mutations/coupon";
import { Try } from "../../utils";

export class sellerCoupon implements ISellerDashboardCoupon {
  async getSingle(
    key: string,
    value: string
  ): Promise<Response<couponErrors, Coupon>> {
    return await Try(couponMutation.getSingle, key, value);
  }
  async getMyCoupons(
    props: getAllProps
  ): Promise<Response<couponErrors, getAllReturn<Coupon>>> {
    return await Try(sellerMutations.getMyCoupons, props);
  }

  async create(data: Coupon): Promise<Response<couponErrors, Coupon>> {
    return await Try(couponMutation.createCoupon, data);
  }
  async update(
    couponId: string,
    data: Partial<Coupon>
  ): Promise<Response<couponErrors, Coupon>> {
    return await Try(couponMutation.updateCoupon, couponId, data);
  }
  async utilize(couponId: string): Promise<Response<couponErrors, Coupon>> {
    return await Try(couponMutation.utilizeCoupon, couponId);
  }
  async cancel(couponId: string): Promise<Response<couponErrors, Coupon>> {
    return await Try(couponMutation.cancelCoupon, couponId);
  }
}
