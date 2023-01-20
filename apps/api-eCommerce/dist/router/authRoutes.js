"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
const express_1 = require("express");
const AuthUseCases_1 = require("../useCases/AuthUseCases");
const AuthRoutes = (0, express_1.Router)();
exports.AuthRoutes = AuthRoutes;
AuthRoutes.post("/", AuthUseCases_1.authUseCases.auth);
AuthRoutes.post("/verifyToken", AuthUseCases_1.authUseCases.verifyToken);
AuthRoutes.post("/createEmailToken", AuthUseCases_1.authUseCases.createEmailToken);
AuthRoutes.post("/confirmEmailToken", AuthUseCases_1.authUseCases.confirmEmailToken);
