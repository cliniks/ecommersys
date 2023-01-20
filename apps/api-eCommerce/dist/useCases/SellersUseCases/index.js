"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sellersUseCases = void 0;
const SellersRepository_1 = require("../../repositories/implementations/SellersRepository");
const add_1 = require("../CrudUseCases/add");
const delete_1 = require("../CrudUseCases/delete");
const get_1 = require("../CrudUseCases/get");
const getAll_1 = require("../CrudUseCases/getAll");
const update_1 = require("../CrudUseCases/update");
const coupon_1 = require("./coupon");
const dashboardStats_1 = require("./dashboardStats");
const payments_1 = require("./payments");
const getMyStore_1 = require("./getMyStore");
const getMyProducts_1 = require("./getMyProducts");
const getMyCategories_1 = require("./getMyCategories");
const updateStoreImage_1 = require("./updateStoreImage");
const updateStoreBanner_1 = require("./updateStoreBanner");
const sellersRepo = new SellersRepository_1.SellersRepository();
exports.sellersUseCases = {
    FineOne: async (req, res) => await (0, get_1.get)(req, res, sellersRepo),
    FindAll: async (req, res) => await (0, getAll_1.getAll)(req, res, sellersRepo),
    Add: async (req, res) => await (0, add_1.add)(req, res, sellersRepo),
    Update: async (req, res) => await (0, update_1.update)(req, res, sellersRepo),
    Delete: async (req, res) => await (0, delete_1.del)(req, res, sellersRepo),
    DashboardStats: async (req, res) => await (0, dashboardStats_1.dashboardStats)(req, res /*sellersRepo*/),
    getMyCoupons: async (req, res) => await (0, coupon_1.getMyCoupons)(req, res),
    getMyStore: async (req, res) => await (0, getMyStore_1.getMyStore)(req, res, sellersRepo),
    getMyProducts: async (req, res) => await (0, getMyProducts_1.getMyProducts)(req, res),
    getMyCategories: async (req, res) => await (0, getMyCategories_1.getMyCategories)(req, res),
    updateStoreImage: async (req, res) => await (0, updateStoreImage_1.updateStoreImage)(req, res, sellersRepo),
    updateStoreBanner: async (req, res) => await (0, updateStoreBanner_1.updateStoreBanner)(req, res, sellersRepo),
    GetCards: async (req, res) => await (0, payments_1.getCards)(req, res /*sellersRepo*/),
    GetCard: async (req, res) => await (0, payments_1.getCard)(req, res /*sellersRepo*/),
    AddCard: async (req, res) => await (0, payments_1.addCard)(req, res /*sellersRepo*/),
    UpdateCard: async (req, res) => await (0, payments_1.updateCard)(req, res /*sellersRepo*/),
    DeleteCard: async (req, res) => await (0, payments_1.deleteCard)(req, res /*sellersRepo*/),
    GetPaymentsPageInfo: async (req, res) => await (0, payments_1.paymentsPageInfo)(req, res /*sellersRepo*/),
};
