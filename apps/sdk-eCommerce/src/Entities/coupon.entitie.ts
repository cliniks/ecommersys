export type Coupon = {
  _id?: string;
  assined: string[];
  description: string;
  type: "percentage" | "fixed" | "shipping"; //confrimar todos os tipos
  value: string;
  minimunValue: string;
  maximunValue?: String;
  used: number;
  limitForUse: number;
  isCashBack: boolean;
  startDate: Date;
  endDate?: Date;
  isActive: boolean;
  isFreeShipping: boolean;
  owner: string;
  register?: Date;
};
