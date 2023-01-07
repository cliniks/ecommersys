import { Category, CategorySchema } from "../../entities/category.entitie";
import { ICategoryRepository } from "../Interfaces/ICategoryRepository";
import { getAllProps, getOneProps } from "../interfaces/ICrudRepository";
import { ConnectRepo } from "./ConnectRepo";
import { CrudRepo } from "./CrudRepo";

export class CategoryRepository
  extends ConnectRepo
  implements ICategoryRepository
{
  private model = this.categoriesRepository.model("categories", CategorySchema);
  private crud = new CrudRepo(this.model);

  constructor() {
    super();
  }

  getOne = ({ key, value }: getOneProps) => this.crud.getOne({ key, value });

  getAll = (props: getAllProps) => this.crud.getAll(props);

  addOne = (data: Category) => this.crud.addOne(data);

  update = (id: string, data: any) => this.crud.update(id, data);

  delete = (id: string) => this.crud.delete(id);
}
