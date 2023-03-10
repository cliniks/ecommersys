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
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouponsRouter = void 0;
const express_1 = require("express");
// import { verifyers } from "../middlewares/verifyers";
const CouponsUseCases_1 = __importStar(require("../useCases/CouponsUseCases"));
const CouponsRouter = (0, express_1.Router)();
exports.CouponsRouter = CouponsRouter;
CouponsRouter.get("/", CouponsUseCases_1.couponsUseCases.FineOne);
CouponsRouter.get("/all", CouponsUseCases_1.couponsUseCases.FindAll);
CouponsRouter.get("/many", CouponsUseCases_1.couponsUseCases.findMany);
CouponsRouter.get("/manyCrud", async (req, res) => {
    const { fields } = req.query;
    return res.json(await CouponsUseCases_1.default.getMany(req.body, fields));
});
CouponsRouter.post("/", CouponsUseCases_1.couponsUseCases.Add);
CouponsRouter.patch("/:id", CouponsUseCases_1.couponsUseCases.Update);
CouponsRouter.delete("/:id", CouponsUseCases_1.couponsUseCases.Delete);
