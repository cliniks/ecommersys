import { Coupon } from "../../Entities";
import { Either } from "../../Errors";
import { getAllProps, getAllReturn } from "../../interfaces";
export declare const couponMutation: {
    getSingle: ({ key, value, }: {
        key: string;
        value: string;
    }) => Promise<Either<couponErrors, Coupon>>;
    getMyCoupons: (props: getAllProps) => Promise<Either<couponErrors, getAllReturn<Coupon>>>;
    createCoupon: (data: Coupon) => Promise<Either<couponErrors, Coupon>>;
    updateCoupon: ({ couponId, data, }: {
        couponId: string;
        data: Partial<Coupon>;
    }) => Promise<Either<couponErrors, Coupon>>;
    utilizeCoupon: ({ couponId, }: {
        couponId: String;
    }) => Promise<Either<couponErrors, Coupon>>;
    cancelCoupon: (couponId: String) => Promise<Either<couponErrors, Coupon>>;
};
export declare type couponErrors = "Não foi possível achar o cupom" | "Não foi possível gerar um novo cupom" | "Não foi possível criar cupom" | "Não foi possível atualizar cupom" | "Não foi possível utilizar cupom" | "Não foi possível achar os cupons" | "Não foi possível cancelar cupom";
