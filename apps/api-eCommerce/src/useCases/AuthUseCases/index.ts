import { auth, verifyAccountExistence } from "./auth";
import { verifyToken } from "./verifyToken";
import { createEmailToken, confirmEmailToken } from "./emailToken";
import { changePassword } from "./changePassword";

export const authUseCases: any = {
  auth,
  verifyToken,
  verifyAccountExistence,
  changePassword,
  createEmailToken,
  confirmEmailToken,
};
