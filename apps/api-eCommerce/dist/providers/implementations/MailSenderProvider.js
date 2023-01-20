"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailSenderProvider = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
class MailSenderProvider {
    constructor() {
        this.transporter = nodemailer_1.default.createTransport({
            service: process.env.MAIL_SENDER_PROVIDER,
            auth: {
                user: process.env.MAIL_SENDER_USER,
                pass: process.env.MAIL_SENDER_PASSWORD,
            },
        });
    }
    async sendMail(message) {
        try {
            const sender = await this.transporter.sendMail({
                to: message.to,
                from: process.env.MAIL_SENDER,
                subject: message.subject,
                text: message.body,
                html: message.html,
            });
            return sender;
        }
        catch (err) {
            console.log(err);
            throw new Error("não foi possível conectar ao nodeMailer");
        }
    }
}
exports.MailSenderProvider = MailSenderProvider;
