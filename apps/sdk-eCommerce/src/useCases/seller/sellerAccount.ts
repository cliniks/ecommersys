import { Store, storeInfo } from "../../Entities";
import { Address } from "../../Entities/address.entitie";
import { Response } from "../../Errors";
import { ISellerAccount, getAllProps, getAllReturn } from "../../interfaces";
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

  async getMyAddress(
    props: getAllProps
  ): Promise<Response<sellerErrors, getAllReturn<Address>>> {
    return await Try(sellerMutations.getMyAddress, props);
  }

  async addAddress({
    data,
  }: {
    data: Address;
  }): Promise<Response<sellerErrors, Address>> {
    return await Try(sellerMutations.addAddress, data);
  }

  async updateAddress(props: {
    addressId: string;
    data: Partial<Address>;
  }): Promise<Response<sellerErrors, Address>> {
    return await Try(sellerMutations.updateAddress, props);
  }

  async deleteAddress(props: {
    addressId: string;
  }): Promise<Response<sellerErrors, String>> {
    return await Try(sellerMutations.deleteAddress, props);
  }

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
    return await Try(sellerMutations.updateStoreBanner, formData);
  }
}
