import { Store } from "../../Entities";
import { Response } from "../../Errors";
import { ISellerAccount } from "../../interfaces";
import { sellerErrors, sellerMutations } from "../../services";
import { Try } from "../../utils";

export class sellerAccount implements ISellerAccount {
  async getMyStore(): Promise<Response<sellerErrors, Store>> {
    return await Try(sellerMutations.getMyStore);
  }

  async updateSellerInfo(
    id: string,
    data: Partial<Store>
  ): Promise<Response<sellerErrors, Store>> {
    return await Try(sellerMutations.updateSellerInfo, id, data);
  }

  async updateStoreImage(
    formData: FormData
  ): Promise<Response<sellerErrors, Store>> {
    return await Try(sellerMutations.updateStoreImage, formData);
  }

  async updateStoreBanner(
    formData: FormData
  ): Promise<Response<sellerErrors, Store>> {
    return await Try(sellerMutations.updateStoreImage, formData);
  }
}
