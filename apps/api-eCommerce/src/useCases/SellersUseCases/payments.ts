import { Request, Response } from "express";
// import { ISellersRepository } from "../../repositories/Interfaces/ISellersRepository";

export const getCards = async (
  _: Request,
  res: Response
  // repo: ISellersRepository
) => {
  try {
    // retornar todos os cards
    return res.json({});
  } catch (err) {
    console.log(err);
    return res.status(400).send("não foi possível solicitar.");
  }
};

export const getCard = async (
  _: Request,
  res: Response
  // repo: ISellersRepository
) => {
  try {
    // retornar um card
    return res.json({});
  } catch (err) {
    console.log(err);
    return res.status(400).send("não foi possível solicitar.");
  }
};

export const addCard = async (
  _: Request,
  res: Response
  // repo: ISellersRepository
) => {
  try {
    // adicionar um card
    return res.json({});
  } catch (err) {
    console.log(err);
    return res.status(400).send("não foi possível solicitar.");
  }
};

export const updateCard = async (
  _: Request,
  res: Response
  // repo: ISellersRepository
) => {
  try {
    // atualizar um card
    return res.json({});
  } catch (err) {
    console.log(err);
    return res.status(400).send("não foi possível solicitar.");
  }
};

export const deleteCard = async (
  _: Request,
  res: Response
  // repo: ISellersRepository
) => {
  try {
    // deletar um card
    return res.json({});
  } catch (err) {
    console.log(err);
    return res.status(400).send("não foi possível solicitar.");
  }
};

export const paymentsPageInfo = async (
  _: Request,
  res: Response
  // repo: ISellersRepository
) => {
  try {
    // retornar transferências
    // retornar dívidas
    // retornar requisições
    // retornar pagamentos
    // retornar transferências
    // retornar transferências

    return res.json({});
  } catch (err) {
    console.log(err);
    return res.status(400).send("não foi possível solicitar.");
  }
};
