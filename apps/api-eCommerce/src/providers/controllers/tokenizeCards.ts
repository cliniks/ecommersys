import { Request, Response } from "express";
import { TokenizeCardUseCase } from "../useCases/tokenizeCard";
import { ClientAsaasImplementation } from "../implementations/ClientAsaasImplementation";

const gatewayPag = new ClientAsaasImplementation();

export const TokenizeCard = async (req: Request, res: Response) => {
  try {
    const create = await TokenizeCardUseCase(req.body, gatewayPag);
    res.status(200).send(create);
  } catch (err) {
    res.status(400).send("error");
  }
};
