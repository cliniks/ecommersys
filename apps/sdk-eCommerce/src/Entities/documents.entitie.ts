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
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
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
