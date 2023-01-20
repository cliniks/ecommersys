import { Response } from "express";
import { defaultErrors } from "./defaultErrors";
import { EnumErrorHandling } from "./enumErrors";

export const ErrorHandling = ({ code, message, res }: ErrorHandling) => {
  return res.status(400).json({
    code: code,
    message: !message ? Response(code) : message,
  });
};

const Response = (code: EnumErrorHandling): { message: string } => {
  let response: { message: string } = { message: "" };
  if (!code) {
    response.message = defaultErrors.default;
    return response;
  }
  response.message = EnumErrorHandling[code] || defaultErrors.default;
  return response;
};

export type ErrorHandling = {
  code: EnumErrorHandling;
  message?: string;
  res: Response;
};
