"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mailSenderProvider = exports.sellerAssasProvider = exports.clientAssasProvider = void 0;
const ClientAsaasImplementation_1 = require("./implementations/ClientAsaasImplementation");
const SellerAsaasProvider_1 = require("./implementations/SellerAsaasProvider");
const MailSenderProvider_1 = require("./implementations/MailSenderProvider");
exports.clientAssasProvider = new ClientAsaasImplementation_1.ClientAsaasImplementation();
exports.sellerAssasProvider = new SellerAsaasProvider_1.SellerAsaasImplementation();
exports.mailSenderProvider = new MailSenderProvider_1.MailSenderProvider();
