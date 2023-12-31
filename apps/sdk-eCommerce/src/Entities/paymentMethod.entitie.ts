export type PaymentType = "credit" | "debit" | "all";

export type PaymentMethodType = {
  _id?: string;
  owner: string;
  creditCardNumber: string;
  creditCardBrand: string;
  creditCardToken: string;
  paymentType: PaymentType;
  isActive: boolean;
  createdAt?: Date;
  updatedAt?: Date;
};

export type TokenCard = {
  creditCardNumber: string;
  creditCardBrand: string;
  creditCardToken: string;
};

export type tokenizeType = {
  customer: string;
  creditCard: {
    holderName: string;
    number: string;
    expiryMonth: string;
    expiryYear: string;
    ccv: string;
  };
  creditCardHolderInfo: {
    name: string;
    email: string;
    cpfCnpj: string;
    postalCode: string;
    addressNumber: string;
    addressComplement: string;
    phone: string;
    mobilePhone: string;
  };
};
