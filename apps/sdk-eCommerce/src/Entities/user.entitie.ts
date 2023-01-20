export type User = {
  _id?: string;
  username: string;
  password: string;
  wallet: string;
  img: string;
  userInfo: UserInfo;
  melhorEnvioID: string;
  gatewayPagId: string;
  gatewayPagApiKey: string;
  wishList: string[];
  favorites: string[];
  likes: string[];
  storeId: string;
  statistics: userStatistics;
  isActive: boolean;
  access: 0 | 1 | 2 | 99;
  orders: number;
  createdAt?: Date;
  updatedAt?: Date;
};

export type UserInfo = {
  name: string;
  lastName: string;
  fone: string;
  cpf: string;
  address: string;
  number: Number;
  complement: string;
  city: string;
  state: string;
  cep: string;
  email: string;
  otherAddress: string[];
};

export type userStatistics = {
  productsViews: string[];
};
