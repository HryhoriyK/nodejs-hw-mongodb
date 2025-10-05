// src/utils/parseSortParams.js

import { SORT_ORDER } from "../constants/index.js";

function parseSortOrder(value) {
  if (typeof value === "undefined") {
    return "asc";
  }

  if (value !== "asc" && value !== "desc") {
    return "asc";
  }
  return value;
}

// const parseSortOrder = (sortOrder) => {
//   const isKnownOrder = [SORT_ORDER.ASC, SORT_ORDER.DESC].includes(sortOrder);
//   if (isKnownOrder) return sortOrder;
//   return SORT_ORDER.ASC;
// };

function parseSortBy(value) {
  if (typeof value === undefined) {
    return '_id';
  }

  const keys = [
    '_id',
    'name',
    'phoneNumber',
    'email',
    'createdAt',];
  
  if (keys.includes(value) !== true) {
    return '_id';
  }

  return value;
}


export const parseSortParams = (query) => {
  const { sortOrder, sortBy } = query;

  const parsedSortOrder = parseSortOrder(sortOrder);
  const parsedSortBy = parseSortBy(sortBy);

  return {
    sortOrder: parsedSortOrder,
    sortBy: parsedSortBy,
  };
};
