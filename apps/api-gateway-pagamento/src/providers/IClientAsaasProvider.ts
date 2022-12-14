import { UserModel, UserModelType } from "../models/user.model";
export interface IUserCheckoutProvider {
  // add a client
  newClient({ data }: { data: any }): Promise<any>;
  // update a client
  updateClient({ data, clientId }: { data: clientProps; clientId: string }): Promise<any>;
  // return clients
  listClients({ queryProps }: { queryProps: queryProps }): Promise<any>;
  // return one client
  getClient({ clientId }: { clientId: string }): Promise<any>;
  // generate a charge
  genCharge({ data, client, cartID }: { data: chargeType; client: UserModelType; cartID: string }): Promise<any>;
  // getCharge
  getCharge({ client, chargeId }: { client: UserModelType; chargeId: string }): Promise<any>;
  // generate a credicard charge
  genCreditCardCharge({ data, creditcard }: { data: chargeType; creditcard: creditCardChargeType }): Promise<any>;
  // generate a pix code
  genPixCode({ id }: { id: string }): Promise<any>; // Ao gerar uma cobrança com as formas de pagamento "PIX", "BOLETO" ou "UNDEFINED" o pagamento via Pix é habilitado.
  // adicionar banco para recebimento
  registerBank(): Promise<any>;
  // adicionar pix para recebimento
  registerPixCode(): Promise<any>;
}

export type queryProps = {
  name?: string;
  email?: string;
  cpfCnpj?: string;
  groupName?: string;
  externalReference?: string;
  offset?: string;
  limit?: string;
};

export type clientProps = {
  name?: string;
  email?: string;
  phone?: string;
  mobilePhone?: string;
  cpfCnpj?: string;
  postalCode?: string;
  address?: string;
  addressNumber?: string;
  complement?: string;
  province?: string;
  externalReference?: string;
  notificationDisabled?: boolean;
  additionalEmails?: string;
  municipalInscription?: string;
  stateInscription?: string;
  observations?: string;
};

export type chargeType = {
  customer: string; // Identificador único do cliente no Asaas
  billingType: "BOLETO" | "CREDIT_CARD" | "PIX" | "UNDEFINED";
  dueDate: Date; // Data de vencimento da cobrança
  value: number; // Valor da cobrança
  description: string; // Descrição da cobrança (máx. 500 caracteres)
  externalReference?: string; // Campo livre para busca
  installmentCount?: number; // numero de parcela
  installmentValue?: number; // valor de cada parcela
  discount?: {
    //Informações de desconto
    value?: number; // Valor percentual ou fixo de desconto a ser aplicado sobre o valor da cobrança
    dueDateLimitDays?: number; // Dias antes do vencimento para aplicar desconto. Ex: 0 = até o vencimento, 1 = até um dia antes, 2 = até dois dias antes, e assim por diante
    type?: "FIXED" | "PERCENTAGE";
  };
  interest?: {
    // Informações de juros para pagamento após o vencimento
    value?: number; // Percentual de juros ao mês sobre o valor da cobrança para pagamento após o vencimento
  };
  fine?: {
    // Informações de multa para pagamento após o vencimento
    value?: number; // Informações de multa para pagamento após o vencimento
  };
  postalService?: boolean; // Define se a cobrança será enviada via Correios
  split?: splitObj[];
};

export type creditCardChargeType = {
  creditCard: {
    holderName: string; // Nome impresso no cartão
    number: string; // Número do cartão
    expiryMonth: string; // Mês de expiração (ex: 06)
    expiryYear: string; // Ano de expiração com 4 dígitos (ex: 2019)
    ccv: string; // Código de segurança
  };
  creditCardHolderInfo: {
    name: string;
    email: string;
    cpfCnpj: string;
    postalCode: string;
    addressNumber: string;
    addressComplement?: string;
    phone: string;
    mobilePhone?: string;
  };
  creditCardToken?: string; // Token do cartão de crédito para uso da funcionalidade de tokenização de cartão de crédito
  remoteIp: string; // IP de onde o cliente está fazendo a compra. Não deve ser informado o IP do seu servidor.
};

type splitObj = {
  walletId: string;
  fixedValue?: number;
  percentualValue?: number;
};
