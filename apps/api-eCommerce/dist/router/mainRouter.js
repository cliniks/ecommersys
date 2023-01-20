"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.router = router;
router.post("/validateAppToken", (req, res) => {
    try {
        const { appToken } = req.body;
        // gerar uma tabela para armazenar o token e vincular db para token
        const confirmAppToken = appToken === process.env.CLINIKS_APPTOKEN;
        res.json(confirmAppToken);
    }
    catch (err) {
        res.status(400).send(false);
    }
});
