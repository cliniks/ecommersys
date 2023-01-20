import mongoose from "mongoose";
import {
  getAllProps,
  getOneProps,
  ICrudRepository,
} from "../interfaces/ICrudRepository";
import { verifyIsNumber } from "../../utils/numberMethods";

export class CrudRepo implements ICrudRepository {
  constructor(private model: mongoose.Model<any>) {}

  async getOne({ key, value }: getOneProps) {
    return await this.model.findOne({ [key]: value });
  }

  async getAll({ page = 1, size = 10, filter }: getAllProps) {
    const fields = filter?.fields ? filter?.fields : "";

    const filterValue = filter?.value;

    const arrayFromKeys = filterValue ? filter.key?.split(" ") : [];
    const arrayFromKeyValues = filterValue ? filter?.value?.split(" ") : [];

    // const includesIsActive = arrayFromKeys?.includes("isActive");
    // if (!includesIsActive) {
    //   arrayFromKeys?.push("isActive");
    //   arrayFromKeyValues.push("true");
    // }

    const splitedObjects = arrayFromKeys?.map((item, index) => ({
      key: item,
      value: arrayFromKeyValues[index],
    }));

    let query = {};

    splitedObjects?.map((item) => {
      if (item) {
        const prepareValue = prepareFilterQuery({ filter: item });
        query = { ...query, ...prepareValue };
      }
    });

    console.log({ ...query });

    let data = await this.model
      .find(query)
      .sort({ register: -1 })
      .skip(+size * (+page > 0 ? +page - 1 : 0))
      .limit(+size)
      .select(fields);

    const count = await this.model.countDocuments(data);

    let obj = {
      result: data,
      totalItems: +count,
      pageSize: +size,
      thisPage: +page + 1,
      totalPage: +count > +size ? Math.ceil(+count / +size) : 1,
    };

    return obj;
  }

  async addOne(data: any) {
    return (await this.model.create(data)).save();
  }

  async update(id: string, data: any) {
    await this.model.findByIdAndUpdate(id, data);
    return await this.getOne({ key: "_id", value: id });
  }

  async delete(id: string) {
    return await this.model.findByIdAndDelete(id);
  }
}

const prepareFilterQuery = ({ filter }: { filter: getAllProps["filter"] }) => {
  const verifyFilter = filter
    ? typeof filter === "string"
      ? JSON.parse(filter)
      : filter
    : {};

  if (!verifyFilter) return {};

  const filterValue = verifyFilter.value;

  if (!filterValue) return {};

  const filterValueIsBool =
    typeof filterValue === "boolean" || ["true", "false"].includes(filterValue);

  const filterValueIsNumber = verifyIsNumber(filterValue);

  if (
    (filterValueIsNumber || filterValueIsBool) &&
    typeof filterValue !== "object"
  ) {
    return { [verifyFilter.key]: filterValue };
  }

  const regEx = new RegExp(filterValue, "i");

  return {
    [verifyFilter.key]: { $regex: regEx },
  };
};
