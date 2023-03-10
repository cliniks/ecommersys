"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectRepo = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const createConnection = (dbName, host = `${process.env.MONGO_ATLAS_DB_CONNECTION}`) => {
    // const url =
    //   process.env.RELEASE === "development"
    //     ? process.env.MONGO_DB_CONNECTION
    //     : host;
    // return mongoose.createConnection(`${url}`, {
    //   dbName: dbName,
    // });
    dbName;
    const connection = mongoose_1.default.createConnection(host);
    return connection;
};
class ConnectRepo {
    constructor() {
        this.admin = createConnection("admin_db");
        this.commission = createConnection("admin_db");
        this.users = createConnection("users_db");
        this.address = createConnection("address_db");
        this.evaluations = createConnection("evaluations_db");
        this.sellers = createConnection("sellers_db");
        this.sellersPolicies = createConnection("sellers_db");
        this.sellerSolicitations = createConnection("admin_db");
        this.orders = createConnection("orders_db");
        this.checkout = createConnection("checkout_db");
        this.carts = createConnection("users_db");
        this.products = createConnection("products_db");
        this.documents = createConnection("documents_db");
        this.coupons = createConnection("coupons_db");
        this.categories = createConnection("admin_db");
        this.wallets = createConnection("wallets_db");
        this.walletsHistory = createConnection("walletsHistory_db");
        this.gatewayPagDB = {
            orders: createConnection("orders_db"
            // process.env.MONGO_GATEWAYPAG_CONNECTION
            ),
            history: createConnection("history_db"
            // process.env.MONGO_GATEWAYPAG_CONNECTION
            ),
            // logs: createConnection("logs_db", process.env.MONGO_GATEWAYPAG_CONNECTION),
        };
        this.logisticsDB = {
            orders: createConnection("orders_db"
            // process.env.MONGO_LOGISTICS_CONNECTION
            ),
            history: createConnection("history"
            // process.env.MONGO_LOGISTICS_CONNECTION
            ),
            // logs: createConnection("logs_db", process.env.MONGO_LOGISTICS_CONNECTION),
        };
        this.chatDB = {
            rooms: createConnection("rooms_db"
            // `${process.env.MONGO_CHATDB_CONNECTION}`
            ),
            chats: createConnection("chats_db"
            // `${process.env.MONGO_CHATDB_CONNECTION}`
            ),
            messages: createConnection("messages_db"
            // `${process.env.MONGO_CHATDB_CONNECTION}`
            ),
            // logs: createConnection("logs_db", `${process.env.MONGO_CHATDB_CONNECTION}`),
        };
        this.notifyDB = {
            notify: createConnection("notify_db"
            // `${process.env.MONGO_NOTIFY_CONNECTION}`
            ),
        };
    }
}
exports.ConnectRepo = ConnectRepo;
