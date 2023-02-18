import { Request, Response } from "express";
import { returnUserFromToken } from "../../utils/returnUserFromToken";
import { IPaymentMethods } from "../../repositories/Interfaces/IPaymentMethodsRepository";

export const myUserCards = async (
  req: Request,
  res: Response,
  repo: IPaymentMethods
) => {
  try {
    const user = await returnUserFromToken(req);

    const myPaymentMethods = await repo.getAll({
      size: 20,
      page: 0,
      filter: { fields: "", key: "owner", value: user._id.toString() },
    });

    return res.json(myPaymentMethods);
  } catch (err) {
    console.log(err);

    return res.status(400).send("não foi possível achar");
  }
};

export const mySellerCards = async (
  req: Request,
  res: Response,
  repo: IPaymentMethods
) => {
  try {
    const user = await returnUserFromToken(req);

    const myPaymentMethods = await repo.getAll({
      size: 20,
      page: 0,
      filter: { fields: "", key: "owner", value: user.storeId },
    });

    return res.json(myPaymentMethods);
  } catch (err) {
    console.log(err);

    return res.status(400).send("não foi possível achar");
  }
};
