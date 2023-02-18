import { EnumErrorHandling } from "../../errors/enumErrors";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { UsersRepository } from "../../repositories";

const userRepo = UsersRepository;

export const changePassword = async (req: Request, res: Response) => {
  try {
    const { password, email } = req.body;

    const getUser = await userRepo.getOne({ key: "username", value: email });

    if (!getUser) throw new Error("Usuário não possui conta registrada");

    const hashedNewPassword = await bcrypt.hash(password, 10);

    userRepo.update(`${getUser._id}`, {
      password: hashedNewPassword,
    });

    return res.json("Atualizado com sucesso!");
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .send(EnumErrorHandling[EnumErrorHandling.noUserWithThisEmail]);
  }
};
