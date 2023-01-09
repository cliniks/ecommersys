export type User = {
  _id?: string;
  username: string;
  password: string;
  wallet: string;
  img: string;
  userInfo: UserInfo;
  myOrders: string[];
  buysUnderProcess: string[];
  myBuys: string[];
  melhorEnvioID: string;
  gatewayPagId: string;
  wishList: string[];
  favorites: string[];
  likes: string[];
  messages: string[];
  cart: string[];
  storeId: string;
  storeData: {};
  access: number;
  orders: number;
  register?: Date;
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
};
