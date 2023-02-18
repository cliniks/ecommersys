import { Schema } from "mongoose";

export const DocumentsSchema = new Schema(
  {
    title: { type: String, require: true },
    links: {
      front: String,
      back: String,
    },
    type: String,
    owner: String,
    obs: String,
    valid: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

export type DocumentsType = {
  _id?: string;
  title: string;
  links: {
    front: string;
    back: string;
  };
  type: possibleDocumentTypes;
  owner: string;
  valid: boolean;
  obs: string;
  isActive: boolean;
  createdAt?: string;
  updatedAt?: string;
};

export type possibleDocumentTypes =
  | "cnpj"
  | "identidadePessoal"
  | "contratoSocial"
  | "cro"
  | "crm"
  | "crbm"
  | "crf"
  | "crt"
  | "alvara"
  | "receituario"
  | "cartaCiencia"
  | "lgpd"
  | "certificado";
