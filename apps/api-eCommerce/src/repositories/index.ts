import {
  addressModel,
  cartModel,
  categoryModel,
  chatModel,
  couponModel,
  documentModel,
  evaluationModel,
  messageModel,
  paymentMethodModel,
  productModel,
  roomModel,
  salesModel,
  storeModel,
  storePolicyModel,
  storeSolicitationModel,
  userModel,
} from "./models";

import AddressImplementation from "./implementations/AddressImplementation";

import CartsImplementation from "./implementations/CartsImplementation";

import CategoryImplementation from "./implementations/CategoryImplementation";

import CouponImplementation from "./implementations/CouponImplementations";

import {
  ChatsImplementation,
  MessagesImplementation,
  RoomsImplementation,
} from "./implementations/ChatsImplementation";

import DocumentImplementation from "./implementations/DocumentImplementation";

import EvaluationImplementation from "./implementations/EvaluationImplementation";

import ProductsImplementation from "./implementations/ProductsImplementation";

import SalesImplementation from "./implementations/SalesImplementation";

import SellersImplementation from "./implementations/SellersImplementation";

import StorePoliciesImplementation from "./implementations/StorePoliciesImplementation";

import StoreSolicitateImplementation from "./implementations/StoreSolicitateImplementation";

import UsersImplementation from "./implementations/UsersImplementation";
import PaymentMethodsImplementation from "./implementations/PaymentMethodsImplementation";

export const AddressesRepository = new AddressImplementation(addressModel);

export const CartsRepository = new CartsImplementation(cartModel);

export const CategoriesRepository = new CategoryImplementation(categoryModel);

export const ChatsRepository = new ChatsImplementation(chatModel);

export const RoomsRepository = new RoomsImplementation(roomModel);

export const MessagesRepository = new MessagesImplementation(messageModel);

export const CouponsRepository = new CouponImplementation(couponModel);

export const DocumentsRepository = new DocumentImplementation(documentModel);

export const EvaluationRepository = new EvaluationImplementation(
  evaluationModel
);

export const ProductsRepository = new ProductsImplementation(productModel);

export const SalesRepository = new SalesImplementation(salesModel);

export const SellersRepository = new SellersImplementation(storeModel);

export const StorePoliciesRepository = new StorePoliciesImplementation(
  storePolicyModel
);

export const StoreSolicitationRepository = new StoreSolicitateImplementation(
  storeSolicitationModel
);

export const PaymentMethodRepository = new PaymentMethodsImplementation(
  paymentMethodModel
);

export const UsersRepository = new UsersImplementation(userModel);

export * from "./implementations/GatewayPagImplements";

export * from "./implementations/CrudRepo";

export * from "./implementations/S3Repository";

export * from "./implementations/RedisRepo";

export * from "./ConnectRepo";
