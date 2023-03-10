import { CommissionType } from "../../entities";
import { GlobalCommissionImplementation } from "../../repositories/implementations/AdminImplementation";
import { globalCommissionModel } from "../../repositories/models";
import { addDot } from "../../utils/monetary";

const adminCommissionModel = globalCommissionModel;
const adminCommissionRepo = new GlobalCommissionImplementation(
  adminCommissionModel
);

export const verifyProductCommission = () => {};

export const verifyCategoryCommission = () => {};

export const verifyStoreCommission = () => {};

export const verifyGlobalCommission = async (): Promise<CommissionType> => {
  const getActualCommission: any = await adminCommissionRepo.getAll({});
  return getActualCommission.result[0];
};

export const applyCommission = async (price: number) => {
  const commission = await verifyGlobalCommission();
  const type = commission.commissionType;
  const calcPercentageResponse = () => {
    return +price - (+price / 100) * +commission.percentage;
  };
  const calcFixedResponse = () => {
    return price - addDot(+commission.fixed);
  };
  const calcFixedAndPercentageResponse = () => {
    const percentage = (+price / 100) * +commission.percentage;

    const fixed = price - addDot(+commission.fixed);

    return fixed - percentage;
  };

  const resultPrice =
    type === "fixed"
      ? calcPercentageResponse()
      : type === "percentage"
      ? calcFixedResponse()
      : calcFixedAndPercentageResponse();

  // console.log({ resultPrice });

  return resultPrice;
};
