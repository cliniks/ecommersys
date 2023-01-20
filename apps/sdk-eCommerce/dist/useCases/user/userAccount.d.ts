import { Store, User, UserInfo } from "../../Entities";
import { Response } from "../../Errors";
import { IUserAccount } from "../../interfaces";
import { authRes, sellerErrors, userErrors } from "../../services";
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
    updateUserImage(props: {
        id: string;
        img: any;
    }): Promise<Response<userErrors, User>>;
    solicitSeller(): Promise<Response<sellerErrors, Store>>;
}
