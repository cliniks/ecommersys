import { Schema, Model as mongooseModel } from "mongoose";
import { createConnection } from "../ConnectRepo";
import {
  Address,
  AddressSchema,
  Cart,
  CartSchema,
  Category,
  CategorySchema,
  ChatSchema,
  ChatType,
  Coupon,
  CouponSchema,
  DocumentsSchema,
  DocumentsType,
  Evaluation,
  EvaluationSchema,
  GlobalCommissionSchema,
  CommissionType,
  MessageSchema,
  MessageType,
  Product,
  ProductSchema,
  RoomSchema,
  RoomType,
  Sales,
  SalesSchema,
  Store,
  StorePoliciesSchema,
  StorePolicy,
  StoreSchema,
  StoreSolicitate,
  StoreSolicitateSchema,
  User,
  UserSchema,
  StoreCommissionSchema,
  categoryCommissionType,
  productCommissionType,
  storeCommissionType,
  PaymentMethodScheema,
  PaymentMethodType,
  LeadSchema,
  LeadType,
  ProductCommissionSchema,
  CategoryCommissionSchema,
  notificationTypes,
  NotificationSchema,
} from "../../entities";
import { OrderSchema, OrderType } from "../../entities/order.entitie";

class Model<E> {
  public model: mongooseModel<E>;
  constructor(tableName: string, schema: Schema, db?: string) {
    this.connectRepo(tableName, schema, db);
  }

  async connectRepo(dbName: string, schema: Schema, db: string = "users") {
    const repository = createConnection(db);
    this.model = repository.model<E>(dbName, schema);
  }
}

export const addressModel = new Model<Address>("addresses", AddressSchema)
  .model;

export const userModel = new Model<User>("users", UserSchema).model;

export const leadsModel = new Model<LeadType>("lead", LeadSchema).model;

export const paymentMethodModel = new Model<PaymentMethodType>(
  "paymentMethods",
  PaymentMethodScheema
).model;

export const cartModel = new Model<Cart>("carts", CartSchema).model;

export const categoryModel = new Model<Category>(
  "categories",
  CategorySchema,
  "admin_db"
).model;

export const chatModel = new Model<ChatType>("chats", ChatSchema, "chats")
  .model;

export const roomModel = new Model<RoomType>("rooms", RoomSchema, "chats")
  .model;

export const messageModel = new Model<MessageType>(
  "messages",
  MessageSchema,
  "chats"
).model;

export const couponModel = new Model<Coupon>("coupons", CouponSchema, "stores")
  .model;

export const documentModel = new Model<DocumentsType>(
  "documents",
  DocumentsSchema
).model;

export const evaluationModel = new Model<Evaluation>(
  "evaluations",
  EvaluationSchema,
  "products"
).model;

export const notifyModel = new Model<notificationTypes>(
  "notifications",
  NotificationSchema,
  "notifications"
).model;

// export const gatewayPagModel = new Model("payments",);

export const productModel = new Model<Product>(
  "products",
  ProductSchema,
  "products"
).model;

export const salesModel = new Model<Sales>("sales", SalesSchema, "stores")
  .model;

export const storePolicyModel = new Model<StorePolicy>(
  "storePolicies",
  StorePoliciesSchema,
  "stores"
).model;

export const globalCommissionModel = new Model<CommissionType>(
  "globalCommissions",
  GlobalCommissionSchema,
  "admin_db"
).model;

export const storeCommissionsModel = new Model<storeCommissionType>(
  "storeCommissions",
  StoreCommissionSchema,
  "admin_db"
).model;

export const productCommissionsModel = new Model<productCommissionType>(
  "productCommissions",
  ProductCommissionSchema,
  "admin_db"
).model;

export const categoryCommissionsModel = new Model<categoryCommissionType>(
  "categoryCommissions",
  CategoryCommissionSchema,
  "admin_db"
).model;

export const storeSolicitationModel = new Model<StoreSolicitate>(
  "storeSolicitations",
  StoreSolicitateSchema,
  "admin_db"
).model;

export const storeModel = new Model<Store>("store", StoreSchema, "stores")
  .model;

export const orderModel = new Model<OrderType>("order", OrderSchema, "orders")
  .model;
