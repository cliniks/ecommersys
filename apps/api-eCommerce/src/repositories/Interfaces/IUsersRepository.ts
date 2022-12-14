import { User } from "../../entities/user.entitie";
import { ICrudRepository } from "./ICrudRepository";

export interface IUsersRepository extends ICrudRepository {
  updateImage(user: User, img: string): Promise<any>;
  updateUserInfo(user: User, info: UserInfo): Promise<any>;
}

export type newUser = {
  username: string;
  password: string;
  img: string;
  userInfo: UserInfo;
};

export type UserInfo = {
  name?: string;
  lastName?: string;
  fone?: string;
  cpf?: string;
  address?: string;
  number?: Number;
  complement?: string;
  birthDate?: string;
  city?: string;
  state?: string;
  cep?: string;
  email?: string;
};
