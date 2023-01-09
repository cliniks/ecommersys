import { Store, User, UserInfo } from "../../Entities";
import { Response } from "../../Errors";
import { IUserAccount } from "../../interfaces";
import {
  authMutations,
  authRes,
  sellerErrors,
  sellerMutations,
  userErrors,
  userMutations,
} from "../../services";
import { Try } from "../../utils";

export class userAccount implements IUserAccount {
  async auth(
    username: string,
    password: string
  ): Promise<Response<userErrors, authRes>> {
    return Try(authMutations.auth, username, password);
  }

  async createNewUser(data: FormData): Promise<Response<userErrors, User>> {
    return await Try(userMutations.createNewUser, data);
  }

  async getMyUser(): Promise<Response<userErrors, User>> {
    return await Try(userMutations.getMyUser);
  }

  async updateUserInfo(
    id: string,
    data: Partial<UserInfo>
  ): Promise<Response<userErrors, User>> {
    return await Try(userMutations.updateUserInfo, id, data);
  }

  async updateUserImage(
    id: string,
    img: any
  ): Promise<Response<userErrors, User>> {
    return await Try(userMutations.updateUserImage, id, img);
  }

  async solicitSeller(): Promise<Response<sellerErrors, Store>> {
    return await Try(sellerMutations.solicitation);
  }
}
