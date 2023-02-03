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
  cpf: string;
  cnpj: string;
  cnae: string;
  enterpriseSocial: string;
  enterpriseName: string;
  address: string;
  number: string;
  phone: string;
  complement: string;
  birthDate: string;
  city: string;
  state: string;
  cep: string;
  email: string;
  otherAddress: string[];
};

export type userStatistics = {
  productsViews: string[];
};
