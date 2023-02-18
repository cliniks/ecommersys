export interface ISellerCheckoutProvider {
  // Cria Customer
  addStore(store: any): Promise<any>;
  // Pré visualização de etiquetas
  confirmPayment(orders: string): Promise<any>;
  // Geração de etiquetas
  getAccount(): Promise<any>;
}
