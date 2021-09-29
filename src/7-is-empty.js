export const isEmpty = (stringArrayOrObject) => {
  const type = typeof stringArrayOrObject;

  if (type === "string") {
    return stringArrayOrObject === "";
  } else if (
    type === "object" &&
    Object.keys(stringArrayOrObject).length === 0
  ) {
    return true;
  }

  return false;
};
