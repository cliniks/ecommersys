export type HistoryData = {
  _id?: string;
  owner: string;
  description: string;
  in?: number;
  out?: number;
  orderId?: string;
  transactionId?: string;
  isActive?: boolean;
  operator: string;
  createdAt?: string;
  updateAt?: string;
};
