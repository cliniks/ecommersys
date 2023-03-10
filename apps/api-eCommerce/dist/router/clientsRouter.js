"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientsRouter = void 0;
const express_1 = require("express");
const ClientUseCases_1 = require("../useCases/ClientUseCases");
const ClientsRouter = (0, express_1.Router)();
exports.ClientsRouter = ClientsRouter;
ClientsRouter.get("/myClients", ClientUseCases_1.ClientUseCases.getMyStoreClients);
