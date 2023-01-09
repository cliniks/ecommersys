import { Cart, Checkout, Coupon } from "../../Entities";
import { Either } from "../../Errors";
import { getAllProps } from "../../interfaces";
export declare const couponMutation: {
    getSingle: (key: string, value: string) => Promise<Either<couponErrors, Checkout>>;
    getMyCoupons: (props: getAllProps) => Promise<Either<couponErrors, Coupon[]>>;
    createCoupon: (data: Coupon) => Promise<Either<couponErrors, Cart>>;
    updateCoupon: (couponId: string, data: Partial<Coupon>) => Promise<Either<couponErrors, Cart>>;
    utilizeCoupon: (couponId: String) => Promise<Either<couponErrors, Cart>>;
    cancelCoupon: (couponId: String) => Promise<Either<couponErrors, Cart>>;
};
export declare type couponErrors = "Não foi possível achar o cupom" | "Não foi possível gerar um novo cupom" | "Não foi possível criar cupom" | "Não foi possível atualizar cupom" | "Não foi possível utilizar cupom" | "Não foi possível achar as categorias" | "Não foi possível cancelar cupom";
