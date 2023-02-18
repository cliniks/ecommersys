import { Model } from "mongoose";
import { User, userInfo } from "../../entities";
import {
  getAllProps,
  getOneProps,
  ICrudRepository,
  IUsersRepository,
} from "../Interfaces";
import { CrudRepo } from "./CrudRepo";

class UsersImplementation implements IUsersRepository {
  private crud: ICrudRepository<User>;

  constructor(private model: Model<User>) {
    this.crud = new CrudRepo(this.model);
  }

  async updateImage(user: User, img: string): Promise<any> {
    await this.model.findByIdAndUpdate(user._id, { img });
    return await this.model.findById(user._id);
  }

  async updateUserInfo(user: User, info: Partial<userInfo>) {
    await this.model.findByIdAndUpdate(user._id, {
      userInfo: { ...user.userInfo, ...info },
    });
    return await this.model.findById(user._id);
  }

  getOne = ({ key, value }: getOneProps) => this.crud.getOne({ key, value });

  getAll = (props: getAllProps) => this.crud.getAll(props);

  addOne = (data: User) => this.crud.addOne(data);

  update = (id: string, data: any) => this.crud.update(id, data);

  delete = (id: string) => this.crud.delete(id);
}

export default UsersImplementation;
