import { Request, Response } from "express";
import { IStoreSolicitate } from "../../repositories/Interfaces/IStoreSolicitationRepository";
import { returnUserFromToken } from "../../utils/returnUserFromToken";
import { makeApi } from "../../services/axiosInstance";

export const solicitate = async (
  req: Request,
  res: Response,
  repo: IStoreSolicitate
) => {
  try {
    const { name, storeInfo } = req.body;
    console.log(name, storeInfo);
    const getUser = await returnUserFromToken(req);

    const hasSolicitation = await repo.getOne({
      key: "owner",
      value: getUser._id,
    });

    makeApi.post("", {
      type: "sellerSolicitation",
      userInfo: getUser.userInfo,
      storeInfo: hasSolicitation.storeInfo,
    });

    if (!hasSolicitation || hasSolicitation.owner !== `${getUser._id}`) {
      const add = await repo.addOne({
        name,
        storeInfo,
        owner: `${getUser._id}`,
        isActive: false,
      });

      return res.json(add);
    }

    return res.json(hasSolicitation);
  } catch (err: any) {
    console.log(err.message);
    return res.status(400).send("não foi possível solicitar.");
  }
};
