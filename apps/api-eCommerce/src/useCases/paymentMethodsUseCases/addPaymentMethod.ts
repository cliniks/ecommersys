import { Request, Response } from "express";
import { IPaymentMethods } from "../../repositories/Interfaces/IPaymentMethodsRepository";
import { returnUserFromToken } from "../../utils/returnUserFromToken";
import { TokenizeCardUseCase } from "../../providers/useCases/tokenizeCard";
import { ClientAsaasImplementation } from "../../providers/implementations/ClientAsaasImplementation";

const gatewayPag = new ClientAsaasImplementation();

export const AddPaymentMethod = async (
  req: Request,
  res: Response,
  repo: IPaymentMethods
) => {
  try {
    const user = await returnUserFromToken(req);

    const create = await TokenizeCardUseCase(req.body, gatewayPag);

    let toAdd: any = { ...create, owner: user._id };

    return res.json(await repo.addOne(toAdd));
  } catch (err: any) {
    console.error(err.toString());

    return res.status(400).send("não foi possível adicionar o cartão");
  }
};
