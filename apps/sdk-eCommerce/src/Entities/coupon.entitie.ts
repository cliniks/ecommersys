export type Coupon = {
  _id?: string;
  name: string;
  assined: string[];
  description: string;
  type: "percentage" | "fixed" | "shipping"; //confrimar todos os tipos
  value: string;
  minValue: string;
  maxValue?: String;
  used: number;
  limitForUse: number;
  isCashBack: boolean;
  startDate?: Date;
  endDate?: Date;
  isActive?: boolean;
  isFreeShipping: boolean;
  owner: string;
  createdAt?: Date;
  updatedAt?: Date;
};
