import { StoreSolicitate, User, UserInfo } from "../../Entities";
import { Address } from "../../Entities/address.entitie";
import { Response } from "../../Errors";
import { IUserAccount, getAllProps, getAllReturn } from "../../interfaces";
import { authRes, userErrors } from "../../services";
export declare class userAccount implements IUserAccount {
    auth(props: {
        username: string;
        password: string;
    }): Promise<Response<userErrors, authRes>>;
    createNewUser(data: FormData): Promise<Response<userErrors, User>>;
    getMyUser(): Promise<Response<userErrors, User>>;
    updateUserInfo(props: {
        id: string;
        data: Partial<UserInfo>;
    }): Promise<Response<userErrors, User>>;
    getMyAddress(props: getAllProps): Promise<Response<userErrors, getAllReturn<Address>>>;
    addAddress(address: Address): Promise<Response<userErrors, Address>>;
    updateAddress(props: {
        addressId: string;
        data: Partial<Address>;
    }): Promise<Response<userErrors, Address>>;
    deleteAddress(props: {
        addressId: string;
    }): Promise<Response<userErrors, string>>;
    updateUserImage(props: {
        id: string;
        img: any;
    }): Promise<Response<userErrors, User>>;
    solicitSeller(data: StoreSolicitate): Promise<Response<userErrors, StoreSolicitate>>;
}
