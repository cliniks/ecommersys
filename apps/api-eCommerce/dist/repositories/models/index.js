"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeModel = exports.storeSolicitationModel = exports.categoryCommissionsModel = exports.productCommissionsModel = exports.storeCommissionsModel = exports.globalCommissionModel = exports.storePolicyModel = exports.salesModel = exports.productModel = exports.notifyModel = exports.evaluationModel = exports.documentModel = exports.couponModel = exports.messageModel = exports.roomModel = exports.chatModel = exports.categoryModel = exports.cartModel = exports.paymentMethodModel = exports.leadsModel = exports.userModel = exports.addressModel = void 0;
const ConnectRepo_1 = require("../ConnectRepo");
const entities_1 = require("../../entities");
class Model {
    constructor(tableName, schema, db) {
        this.connectRepo(tableName, schema, db);
    }
    async connectRepo(dbName, schema, db = "users") {
        const repository = (0, ConnectRepo_1.createConnection)(db);
        this.model = repository.model(dbName, schema);
    }
}
exports.addressModel = new Model("addresses", entities_1.AddressSchema)
    .model;
exports.userModel = new Model("users", entities_1.UserSchema).model;
exports.leadsModel = new Model("lead", entities_1.LeadSchema).model;
exports.paymentMethodModel = new Model("paymentMethods", entities_1.PaymentMethodScheema).model;
exports.cartModel = new Model("carts", entities_1.CartSchema).model;
exports.categoryModel = new Model("categories", entities_1.CategorySchema, "admin_db").model;
exports.chatModel = new Model("chats", entities_1.ChatSchema, "chats")
    .model;
exports.roomModel = new Model("rooms", entities_1.RoomSchema, "chats")
    .model;
exports.messageModel = new Model("messages", entities_1.MessageSchema, "chats").model;
exports.couponModel = new Model("coupons", entities_1.CouponSchema, "stores")
    .model;
exports.documentModel = new Model("documents", entities_1.DocumentsSchema).model;
exports.evaluationModel = new Model("evaluations", entities_1.EvaluationSchema, "products").model;
exports.notifyModel = new Model("notifications", entities_1.NotificationSchema, "notifications").model;
// export const gatewayPagModel = new Model("payments",);
exports.productModel = new Model("products", entities_1.ProductSchema, "products").model;
exports.salesModel = new Model("sales", entities_1.SalesSchema, "stores")
    .model;
exports.storePolicyModel = new Model("storePolicies", entities_1.StorePoliciesSchema, "stores").model;
exports.globalCommissionModel = new Model("globalCommissions", entities_1.GlobalCommissionSchema, "admin_db").model;
exports.storeCommissionsModel = new Model("storeCommissions", entities_1.StoreCommissionSchema, "admin_db").model;
exports.productCommissionsModel = new Model("productCommissions", entities_1.ProductCommissionSchema, "admin_db").model;
exports.categoryCommissionsModel = new Model("categoryCommissions", entities_1.CategoryCommissionSchema, "admin_db").model;
exports.storeSolicitationModel = new Model("storeSolicitations", entities_1.StoreSolicitateSchema, "admin_db").model;
exports.storeModel = new Model("store", entities_1.StoreSchema, "stores")
    .model;
