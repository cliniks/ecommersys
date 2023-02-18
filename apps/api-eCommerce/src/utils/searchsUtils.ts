import { User } from "../entities/user.entitie";
import { getAllProps } from "../repositories/Interfaces";

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

export const addMyOwnUserInMySearch = (
  filter: getAllProps["filter"],
  user: User
) => {
  const filterStringAdjust =
    typeof filter === "string" ? JSON.parse(filter) : filter;

  let adjustedFilter = {
    key: "owner" + " " + filterStringAdjust.key,
    value: user._id + " " + filterStringAdjust.value,
    fields: filterStringAdjust.fields,
  };
  return adjustedFilter;
};
