export declare type DocumentsType = {
  _id?: string;
  title: string;
  links: {
    front: string;
    back: string;
  };
  saleId: string;
  denyReason: string;
  type: possibleDocumentTypes;
  owner: string;
  valid: boolean;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
};
export declare type possibleDocumentTypes =
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
