import { Product, Store } from "../Entities";
import { Response } from "../Errors";
import { productErrors, sellerErrors } from "../services";
import { EmailSenderErrors } from "../services/mutations/emailSender";

export interface IGlobal {
  products: IGlobalProducts;
  sellers: IGlobalSellers;
  emailSender: IGlobalEmailSender;
  logs: ILog[];
}

export interface IGlobalProducts {
  getSingle(
    key: string,
    value: string
  ): Promise<Response<productErrors, Product>>;
  getAll(
    props: getAllProps
  ): Promise<Response<productErrors, getAllReturn<Product>>>;
}

export interface IGlobalEmailSender {
  sendEmailToken: (data: {
    email: string;
  }) => Promise<Response<EmailSenderErrors, any>>;
  confirmEmailToken: (data: {
    email: string;
    code: number;
  }) => Promise<Response<EmailSenderErrors, any>>;
}

export interface IGlobalSellers {
  getSingle(key: string, value: string): Promise<Response<sellerErrors, Store>>;
  getAll(
    props: getAllProps
  ): Promise<Response<sellerErrors, getAllReturn<Store>>>;
}

export interface ILog {
  message: string;
  updated: Object | String;
}

export type getAllProps = {
  page?: number;
  size?: number;
  filter?: filterProps;
};

export type filterProps = {
  key?: string;
  value?: any;
  fields?: string;
};

export type getAllReturn<t> = {
  results: t[];
  totalItems: number;
  pageSize: number;
  thisPage: number;
};
