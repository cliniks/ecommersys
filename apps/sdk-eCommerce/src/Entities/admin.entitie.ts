export type CommissionType = {
  _id?: string;
  commissionType: "percentage" | "fixed+percentage" | "fixed";
  percentage: Number;
  fixed: Number;
  scalable: { percentage: Number; fixed: Number }[];
  updatedAt?: Date;
  createdAt?: Date;
};

export type GlobalCommissionType = {
  global: CommissionType;
  categories: CommissionType & { categoryId: String };
};
