import { Model } from "mongoose";
import { getAllProps, getOneProps } from "../Interfaces";
import { PaymentMethodType } from "../../entities/paymentMethod.entitie";
import { IPaymentMethods } from "../Interfaces/IPaymentMethodsRepository";
declare class PaymentMethodsImplementation implements IPaymentMethods {
    private model;
    private crud;
    constructor(model: Model<PaymentMethodType>);
    getOne: ({ key, value }: getOneProps) => Promise<PaymentMethodType>;
    getAll: (props: getAllProps) => Promise<import("../Interfaces").getAllReturn<PaymentMethodType>>;
    getMany: (ids: string[], fields?: string) => Promise<PaymentMethodType[]>;
    addOne: (data: PaymentMethodType) => Promise<PaymentMethodType>;
    update: (id: string, data: any) => Promise<PaymentMethodType>;
    delete: (id: string) => Promise<any>;
}
export default PaymentMethodsImplementation;
