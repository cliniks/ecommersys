import { IWebSocket } from "../../providers/websobket/IWebSocket";
import { SalesRepository } from "../../repositories";

const salesRepo = SalesRepository;

export const updatePaymentStatus = async (data: any, socket: IWebSocket) => {
  try {
    const getSale = await salesRepo.getOne({
      key: "_id",
      value: data.payment.externalReference,
    });
    console.log("______√_______ Retorno Webhook _______√______");
    console.log("pagamendo: ", data.payment.externalReference);
    console.log("pagamendo: ", data);

    let paymentLogs = Array.from(getSale.paymentLogs);
    let paymentsConfirmed = Array.from(getSale.paymentsConfirmed);

    if (
      data.event === "PAYMENT_CONFIRMED" ||
      data.event === "PAYMENT_RECEIVED"
    ) {
      paymentsConfirmed.push(data);

      if (data.payment.billingType === "PIX") {
        socket.io.emit(`confirmPix/${data.payment.externalReference}`, data);
      }

      if (data.payment.billingType === "CREDIT_CARD") {
        socket.io.emit(`confirmCard/${data.payment.externalReference}`, data);
      }
    }

    if (
      data.event !== "PAYMENT_CONFIRMED" &&
      data.event !== "PAYMENT_RECEIVED"
    ) {
      paymentLogs.push(data);
      if (data.payment.billingType === "CREDIT_CARD") {
        socket.io.emit(`confirmCard/${data.payment.externalReference}`, data);
      }
    }

    if (
      getSale.billingType === "CREDIT_CARD" &&
      getSale.installmentCount &&
      getSale.installmentCount > 0
    ) {
      let toUpdate: {
        paymentLogs: any[];
        paymentsConfirmed: any[];
        paymentStatus?: string;
      } = {
        paymentLogs: paymentLogs,
        paymentsConfirmed: paymentsConfirmed,
      };

      if (paymentsConfirmed.length === getSale.installmentCount) {
        (toUpdate["paymentStatus"] = data.payment.status),
          await salesRepo.update(data.payment.externalReference, toUpdate);
      }
    }

    await salesRepo.update(data.payment.externalReference, {
      paymentStatus: data.payment.status,
      paymentLogs: paymentLogs,
      paymentsConfirmed: paymentsConfirmed,
    });

    console.log("______√_______ Retorno Webhook _______√______");
  } catch (err) {
    console.log("XXXXXXXXXXXXXXX Erro no Webhook XXXXXXXXXXXXXXX");
    console.log(err.toString());
    console.log("XXXXXXXXXXXXXXX Erro no Webhook XXXXXXXXXXXXXXX");
  }
};
