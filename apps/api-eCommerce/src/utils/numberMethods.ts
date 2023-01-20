export const verifyIsNumber = (toVerify: any): boolean => {
  return (
    typeof toVerify !== "object" &&
    typeof toVerify !== "boolean" &&
    !isNaN(toVerify)
  );
};
