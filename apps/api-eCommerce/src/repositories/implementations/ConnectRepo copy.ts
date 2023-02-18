import mongoose from "mongoose";

const createConnection = (
  dbName: string,
  host: string = `${process.env.MONGO_ATLAS_DB_CONNECTION}`
) => {
  // const url =
  //   process.env.RELEASE === "development"
  //     ? process.env.MONGO_DB_CONNECTION
  //     : host;
  // return mongoose.createConnection(`${url}`, {
  //   dbName: dbName,
  // });
  dbName;
  const connection = mongoose.createConnection(host);
  return connection;
};

export class ConnectRepo {
  public admin = createConnection("admin_db");
  public commission = createConnection("admin_db");
  public users = createConnection("users_db");
  public address = createConnection("address_db");
  public evaluations = createConnection("evaluations_db");
  public sellers = createConnection("sellers_db");
  public sellersPolicies = createConnection("sellers_db");
  public sellerSolicitations = createConnection("admin_db");
  public orders = createConnection("orders_db");
  public checkout = createConnection("checkout_db");
  public carts = createConnection("users_db");
  public products = createConnection("products_db");
  public documents = createConnection("documents_db");
  public coupons = createConnection("coupons_db");
  public categories = createConnection("admin_db");
  public wallets = createConnection("wallets_db");
  public walletsHistory = createConnection("walletsHistory_db");

  public gatewayPagDB = {
    orders: createConnection(
      "orders_db"
      // process.env.MONGO_GATEWAYPAG_CONNECTION
    ),
    history: createConnection(
      "history_db"
      // process.env.MONGO_GATEWAYPAG_CONNECTION
    ),
    // logs: createConnection("logs_db", process.env.MONGO_GATEWAYPAG_CONNECTION),
  };
  public logisticsDB = {
    orders: createConnection(
      "orders_db"
      // process.env.MONGO_LOGISTICS_CONNECTION
    ),
    history: createConnection(
      "history"
      // process.env.MONGO_LOGISTICS_CONNECTION
    ),
    // logs: createConnection("logs_db", process.env.MONGO_LOGISTICS_CONNECTION),
  };
  public chatDB = {
    rooms: createConnection(
      "rooms_db"
      // `${process.env.MONGO_CHATDB_CONNECTION}`
    ),
    chats: createConnection(
      "chats_db"
      // `${process.env.MONGO_CHATDB_CONNECTION}`
    ),
    messages: createConnection(
      "messages_db"
      // `${process.env.MONGO_CHATDB_CONNECTION}`
    ),
    // logs: createConnection("logs_db", `${process.env.MONGO_CHATDB_CONNECTION}`),
  };
  public notifyDB = {
    notify: createConnection(
      "notify_db"
      // `${process.env.MONGO_NOTIFY_CONNECTION}`
    ),
  };
}
