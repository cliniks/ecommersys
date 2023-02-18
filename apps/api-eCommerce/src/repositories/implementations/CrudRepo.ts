import { Model } from "mongoose";
import {
  ICrudRepository,
  getAllProps,
  getAllReturn,
  getOneProps,
} from "../Interfaces";

// import { verifyIsNumber } from "../../utils/numberMethods";

export class CrudRepo<E> implements ICrudRepository<E> {
  constructor(private model: Model<E>) {}

  async getOne({ key, value }: getOneProps) {
    return await this.model.findOne({ [key as any]: value });
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

    let query: any = [];

    splitedObjects?.forEach((item) => {
      if (item) {
        const prepareValue = prepareFilterQuery({ filter: item });
        query.push(prepareValue);
      }
    });

    console.log("query", query);

    let data = await this.model
      .find(query.length > 0 ? { $and: query } : {})
      .sort({ register: -1 })
      .skip(+size * (+page > 0 ? +page - 1 : 0))
      .limit(+size)
      .select(fields);

    const count = await this.model.countDocuments(data);

    let obj: getAllReturn<E> = {
      result: data,
      totalItems: +count,
      pageSize: +size,
      thisPage: +page + 1,
      totalPage: +count > +size ? Math.ceil(+count / +size) : 1,
    };

    return obj;
  }

  async addOne(data: E) {
    const add = await this.model.create(data);
    const newDoc = add.save();
    return newDoc as E;
  }

  async update(id: string, data: any) {
    await this.model.findByIdAndUpdate(id, data);
    return await this.model.findById(id);
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

  if (!filterValue || filterValue === undefined || filterValue === "undefined")
    return {};

  const filterValueIsBool =
    typeof filterValue === "boolean" || ["true", "false"].includes(filterValue);

  // const filterValueIsNumber = verifyIsNumber(filterValue);
  const filterValueIsNumber = typeof filterValue === "number";

  if (
    (filterValueIsNumber || filterValueIsBool) &&
    typeof filterValue !== "object"
  ) {
    return { [verifyFilter.key]: filterValue };
  }

  const regEx = new RegExp(filterValue, "i");

  if (verifyFilter.key === "startDate") {
    return { createdAt: { $gte: new Date(filterValue) } };
  }

  if (verifyFilter.key === "endDate") {
    return { createdAt: { $lte: new Date(filterValue) } };
  }

  if (verifyFilter.key === "startEdit") {
    return { updatedAt: { $gte: new Date(filterValue) } };
  }

  if (verifyFilter.key === "endEdit") {
    return { updatedAt: { $lte: new Date(filterValue) } };
  }

  if (verifyFilter.key === "minPrice") {
    return {
      $expr: { $gte: [{ $toDouble: "$price" }, +verifyFilter.value || 0] },
    };
  }

  if (verifyFilter.key === "maxPrice") {
    return {
      $expr: { $lte: [{ $toDouble: "$price" }, +verifyFilter.value || 2000] },
    };
  }

  if (verifyFilter.key === "_id" || verifyFilter.key === "access") {
    const value = !isNaN(verifyFilter.value)
      ? +verifyFilter.value
      : verifyFilter.value;
    return {
      [verifyFilter.key]: value,
    };
  }

  return {
    [verifyFilter.key]: { $regex: regEx },
  };
};
