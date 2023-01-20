import { auth } from "./auth";
import { verifyToken } from "./verifyToken";
import { createEmailToken, confirmEmailToken } from "./emailToken";

export const authUseCases: any = {
  auth,
  verifyToken,
  createEmailToken,
  confirmEmailToken,
};
