"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateImage = void 0;
const S3Repository_1 = require("../../repositories/implementations/S3Repository");
const returnUserFromToken_1 = require("../../utils/returnUserFromToken");
const s3 = new S3Repository_1.S3Repository();
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
        res.json(await repository.updateImage(user, newImage));
    }
    catch (err) {
        res.status(400).send("não foi possível atualizar a imagem");
    }
};
exports.updateImage = updateImage;
