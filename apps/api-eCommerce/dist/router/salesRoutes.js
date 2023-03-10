"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesRoutes = void 0;
const express_1 = require("express");
// import { verifyers } from "../middlewares/verifyers";
const SalesUseCases_1 = require("../useCases/SalesUseCases");
const SalesRoutes = (0, express_1.Router)();
exports.SalesRoutes = SalesRoutes;
SalesRoutes.get("/", SalesUseCases_1.salesUseCases.FineOne);
SalesRoutes.get("/all", SalesUseCases_1.salesUseCases.FindAll);
// SalesRoutes.post("/", salesUseCases.Add);
SalesRoutes.patch("/:id", SalesUseCases_1.salesUseCases.Update);
SalesRoutes.delete("/:id", SalesUseCases_1.salesUseCases.Delete);
SalesRoutes.post("/genPayment", SalesUseCases_1.salesUseCases.Add);
