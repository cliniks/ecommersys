import { Request, Response } from "express";

// import { IGatewayPagRepository } from "../../repositories/interfaces/IGatewayPagRepository";
import { returnUserFromToken } from "../../utils/returnUserFromToken";
import { User } from "../../entities/user.entitie";
import { IUserCheckoutProvider } from "../../providers/interfaces/IClientAsaasProvider";

export class UserUseCases {
  constructor(
    private GPProvider: IUserCheckoutProvider // Repository: IGatewayPagRepository
  ) {}
  async newClient(req: Request, res: Response) {
    try {
      const createClient = await this.GPProvider.newClient({ data: req.body });
      return res.json(createClient);
    } catch (err) {
      return res.status(400).send({ err });
    }
  }
  async genCharge(req: Request, res: Response) {
    try {
      const userData: User = await returnUserFromToken(req);
      const calculateShipping = await this.GPProvider.genCharge({
        data: req.body,
        client: userData,
        cartID: "1234",
      });
      return res.json(calculateShipping);
    } catch (err) {
      return res.status(400).send({ err });
    }
  }
  async getCharge(req: Request, res: Response) {
    try {
      const id = req.params.id;
      if (!id) return res.status(400).send("não foi possível encontrar Id");
      const userData: User = await returnUserFromToken(req);
      const calculateShipping = await this.GPProvider.getCharge({
        client: userData,
        chargeId: id as string,
      });
      return res.json(calculateShipping);
    } catch (err) {
      return res.status(400).send({ err });
    }
  }
}
