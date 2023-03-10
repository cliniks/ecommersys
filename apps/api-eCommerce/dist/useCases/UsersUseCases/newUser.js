"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const util_1 = __importDefault(require("util"));
const fs_1 = __importDefault(require("fs"));
const repositories_1 = require("../../repositories");
const providers_1 = require("../../providers");
const axiosInstance_1 = require("../../services/axiosInstance");
const s3 = new repositories_1.S3Repository();
const unlinkFile = util_1.default.promisify(fs_1.default.unlink);
const asaasClients = providers_1.clientAssasProvider;
const AddressRepo = repositories_1.AddressesRepository;
const cartRepo = repositories_1.CartsRepository;
const newUser = async (req, res, repository) => {
    try {
        const { username, password, userInfo } = req.body;
        const file = req.file;
        const upload = async () => {
            if (file) {
                try {
                    const upload = await s3.uploadImage(file);
                    await unlinkFile(file.path);
                    return upload.Location;
                }
                catch (err) {
                    return null;
                }
            }
            return null;
        };
        const img = await upload();
        const hashedPassword = await bcrypt_1.default.hash(password, 10);
        const userData = Object.assign(Object.assign({}, req.body), { username,
            userInfo,
            img, access: 1, password: hashedPassword });
        const user = await repository.addOne(userData);
        axiosInstance_1.makeApi.post("", { type: "createAccount", userInfo: user.userInfo });
        const addAddress = await AddressRepo.addOne(Object.assign(Object.assign({}, user.userInfo), { owner: `${user._id}` }));
        await repository.update(`${user._id}`, {
            userInfo: Object.assign(Object.assign({}, user.userInfo), { defaultAddress: `${addAddress._id}` }),
        });
        await cartRepo.addOne({ owner: `${user._id}` });
        const createAsaasIntegration = await asaasClients.newClient({ data: user });
        return res.json(createAsaasIntegration);
    }
    catch (err) {
        const { code, keyValue } = err;
        console.log(code, keyValue);
        return res.json(`Código ${code}: Erro ao adicionar usuário: ${err.toString()}`);
    }
};
exports.newUser = newUser;
