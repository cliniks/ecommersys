import { Checkout } from "../../Entities";
import { Response } from "../../Errors";
import { IUserCheckout } from "../../interfaces";
import { checkoutErrors, checkoutMutations } from "../../services";

import { Try } from "../../utils";

export class userCheckout implements IUserCheckout {
  async getSingle(
    checkoutId: string
  ): Promise<Response<checkoutErrors, Checkout>> {
    return await Try(checkoutMutations.getSingle, checkoutId);
  }

  async generate(orderId: string): Promise<Response<checkoutErrors, Checkout>> {
    return await Try(checkoutMutations.generate, orderId);
  }

  async createPayment(data: {
    type: string;
    value: string;
    checkoutId: string;
  }): Promise<Response<checkoutErrors, Checkout>> {
    return await Try(checkoutMutations.createPayment, data);
  }

  async updatePayment(data: {
    type: string;
    value: string;
    checkoutId: string;
  }): Promise<Response<checkoutErrors, Checkout>> {
    return await Try(checkoutMutations.updatePayment, data);
  }

  async confirmPayment(
    checkoutId: string
  ): Promise<Response<checkoutErrors, Checkout>> {
    return await Try(checkoutMutations.confirmPayment, checkoutId);
  }

  async cancelOpen(
    checkoutId: string
  ): Promise<Response<checkoutErrors, Checkout>> {
    return await Try(checkoutMutations.cancelOpen, checkoutId);
  }
}
