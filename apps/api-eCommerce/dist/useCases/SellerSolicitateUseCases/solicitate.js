"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.solicitate = void 0;
const returnUserFromToken_1 = require("../../utils/returnUserFromToken");
const axiosInstance_1 = require("../../services/axiosInstance");
const solicitate = async (req, res, repo) => {
    try {
        const { name, storeInfo } = req.body;
        console.log(name, storeInfo);
        const getUser = await (0, returnUserFromToken_1.returnUserFromToken)(req);
        const hasSolicitation = await repo.getOne({
            key: "owner",
            value: getUser._id,
        });
        axiosInstance_1.makeApi.post("", {
            type: "sellerSolicitation",
            userInfo: getUser.userInfo,
            storeInfo: hasSolicitation.storeInfo,
        });
        if (!hasSolicitation || hasSolicitation.owner !== `${getUser._id}`) {
            const add = await repo.addOne({
                name,
                storeInfo,
                owner: `${getUser._id}`,
                isActive: false,
            });
            return res.json(add);
        }
        return res.json(hasSolicitation);
    }
    catch (err) {
        console.log(err.message);
        return res.status(400).send("não foi possível solicitar.");
    }
};
exports.solicitate = solicitate;
