import { ISellerCheckoutProvider } from "../ISellerCheckoutProvider";
export declare class SellerAsaasImplementation implements ISellerCheckoutProvider {
    constructor();
    addStore(store: any): Promise<any>;
    confirmPayment(orders: string): Promise<any>;
    getAccount(): Promise<{
        msg: string;
    }>;
}
