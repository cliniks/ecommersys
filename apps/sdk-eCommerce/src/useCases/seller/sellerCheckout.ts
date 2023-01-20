import { Checkout } from "../../Entities";
import { Response } from "../../Errors";
import { ISellerDashboardCheckout, getSingleProps } from "../../interfaces";
import { checkoutErrors, sellerMutations } from "../../services";
import { Try } from "../../utils";

export class sellerCheckout implements ISellerDashboardCheckout {
  async getSingle(
    props: getSingleProps
  ): Promise<Response<checkoutErrors, Checkout>> {
    return await Try(sellerMutations, props);
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
