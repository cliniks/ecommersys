export type User = {
  _id?: string;
  username: string;
  password: string;
  wallet: string;
  img: string;
  userInfo: userInfo;
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

export type userInfo = {
  name: string;
  lastName: string;
  cpf: string;
  cnpj: string;
  cnae: string;
  enterpriseSocial: string;
  personType: "juridica" | "fisica";
  enterpriseName: string;
  district: string;
  address: string;
  number: string;
  phone: string;
  complement: string;
  birthDate: string;
  country: string;
  city: string;
  state: string;
  zipCode: string;
  email: string;
  defaultAddress: String;
};

export type userStatistics = {
  productsViews: string[];
};
