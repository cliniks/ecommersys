import { Cart } from "../../Entities";
import { Either } from "../../Errors";
export declare const cartMutations: {
    getMyCart: () => Promise<Either<cartErrors, Cart>>;
    insertProduct: (data: {
        productId: string;
        amount: string;
    }) => Promise<Either<cartErrors, Cart>>;
    removeProduct: (data: {
        productId: string;
        amount: number;
    }) => Promise<Either<cartErrors, Cart>>;
    insertCoupon: (couponId: String) => Promise<Either<cartErrors, Cart>>;
    removeCoupon: (couponId: String) => Promise<Either<cartErrors, Cart>>;
    insertAddress: (addressId: string) => Promise<Either<cartErrors, Cart>>;
    removeAddress: (addressId: string) => Promise<Either<cartErrors, Cart>>;
    clearMyCart: () => Promise<Either<cartErrors, Cart>>;
};
export declare type cartErrors = "Não foi possível achar o carrinho" | "Não foi possível adicionar o item ao carrinho" | "não foi possível remover item do carrinho" | "Não foi possível adicionar cupom" | "Não foi possível remover cupom" | "Não foi possível atualizar o endereço" | "Não foi possível remover endereço do carrinho" | "Não foi possível limpar dados do carrinho";
