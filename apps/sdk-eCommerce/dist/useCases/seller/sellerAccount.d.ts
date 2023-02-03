import { Store, storeInfo } from "../../Entities";
import { Address } from "../../Entities/address.entitie";
import { Response } from "../../Errors";
import { ISellerAccount, getAllProps, getAllReturn } from "../../interfaces";
import { sellerErrors } from "../../services";
export declare class sellerAccount implements ISellerAccount {
    getMyStore(): Promise<Response<sellerErrors, Store>>;
    updateSellerInfo(props: {
        id: string;
        data: Partial<Store>;
    }): Promise<Response<sellerErrors, Store>>;
    getMyAddress(props: getAllProps): Promise<Response<sellerErrors, getAllReturn<Address>>>;
    addAddress({ data, }: {
        data: Address;
    }): Promise<Response<sellerErrors, Address>>;
    updateAddress(props: {
        addressId: string;
        data: Partial<Address>;
    }): Promise<Response<sellerErrors, Address>>;
    deleteAddress(props: {
        addressId: string;
    }): Promise<Response<sellerErrors, String>>;
    updateStoreInfo(props: {
        storeInfo: Partial<storeInfo>;
    }): Promise<Response<sellerErrors, Store>>;
    updateStoreImage(formData: FormData): Promise<Response<sellerErrors, Store>>;
    updateStoreBanner(formData: FormData): Promise<Response<sellerErrors, Store>>;
}
