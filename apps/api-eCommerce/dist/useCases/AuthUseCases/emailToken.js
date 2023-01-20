"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.confirmEmailToken = exports.createEmailToken = void 0;
const MailSenderProvider_1 = require("../../providers/implementations/MailSenderProvider");
const emailTemplates_1 = require("../../Emails/templates/emailTemplates");
const RedisRepo_1 = require("../../repositories/implementations/RedisRepo");
const mailSender = new MailSenderProvider_1.MailSenderProvider();
const cache = new RedisRepo_1.RedisImplementation();
const createEmailToken = async (req, res) => {
    const { email } = req.body;
    const token = Math.floor(1000 + Math.random() * 9000);
    const html = (0, emailTemplates_1.SendCodeEmail)({ code: token.toString() });
    const body = "";
    const subject = "Confirmação de E-mail";
    const to = email;
    console.log(token);
    await cache.insertData(email, token);
    await mailSender.sendMail({ body, html, subject, to });
    return res.json("Pronto!\n\nCódigo encaminhado com sucesso!\n\nDigite o código recebido pelo e-mail cadastrado.");
};
exports.createEmailToken = createEmailToken;
const confirmEmailToken = async (req, res) => {
    const { email, code } = req.body;
    const cacheData = await cache.getHashData(email);
    if (!cacheData)
        res.status(400).send("Não possui um registro com esse código!");
    if (code === cacheData.code) {
        await cache.removeData(email);
        return res.json("Código confere!");
    }
    else {
        return res.status(400).send("Código não confere!");
    }
};
exports.confirmEmailToken = confirmEmailToken;
