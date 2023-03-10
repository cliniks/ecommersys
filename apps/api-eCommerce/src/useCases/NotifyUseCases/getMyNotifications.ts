import { Request, Response } from "express";
import { notifyRepository } from "../../repositories";
import { returnUserFromToken } from "../../utils/returnUserFromToken";
import { getAllProps } from "../../repositories/Interfaces";

const notifyRepo = notifyRepository;

export const getMyUserNotifications = async (req: Request, res: Response) => {
  try {
    const user = await returnUserFromToken(req);
    const { page, size, filter } = req.query;
    const filterConfirm: getAllProps["filter"] =
      typeof filter === "string" ? JSON.parse(filter) : filter;

    let notifies = [];

    const getAllMyNotify = await notifyRepo.getAll({
      page: page && +page,
      size: size && +size,
      filter: {
        key: "directionId " + filterConfirm?.key,
        value: user._id + " " + filterConfirm?.value,
        fields: filterConfirm?.fields,
      },
    });

    notifies.push(...getAllMyNotify.result);

    const getAllClientsNotify = await notifyRepo.getAll({
      page: page && +page,
      size: size && +size,
      filter: {
        key: "direction " + filterConfirm?.key,
        value: "allClients " + filterConfirm?.value,
        fields: filterConfirm?.fields,
      },
    });

    notifies.push(...getAllClientsNotify.result);

    return res.json(notifies);
  } catch (err: any) {
    return res
      .status(400)
      .send(`Não foi possível encontrar as notificações, ${err.toString()}`);
  }
};

export const getMySellerNotifications = async (req: Request, res: Response) => {
  try {
    const user = await returnUserFromToken(req);
    const { page, size, filter } = req.query;
    const filterConfirm: getAllProps["filter"] =
      typeof filter === "string" ? JSON.parse(filter) : filter;

    let notifies = [];

    const getAllMyNotify = await notifyRepo.getAll({
      page: page && +page,
      size: size && +size,
      filter: {
        key: "directionId " + filterConfirm?.key,
        value: user.storeId + " " + filterConfirm?.value,
        fields: filterConfirm?.fields,
      },
    });

    notifies.push(...getAllMyNotify.result);

    const getAllClientsNotify = await notifyRepo.getAll({
      page: page && +page,
      size: size && +size,
      filter: {
        key: "direction " + filterConfirm?.key,
        value: "allStores " + filterConfirm?.value,
        fields: filterConfirm?.fields,
      },
    });

    notifies.push(...getAllClientsNotify.result);

    return res.json(notifies);
  } catch (err) {
    return res
      .status(400)
      .send(`Não foi possível encontrar as notificações, ${err.toString()}`);
  }
};

export const getMyGlobalNotifications = async (req: Request, res: Response) => {
  try {
    const { page, size, filter } = req.query;
    const filterConfirm: getAllProps["filter"] =
      typeof filter === "string" ? JSON.parse(filter) : filter;
    return res.json(
      await notifyRepo.getAll({
        page: page && +page,
        size: size && +size,
        filter: {
          key: "direction " + filterConfirm?.key,
          value: "global  " + filterConfirm?.value,
          fields: filterConfirm?.fields,
        },
      })
    );
  } catch (err) {
    return res
      .status(400)
      .send(`Não foi possível encontrar as notificações, ${err.toString()}`);
  }
};
