import mongoose from "mongoose";

const createConnection = (
  dbName: string,
  host: string = `${process.env.MONGO_DB_CONNECTION}`
) => {
  host;
  // const url =
  //   process.env.RELEASE === "development"
  //     ? process.env.MONGO_DB_CONNECTION
  //     : host;
  // return mongoose.createConnection(`${url}`, {
  //   dbName: dbName,
  // });
  return mongoose.createConnection(`${process.env.MONGO_DB_CONNECTION}`, {
    dbName: dbName,
  });
};

export class ConnectRepo {
  public users = createConnection("users_db");
  public address = createConnection("address_db");
  public evaluations = createConnection("evaluations_db");
  public sellers = createConnection("sellers_db");
  public sellersPolicies = createConnection("sellerPolicies_db");
  public sellerSolicitations = createConnection("sellerSolicitations_db");
  public orders = createConnection("orders_db");
  public carts = createConnection("carts_db");
  public products = createConnection("products_db");
  public coupons = createConnection("coupons_db");
  public categories = createConnection("categories_db");
  public wallets = createConnection("wallets_db");
  public walletsHistory = createConnection("walletsHistory_db");

  public gatewayPagDB = {
    orders: createConnection(
      "orders_db",
      process.env.MONGO_GATEWAYPAG_CONNECTION
    ),
    history: createConnection(
      "history_db",
      process.env.MONGO_GATEWAYPAG_CONNECTION
    ),
    logs: createConnection("logs_db", process.env.MONGO_GATEWAYPAG_CONNECTION),
  };
  public logisticsDB = {
    orders: createConnection(
      "orders_db",
      process.env.MONGO_LOGISTICS_CONNECTION
    ),
    history: createConnection(
      "history",
      process.env.MONGO_LOGISTICS_CONNECTION
    ),
    logs: createConnection("logs_db", process.env.MONGO_LOGISTICS_CONNECTION),
  };
  public chatDB = {
    rooms: createConnection(
      "rooms_db",
      `${process.env.MONGO_CHATDB_CONNECTION}`
    ),
    chats: createConnection(
      "chats_db",
      `${process.env.MONGO_CHATDB_CONNECTION}`
    ),
    messages: createConnection(
      "messages_db",
      `${process.env.MONGO_CHATDB_CONNECTION}`
    ),
    logs: createConnection("logs_db", `${process.env.MONGO_CHATDB_CONNECTION}`),
  };
  public notifyDB = {
    notify: createConnection(
      "notify_db",
      `${process.env.MONGO_NOTIFY_CONNECTION}`
    ),
  };
}
