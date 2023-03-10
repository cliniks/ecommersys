export interface ISellerCheckoutProvider {
  // Pré visualização de etiquetas
  previewTags(orders: string): Promise<any>;
  // Geração de etiquetas
  generateTag(orders: generateTagPropsType): Promise<any>;
  // Impressão de etiquetas
  printTag(orders: string): Promise<any>;
  // Pesquisar etiqueta
  searchTag(ID: string): Promise<any>;
  // Listar etiquetas
  listTags(status: string): Promise<any>;
  // Listar informações de uma etiqueta
  infoTag(orderID: string): Promise<any>;
  // Cancelamento de etiquetas
  cancelTag(order: string): Promise<any>;
  // Verificar se etiqueta pode ser cancelada
  verifyTag(orders: string): Promise<any>;
  // Pré visualização de lojas
  listStore(): Promise<any>;
  // Cadastra uma loja
  registerStore(dataLoja: string): Promise<any>;
  // Visualiza dados de uma loja
  previewStore(storeID: string): Promise<any>;
  // Salva endereço para uma loja
  saveAddress(storeID: string, data: string): Promise<any>;
  // Lista endereços
  listAddress(storeID: string): Promise<any>;
  // Salva telefone para uma loja
  savePhone(storeID: string, data: string): Promise<any>;
  // Faz upload imagem para loja
  uploadImageStore(storeID: string, data: any): Promise<any>;
}

export type generateTagPropsType = string[];
