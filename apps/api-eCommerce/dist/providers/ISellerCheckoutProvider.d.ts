export interface ISellerCheckoutProvider {
    addStore(store: any): Promise<any>;
    confirmPayment(orders: string): Promise<any>;
    getAccount(): Promise<any>;
}
