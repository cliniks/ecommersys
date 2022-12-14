import mongoose from "mongoose";
import { getOneProps, ICrudRepository } from "../interfaces/ICrudRepository";

export class CrudRepo implements ICrudRepository {
  constructor(private model: mongoose.Model<any>) {}

  async getOne({ key, value }: getOneProps) {
    return await this.model.findOne({ [key]: value });
  }

  async getAll() {
    return await this.model.find();
  }

  async addOne(data: any) {
    return (await this.model.create(data)).save();
  }

  async update(id: string, data: any) {
    await this.model.findByIdAndUpdate(id, data);
    return await this.model.findById(id);
  }

  async delete(id: string) {
    return await this.model.findByIdAndDelete(id);
  }
}
