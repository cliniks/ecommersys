"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentMethodUseCases = void 0;
const delete_1 = require("../CrudUseCases/delete");
const get_1 = require("../CrudUseCases/get");
const getAll_1 = require("../CrudUseCases/getAll");
const update_1 = require("../CrudUseCases/update");
const repositories_1 = require("../../repositories");
const addPaymentMethod_1 = require("./addPaymentMethod");
const getMyCards_1 = require("./getMyCards");
const paymentMethods = repositories_1.PaymentMethodRepository;
exports.paymentMethodUseCases = {
    FindSingle: async (req, res) => await (0, get_1.get)(req, res, paymentMethods),
    FindAll: async (req, res) => await (0, getAll_1.getAll)(req, res, paymentMethods),
    myUserCards: async (req, res) => await (0, getMyCards_1.myUserCards)(req, res, paymentMethods),
    mySellerCards: async (req, res) => await (0, getMyCards_1.mySellerCards)(req, res, paymentMethods),
    Update: async (req, res) => await (0, update_1.update)(req, res, paymentMethods),
    Delete: async (req, res) => await (0, delete_1.del)(req, res, paymentMethods),
    AddPaymentMethod: async (req, res) => await (0, addPaymentMethod_1.AddPaymentMethod)(req, res, paymentMethods),
    DeletePaymentMethod: async (req, res) => await (0, delete_1.del)(req, res, paymentMethods),
};
