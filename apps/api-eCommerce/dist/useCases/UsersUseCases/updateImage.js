"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateImage = void 0;
const returnUserFromToken_1 = require("../../utils/returnUserFromToken");
const repositories_1 = require("../../repositories");
const s3 = new repositories_1.S3Repository();
const updateImage = async (req, res, repository) => {
    try {
        const user = await (0, returnUserFromToken_1.returnUserFromToken)(req);
        const file = req.file;
        const img = async () => {
            if (file) {
                try {
                    console.log(file);
                    const upload = await s3.uploadImage(file);
                    return upload.Location;
                }
                catch (err) {
                    return null;
                }
            }
            return null;
        };
        const newImage = (await img());
        return res.json(await repository.updateImage(user, newImage));
    }
    catch (err) {
        return res.status(400).send("não foi possível atualizar a imagem");
    }
};
exports.updateImage = updateImage;
