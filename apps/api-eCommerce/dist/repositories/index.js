"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRepository = exports.PaymentMethodRepository = exports.notifyRepository = exports.StoreSolicitationRepository = exports.StorePoliciesRepository = exports.SellersRepository = exports.SalesRepository = exports.ProductsRepository = exports.EvaluationRepository = exports.DocumentsRepository = exports.CouponsRepository = exports.MessagesRepository = exports.RoomsRepository = exports.ChatsRepository = exports.CategoriesRepository = exports.CartsRepository = exports.AdminCommissionRepository = exports.AddressesRepository = void 0;
const models_1 = require("./models");
const AddressImplementation_1 = __importDefault(require("./implementations/AddressImplementation"));
const CartsImplementation_1 = __importDefault(require("./implementations/CartsImplementation"));
const CategoryImplementation_1 = __importDefault(require("./implementations/CategoryImplementation"));
const CouponImplementations_1 = __importDefault(require("./implementations/CouponImplementations"));
const ChatsImplementation_1 = require("./implementations/ChatsImplementation");
const DocumentImplementation_1 = __importDefault(require("./implementations/DocumentImplementation"));
const EvaluationImplementation_1 = __importDefault(require("./implementations/EvaluationImplementation"));
const ProductsImplementation_1 = __importDefault(require("./implementations/ProductsImplementation"));
const SalesImplementation_1 = __importDefault(require("./implementations/SalesImplementation"));
const SellersImplementation_1 = __importDefault(require("./implementations/SellersImplementation"));
const StorePoliciesImplementation_1 = __importDefault(require("./implementations/StorePoliciesImplementation"));
const StoreSolicitateImplementation_1 = __importDefault(require("./implementations/StoreSolicitateImplementation"));
const UsersImplementation_1 = __importDefault(require("./implementations/UsersImplementation"));
const PaymentMethodsImplementation_1 = __importDefault(require("./implementations/PaymentMethodsImplementation"));
const AdminImplementation_1 = require("./implementations/AdminImplementation");
const NotifyImplementation_1 = require("./implementations/NotifyImplementation");
exports.AddressesRepository = new AddressImplementation_1.default(models_1.addressModel);
exports.AdminCommissionRepository = {
    globalCommission: new AdminImplementation_1.GlobalCommissionImplementation(models_1.globalCommissionModel),
    productsCommission: new AdminImplementation_1.ProductCommissionImplementation(models_1.productCommissionsModel),
    categoryCommission: new AdminImplementation_1.CategoryCommissionImplementation(models_1.categoryCommissionsModel),
    storeCommission: new AdminImplementation_1.StoreCommissionImplementation(models_1.storeCommissionsModel),
};
exports.CartsRepository = new CartsImplementation_1.default(models_1.cartModel);
exports.CategoriesRepository = new CategoryImplementation_1.default(models_1.categoryModel);
exports.ChatsRepository = new ChatsImplementation_1.ChatsImplementation(models_1.chatModel);
exports.RoomsRepository = new ChatsImplementation_1.RoomsImplementation(models_1.roomModel);
exports.MessagesRepository = new ChatsImplementation_1.MessagesImplementation(models_1.messageModel);
exports.CouponsRepository = new CouponImplementations_1.default(models_1.couponModel);
exports.DocumentsRepository = new DocumentImplementation_1.default(models_1.documentModel);
exports.EvaluationRepository = new EvaluationImplementation_1.default(models_1.evaluationModel);
exports.ProductsRepository = new ProductsImplementation_1.default(models_1.productModel);
exports.SalesRepository = new SalesImplementation_1.default(models_1.salesModel);
exports.SellersRepository = new SellersImplementation_1.default(models_1.storeModel);
exports.StorePoliciesRepository = new StorePoliciesImplementation_1.default(models_1.storePolicyModel);
exports.StoreSolicitationRepository = new StoreSolicitateImplementation_1.default(models_1.storeSolicitationModel);
exports.notifyRepository = new NotifyImplementation_1.NotifyImplementation(models_1.notifyModel);
exports.PaymentMethodRepository = new PaymentMethodsImplementation_1.default(models_1.paymentMethodModel);
exports.UsersRepository = new UsersImplementation_1.default(models_1.userModel);
__exportStar(require("./implementations/GatewayPagImplements"), exports);
__exportStar(require("./implementations/CrudRepo"), exports);
__exportStar(require("./implementations/S3Repository"), exports);
__exportStar(require("./implementations/RedisRepo"), exports);
__exportStar(require("./ConnectRepo"), exports);
