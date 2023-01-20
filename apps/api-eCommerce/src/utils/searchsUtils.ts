import { User } from "../entities/user.entitie";
import { getAllProps } from "../repositories/interfaces/ICrudRepository";

export const addMyOwnStoreInMySearch = (
  filter: getAllProps["filter"],
  user: User
) => {
  const filterStringAdjust =
    typeof filter === "string" ? JSON.parse(filter) : filter;

  let adjustedFilter = {
    key: "owner" + " " + filterStringAdjust.key,
    value: user.storeId + " " + filterStringAdjust.value,
    fields: filterStringAdjust.fields,
  };
  return adjustedFilter;
};
