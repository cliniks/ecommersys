import mongoose from "mongoose";
import {
  getAllProps,
  getOneProps,
  ICrudRepository,
} from "../interfaces/ICrudRepository";

export class CrudRepo implements ICrudRepository {
  constructor(private model: mongoose.Model<any>) {}

  async getOne({ key, value }: getOneProps) {
    return await this.model.findOne({ [key]: value });
  }

  async getAll(pagFilter: getAllProps) {
    let limit = pagFilter?.size ? pagFilter.size : 10;
    let page = pagFilter?.page ? pagFilter.page - 1 : 0;
    const filterValue = pagFilter?.filter?.value;
    const regEx = new RegExp(filterValue, "i");
    const fields = pagFilter?.filter?.fields;
    var query = pagFilter?.filter
      ? { [pagFilter.filter.key]: { $regex: regEx } }
      : {};
    let data = await this.model
      .find(query)
      .sort({ register: -1 })
      .skip(limit * page)
      .limit(limit)
      .select(fields);
    const count = await this.model.countDocuments(data);
    let obj = {
      result: data,
      totalItems: count,
      pageSize: limit,
      thisPage: page + 1,
    };
    return obj;
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
