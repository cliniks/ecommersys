export type MECartProduct = {
  id: string;
  width: number;
  height: number;
  length: number;
  weight: number;
  insurance_value: number;
  quantity: number;
};

export type MECalculateTagInfo = {
  postal_code: string;
};

export type MEGenerateTag = {
  name: string;
  phone: string;
  email: string;
  document: string;
  company_document: string;
  state_register: string;
  address: string;
  complement: string;
  number: string;
  district: string;
  city: string;
  country_id: string;
  postal_code: string;
  note: string;
};
