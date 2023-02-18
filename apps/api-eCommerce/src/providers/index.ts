import { ClientAsaasImplementation } from "./implementations/ClientAsaasImplementation";
import { SellerAsaasImplementation } from "./implementations/SellerAsaasProvider";
import { MailSenderProvider } from "./implementations/MailSenderProvider";

export const clientAssasProvider = new ClientAsaasImplementation();
export const sellerAssasProvider = new SellerAsaasImplementation();
export const mailSenderProvider = new MailSenderProvider();
