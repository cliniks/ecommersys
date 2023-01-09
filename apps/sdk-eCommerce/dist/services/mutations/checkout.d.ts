import { Cart, Checkout } from "../../Entities";
import { Either } from "../../Errors";
export declare const checkoutMutations: {
    getSingle: (key: string, value: string) => Promise<Either<checkoutErrors, Checkout>>;
    generate: (orderId: string) => Promise<Either<checkoutErrors, Cart>>;
    createPayment: ({ type, value, checkoutId, }: {
        type: string;
        value: number;
        checkoutId: string;
    }) => Promise<Either<checkoutErrors, Cart>>;
    updatePayment: ({ type, value, checkoutId, }: {
        type: string;
        value: number;
        checkoutId: string;
    }) => Promise<Either<checkoutErrors, Cart>>;
    confirmPayment: (checkoutId: String) => Promise<Either<checkoutErrors, Cart>>;
    cancelOpen: (checkoutId: String) => Promise<Either<checkoutErrors, Cart>>;
};
export declare type checkoutErrors = "Não foi possível achar o checkout" | "Não foi possível gerar um novo checkout" | "Não foi possível criar pagamento" | "Não foi possível atualizar pagamento" | "Não foi possível confirmar pagamento" | "Não foi possível cancelar checkout";
