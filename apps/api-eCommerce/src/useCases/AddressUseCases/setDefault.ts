import { Request, Response } from "express";
import { returnUserFromToken } from "../../utils/returnUserFromToken";
import { UsersRepository } from "../../repositories";

const userRepo = UsersRepository;

export const setDefaultAddress = async (req: Request, res: Response) => {
  try {
    const user = await returnUserFromToken(req);

    let { id } = req.params;

    const setDefault = await userRepo.updateUserInfo(user, {
      defaultAddress: `${id}`,
    });

    return res.json(setDefault);
  } catch (err) {
    console.log(err);
    return res.json("não foi possível criar coupon");
  }
};
