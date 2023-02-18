import { StoreSolicitate, User, userInfo } from "../../Entities";
import { Address } from "../../Entities/address.entitie";
import { Response } from "../../Errors";
import { IUserAccount, getAllProps, getAllReturn } from "../../interfaces";
import {
  authMutations,
  authRes,
  userErrors,
  userMutations,
} from "../../services";
import { Try } from "../../utils";

export class userAccount implements IUserAccount {
  async auth(props: {
    username: string;
    password: string;
  }): Promise<Response<userErrors, authRes>> {
    return Try(authMutations.auth, props);
  }

  async verifyToken(token: string): Promise<Response<userErrors, authRes>> {
    return Try(authMutations.verifyToken, token);
  }

  async createNewUser(data: FormData): Promise<Response<userErrors, User>> {
    return await Try(userMutations.createNewUser, data);
  }

  async getMyUser(): Promise<Response<userErrors, User>> {
    return await Try(userMutations.getMyUser);
  }

  async updateUserInfo(props: {
    id: string;
    data: Partial<userInfo>;
  }): Promise<Response<userErrors, User>> {
    return await Try(userMutations.updateUserInfo, props);
  }

  async getMyAddress(
    props: getAllProps
  ): Promise<Response<userErrors, getAllReturn<Address>>> {
    return await Try(userMutations.getMyAddress, props);
  }

  async addAddress(address: Address): Promise<Response<userErrors, Address>> {
    return await Try(userMutations.addAddress, address);
  }
  async setDefaultAddress(
    addressId: string
  ): Promise<Response<userErrors, User>> {
    return await Try(userMutations.setDefaultAddress, addressId);
  }

  async updateAddress(props: {
    addressId: string;
    data: Partial<Address>;
  }): Promise<Response<userErrors, Address>> {
    return await Try(userMutations.updateAddress, props);
  }

  async deleteAddress(props: {
    addressId: string;
  }): Promise<Response<userErrors, string>> {
    return await Try(userMutations.deleteAddress, props);
  }

  async updateUserImage(props: {
    id: string;
    img: any;
  }): Promise<Response<userErrors, User>> {
    return await Try(userMutations.updateUserImage, props);
  }

  async solicitSeller(
    data: StoreSolicitate
  ): Promise<Response<userErrors, StoreSolicitate>> {
    return await Try(userMutations.sellerSolicitation, data);
  }
  async verifySolicitation(
    id: string
  ): Promise<Response<userErrors, StoreSolicitate>> {
    return await Try(userMutations.verifySolicitation, id);
  }
}
