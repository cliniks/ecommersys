import { PaymentMethodType } from "../../Entities/paymentMethod.entitie";
import { Either } from "../../Errors";
import { tokenizeType } from "../../Entities/paymentMethod.entitie";
export declare const paymentMethodsMutations: {
    myUserCards: () => Promise<Either<paymentMethodsErrors, PaymentMethodType>>;
    mySellerCards: () => Promise<Either<paymentMethodsErrors, PaymentMethodType>>;
    updatePaymentMethods: (id: string, data: Partial<PaymentMethodType>) => Promise<Either<paymentMethodsErrors, PaymentMethodType>>;
    deletePaymentMethods: (id: string) => Promise<Either<paymentMethodsErrors, PaymentMethodType>>;
    addPaymentTokenCard: (data: tokenizeType) => Promise<Either<paymentMethodsErrors, PaymentMethodType>>;
};
export declare type paymentMethodsErrors = "Não foi possível encontrar método de pagamento" | "Não foi possível atualizar método de pagamento";
