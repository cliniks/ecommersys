"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentsPageInfo = exports.deleteCard = exports.updateCard = exports.addCard = exports.getCard = exports.getCards = void 0;
// import { ISellersRepository } from "../../repositories/Interfaces/ISellersRepository";
const getCards = async (_, res
// repo: ISellersRepository
) => {
    try {
        // retornar todos os cards
        res.json({});
    }
    catch (err) {
        console.log(err);
        res.status(400).send("não foi possível solicitar.");
    }
};
exports.getCards = getCards;
const getCard = async (_, res
// repo: ISellersRepository
) => {
    try {
        // retornar um card
        res.json({});
    }
    catch (err) {
        console.log(err);
        res.status(400).send("não foi possível solicitar.");
    }
};
exports.getCard = getCard;
const addCard = async (_, res
// repo: ISellersRepository
) => {
    try {
        // adicionar um card
        res.json({});
    }
    catch (err) {
        console.log(err);
        res.status(400).send("não foi possível solicitar.");
    }
};
exports.addCard = addCard;
const updateCard = async (_, res
// repo: ISellersRepository
) => {
    try {
        // atualizar um card
        res.json({});
    }
    catch (err) {
        console.log(err);
        res.status(400).send("não foi possível solicitar.");
    }
};
exports.updateCard = updateCard;
const deleteCard = async (_, res
// repo: ISellersRepository
) => {
    try {
        // deletar um card
        res.json({});
    }
    catch (err) {
        console.log(err);
        res.status(400).send("não foi possível solicitar.");
    }
};
exports.deleteCard = deleteCard;
const paymentsPageInfo = async (_, res
// repo: ISellersRepository
) => {
    try {
        // retornar transferências
        // retornar dívidas
        // retornar requisições
        // retornar pagamentos
        // retornar transferências
        // retornar transferências
        res.json({});
    }
    catch (err) {
        console.log(err);
        res.status(400).send("não foi possível solicitar.");
    }
};
exports.paymentsPageInfo = paymentsPageInfo;
