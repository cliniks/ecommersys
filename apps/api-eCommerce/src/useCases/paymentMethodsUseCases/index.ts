import { Request, Response } from "express";
import { del } from "../CrudUseCases/delete";
import { get } from "../CrudUseCases/get";
import { getAll } from "../CrudUseCases/getAll";
import { update } from "../CrudUseCases/update";
import { PaymentMethodRepository } from "../../repositories";
import { AddPaymentMethod } from "./addPaymentMethod";
import { mySellerCards, myUserCards } from "./getMyCards";

const paymentMethods = PaymentMethodRepository;

export const paymentMethodUseCases = {
  FindSingle: async (req: Request, res: Response) =>
    await get(req, res, paymentMethods),
  FindAll: async (req: Request, res: Response) =>
    await getAll(req, res, paymentMethods),
  myUserCards: async (req: Request, res: Response) =>
    await myUserCards(req, res, paymentMethods),
  mySellerCards: async (req: Request, res: Response) =>
    await mySellerCards(req, res, paymentMethods),
  Update: async (req: Request, res: Response) =>
    await update(req, res, paymentMethods),
  Delete: async (req: Request, res: Response) =>
    await del(req, res, paymentMethods),
  AddPaymentMethod: async (req: Request, res: Response) =>
    await AddPaymentMethod(req, res, paymentMethods),
  DeletePaymentMethod: async (req: Request, res: Response) =>
    await del(req, res, paymentMethods),
};
