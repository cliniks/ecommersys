export type StorePolicy = {
  _id?: string;
  name: string;
  body: string;
  owner: string;
  isActive: boolean;
  type: PolicyType;
  createdAt?: Date;
  updatedAt?: Date;
};

export type PolicyType = "devolution" | "payment" | "repayment" | "exchange";
