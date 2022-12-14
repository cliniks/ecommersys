import { Product, ProductSchema } from "../../entities/product.entitie";
import { getOneProps } from "../interfaces/ICrudRepository";
import { IProductsRepository } from "../interfaces/IProductsRepository";
import { ConnectRepo } from "./ConnectRepo";
import { CrudRepo } from "./CrudRepo";

export class ProductsRepository
  extends ConnectRepo
  implements IProductsRepository
{
  private model = this.productsRepository.model("products", ProductSchema);

  private crud = new CrudRepo(this.model);

  constructor() {
    super();
  }

  getOne = ({ key, value }: getOneProps) => this.crud.getOne({ key, value });

  getAll = () => this.crud.getAll();

  addOne = (data: Product) => this.crud.addOne(data);

  update = (id: string, data: any) => this.crud.update(id, data);

  delete = (id: string) => this.crud.delete(id);
}
