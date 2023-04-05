import { Request, Response } from "express";
import { ISalesRepository } from "../../repositories/Interfaces";
import { ClientAsaasImplementation } from "../../providers/implementations/ClientAsaasImplementation";

const gatewayPag = new ClientAsaasImplementation();

export const cancelOrder = (
  req: Request,
  res: Response,
  repo: ISalesRepository
) => {
  try {
    // const CancelOrderOnAsaas = gatewayPag;
    res.json(true);
  } catch (err) {
    res.status(400).send(err.toString());
  }
};
