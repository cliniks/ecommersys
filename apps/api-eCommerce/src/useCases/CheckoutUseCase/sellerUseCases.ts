import { Request, Response } from "express";
import { ISellerCheckoutProvider } from "../../providers/interfaces/ISellerCheckoutProvider";

export class SellerUseCases {
  constructor(private SellerProvider: ISellerCheckoutProvider) {}
  // Pré visualização de etiquetas

  async addStore(req: Request, res: Response) {
    try {
      const add = await this.SellerProvider.addStore(req.body);
      return res.json(add);
    } catch (err) {
      return res.status(400).send({ err });
    }
  }
  async confirmPayment(req: Request, res: Response) {
    try {
      const { orders }: any = req.body;

      const previewTags = await this.SellerProvider.confirmPayment(orders);
      return res.json(previewTags);
    } catch (err) {
      return res.status(400).send({ err });
    }
  }
  // Geração de etiquetas
  async getAccount(_: Request, res: Response) {
    try {
      const generateTag = await this.SellerProvider.getAccount();
      return res.json(generateTag);
    } catch (err) {
      return res.status(400).send({ err });
    }
  }
}
