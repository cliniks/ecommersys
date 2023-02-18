import { StoreSolicitate, User, userInfo } from "../../Entities";
import { Address } from "../../Entities/address.entitie";
import { Response } from "../../Errors";
import { IUserAccount, getAllProps, getAllReturn } from "../../interfaces";
import { authRes, userErrors } from "../../services";
export declare class userAccount implements IUserAccount {
    auth(props: {
        username: string;
        password: string;
    }): Promise<Response<userErrors, authRes>>;
    verifyToken(token: string): Promise<Response<userErrors, authRes>>;
    createNewUser(data: FormData): Promise<Response<userErrors, User>>;
    getMyUser(): Promise<Response<userErrors, User>>;
    updateUserInfo(props: {
        id: string;
        data: Partial<userInfo>;
    }): Promise<Response<userErrors, User>>;
    getMyAddress(props: getAllProps): Promise<Response<userErrors, getAllReturn<Address>>>;
    addAddress(address: Address): Promise<Response<userErrors, Address>>;
    setDefaultAddress(addressId: string): Promise<Response<userErrors, User>>;
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
    verifySolicitation(id: string): Promise<Response<userErrors, StoreSolicitate>>;
}
