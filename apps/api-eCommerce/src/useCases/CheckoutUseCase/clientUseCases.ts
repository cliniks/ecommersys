import { Request, Response } from "express";
import { UserModelType } from "../../models/user.model";
import { IUserCheckoutProvider } from "../../providers/IClientAsaasProvider";
import { IGatewayPagRepository } from "../../repositories/interfaces/IGatewayPagRepository";
import { returnUserFromToken } from "../../utils/returnUserFromToken";

export class UserUseCases {
  constructor(
    private GPProvider: IUserCheckoutProvider,
    Repository: IGatewayPagRepository
  ) {}
  async newClient(req: Request, res: Response) {
    try {
      const createClient = await this.GPProvider.newClient({ data: req.body });
      res.json(createClient);
    } catch (err) {
      res.status(400).send({ err });
    }
  }
  async genCharge(req: Request, res: Response) {
    try {
      const userData: UserModelType = await returnUserFromToken(req);
      const calculateShipping = await this.GPProvider.genCharge({
        data: req.body,
        client: userData,
        cartID: "1234",
      });
      res.json(calculateShipping);
    } catch (err) {
      res.status(400).send({ err });
    }
  }
  async getCharge(req: Request, res: Response) {
    try {
      const userData: UserModelType = await returnUserFromToken(req);
      const calculateShipping = await this.GPProvider.getCharge({
        client: userData,
        chargeId: req.params.id,
      });
      res.json(calculateShipping);
    } catch (err) {
      res.status(400).send({ err });
    }
  }
}
