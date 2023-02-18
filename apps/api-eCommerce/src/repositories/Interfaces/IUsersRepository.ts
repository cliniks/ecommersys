import { User, userInfo } from "../../entities/user.entitie";
import { ICrudRepository } from ".";

export interface IUsersRepository extends ICrudRepository<User> {
  updateImage(user: User, img: string): Promise<any>;
  updateUserInfo(user: User, info: userInfo): Promise<any>;
}

export type newUser = {
  username: string;
  password: string;
  img: string;
  userInfo: userInfo;
};
