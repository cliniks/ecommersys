import { Request, Response } from "express";
import { IUserCheckoutProvider } from "../../providers/interfaces/IClientAsaasProvider";
import { ISellerCheckoutProvider } from "../../providers/interfaces/ISellerCheckoutProvider";
import { ICheckoutRepository } from "../../repositories/Interfaces";
import { UserUseCases } from "./clientUseCases";
import { SellerUseCases } from "./sellerUseCases";
import { update } from "../CrudUseCases/update";
import { del } from "../CrudUseCases/delete";
import { createCheckout } from "./createCheckout";

export class CheckoutUseCases {
  public asaas: {
    clientUseCases: UserUseCases;
    sellerUseCases: SellerUseCases;
  };
  constructor(
    public repo: ICheckoutRepository,
    public clientGPProvider: IUserCheckoutProvider,
    public sellerGPProvider: ISellerCheckoutProvider
  ) {
    this.asaas.clientUseCases = new UserUseCases(clientGPProvider);
    this.asaas.sellerUseCases = new SellerUseCases(sellerGPProvider);
  }

  create = (req: Request, res: Response) => createCheckout(req, res, this.repo);
  update = (req: Request, res: Response) => update(req, res, this.repo);
  delete = (req: Request, res: Response) => del(req, res, this.repo);
}

// export default new CheckoutUseCases()
