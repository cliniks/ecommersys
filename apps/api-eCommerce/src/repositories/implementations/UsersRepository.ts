import { User, UserSchema } from "../../entities/user.entitie";
import { getAllProps, getOneProps } from "../interfaces/ICrudRepository";
import { IUsersRepository, UserInfo } from "../interfaces/IUsersRepository";
import { ConnectRepo } from "./ConnectRepo";
import { CrudRepo } from "./CrudRepo";

export class UsersRepository extends ConnectRepo implements IUsersRepository {
  public model = this.users.model("users", UserSchema);

  private crud = new CrudRepo(this.model);

  constructor() {
    super();
  }

  async updateImage(user: User, img: string): Promise<any> {
    await this.model.findByIdAndUpdate(user._id, { img });
    return await this.model.findById(user._id);
  }

  async updateUserInfo(user: User, info: UserInfo) {
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
