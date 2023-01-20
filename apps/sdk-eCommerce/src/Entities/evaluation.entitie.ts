export type Evaluation = {
  _id?: string;
  productId: string;
  isActive?: boolean;
  stars: number;
  owner: string;
  createdAt?: Date;
  updatedAt?: Date;
};
