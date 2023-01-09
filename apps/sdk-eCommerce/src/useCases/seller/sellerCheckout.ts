import { Checkout } from "../../Entities";
import { Response } from "../../Errors";
import { ISellerDashboardCheckout } from "../../interfaces";
import { checkoutErrors, sellerMutations } from "../../services";
import { Try } from "../../utils";

export class sellerCheckout implements ISellerDashboardCheckout {
  async getSingle(
    checkoutId: string
  ): Promise<Response<checkoutErrors, Checkout>> {
    return await Try(sellerMutations, checkoutId);
  }
  async generate(orderId: string): Promise<Response<checkoutErrors, Checkout>> {
    return await Try(sellerMutations, orderId);
  }
  async createPayment(data: {
    type: string;
    value: string;
    checkoutId: string;
  }): Promise<Response<checkoutErrors, Checkout>> {
    return await Try(sellerMutations, data);
  }
  async updatePayment(data: {
    type: string;
    value: string;
    checkoutId: string;
  }): Promise<Response<checkoutErrors, Checkout>> {
    return await Try(sellerMutations, data);
  }
  async confirmPayment(
    checkoutId: string
  ): Promise<Response<checkoutErrors, Checkout>> {
    return await Try(sellerMutations, checkoutId);
  }
  async cancelOpen(
    checkoutId: string
  ): Promise<Response<checkoutErrors, Checkout>> {
    return await Try(sellerMutations, checkoutId);
  }
}
