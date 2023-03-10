import { Coupon } from "../../entities";
import { CouponsRepository } from "../../repositories";

const couponRepo = CouponsRepository;

export const fetchManyCoupons = async (
  idArray: string[],
  fields?: string
): Promise<Coupon[]> => {
  return await couponRepo.getMany(idArray, fields);
};
