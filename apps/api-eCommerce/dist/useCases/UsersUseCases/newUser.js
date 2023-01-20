"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const ApiGatewayPag_1 = require("../../services/ApiGatewayPag");
const newUser = async (req, res, repository) => {
    try {
        const { username, password, userInfo } = req.body;
        const hashedPassword = await bcrypt_1.default.hash(password, 10);
        const userData = Object.assign(Object.assign({}, req.body), { username,
            userInfo, password: hashedPassword });
        const user = await repository.addOne(userData);
        const createAsaasIntegration = await ApiGatewayPag_1.ApiGP.addClient(user, repository);
        const updateUser = await repository.update(user._id, {
            gatewayPagId: createAsaasIntegration.id,
        });
        res.json(updateUser);
    }
    catch (err) {
        const { code, keyValue } = err;
        res.json(`Código ${code}: Erro ao adicionar usuário: ${JSON.stringify(keyValue)}`);
    }
};
exports.newUser = newUser;
