import { Store, storeInfo } from "../../Entities";
import { Response } from "../../Errors";
import { ISellerAccount } from "../../interfaces";
import { sellerErrors } from "../../services";
export declare class sellerAccount implements ISellerAccount {
    getMyStore(): Promise<Response<sellerErrors, Store>>;
    updateSellerInfo(props: {
        id: string;
        data: Partial<Store>;
    }): Promise<Response<sellerErrors, Store>>;
    updateStoreInfo(props: {
        storeInfo: Partial<storeInfo>;
    }): Promise<Response<sellerErrors, Store>>;
    updateStoreImage(formData: FormData): Promise<Response<sellerErrors, Store>>;
    updateStoreBanner(formData: FormData): Promise<Response<sellerErrors, Store>>;
}