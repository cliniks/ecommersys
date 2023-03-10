"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRoutes = void 0;
const express_1 = require("express");
const verifyers_1 = require("../middlewares/verifyers");
const UsersUseCases_1 = require("../useCases/UsersUseCases");
const multer_1 = __importDefault(require("multer"));
const upload = (0, multer_1.default)({ dest: "uploads/" });
const UsersRoutes = (0, express_1.Router)();
exports.UsersRoutes = UsersRoutes;
UsersRoutes.get("/", verifyers_1.verifyers.verifyToken, UsersUseCases_1.usersUseCases.FindOne);
UsersRoutes.get("/verifyUser", verifyers_1.verifyers.verifyToken, (_, res) => {
    try {
        res.json(true);
    }
    catch (err) {
        res.json(false);
    }
});
UsersRoutes.get("/getMyUser", verifyers_1.verifyers.verifyToken, UsersUseCases_1.usersUseCases.getMyUser);
UsersRoutes.get("/all", verifyers_1.verifyers.verifyToken, UsersUseCases_1.usersUseCases.FindAll);
UsersRoutes.post("/", upload.single("img"), UsersUseCases_1.usersUseCases.newUser);
UsersRoutes.patch("/image/:id", verifyers_1.verifyers.verifyToken, upload.single("img"), UsersUseCases_1.usersUseCases.updateImage);
UsersRoutes.patch("/info/:id", verifyers_1.verifyers.verifyToken, UsersUseCases_1.usersUseCases.updateUserInfo);
UsersRoutes.get("/seeProduct/:id", verifyers_1.verifyers.verifyToken, UsersUseCases_1.usersUseCases.seeProduct);
UsersRoutes.patch("/:id", verifyers_1.verifyers.verifyAppToken, verifyers_1.verifyers.verifyToken, UsersUseCases_1.usersUseCases.Update);
UsersRoutes.delete("/:id", verifyers_1.verifyers.verifyAppToken, verifyers_1.verifyers.verifyToken, UsersUseCases_1.usersUseCases.Delete);
UsersRoutes.post("/createEmailToken", UsersUseCases_1.usersUseCases.createEmailToken);
UsersRoutes.post("/confirmEmailToken", UsersUseCases_1.usersUseCases.confirmEmailToken);
