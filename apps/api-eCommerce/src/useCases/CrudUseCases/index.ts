import {
  ICrudRepository,
  getAllProps,
  getOneProps,
} from "../../repositories/Interfaces";

export class CrudUseCases<E> {
  constructor(public Repo: ICrudRepository<E>) {}

  async add(data: E) {
    return await this.Repo.addOne(data);
  }
  async getOne(props: getOneProps) {
    return await this.Repo.getOne(props);
  }
  async getMany(data: string[], fields?: string) {
    return await this.Repo.getMany(data, fields);
  }
  async getAll(props: getAllProps) {
    return await this.Repo.getAll(props);
  }
  async update(id: string, data: Partial<E>) {
    return await this.Repo.update(id, data);
  }
  async delete(id: string) {
    return await this.Repo.delete(id);
  }
}
