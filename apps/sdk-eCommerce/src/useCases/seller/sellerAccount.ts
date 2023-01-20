import { Store, storeInfo } from "../../Entities";
import { Response } from "../../Errors";
import { ISellerAccount } from "../../interfaces";
import { sellerErrors, sellerMutations } from "../../services";
import { Try } from "../../utils";

export class sellerAccount implements ISellerAccount {
  async getMyStore(): Promise<Response<sellerErrors, Store>> {
    return await Try(sellerMutations.getMyStore);
  }

  async updateSellerInfo(props: {
    id: string;
    data: Partial<Store>;
  }): Promise<Response<sellerErrors, Store>> {
    return await Try(sellerMutations.updateSellerInfo, props);
  }

  // async getMyAddresses(props: {
  //   storeId: string;
  //   data: Partial<Store>;
  // }): Promise<Response<sellerErrors, Store>> {
  //   return await Try(sellerMutations.updateSellerInfo, props);
  // }

  // async updateMyAddress(props: {
  //   addressId: string;
  //   data: Partial<Store>;
  // }): Promise<Response<sellerErrors, Store>> {
  //   return await Try(sellerMutations.updateSellerInfo, props);
  // }

  // async deleteMyAddress({
  //   addressId,
  // }: {
  //   addressId: string;
  // }): Promise<Response<sellerErrors, Store>> {
  //   return await Try(sellerMutations.updateSellerInfo, addressId);
  // }

  async updateStoreInfo(props: {
    storeInfo: Partial<storeInfo>;
  }): Promise<Response<sellerErrors, Store>> {
    return await Try(sellerMutations.updateSellerInfo, props);
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