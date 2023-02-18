export interface ICrudRepository<E> {
  getOne?: (props: getOneProps) => Promise<E>;
  getAll?: (props: getAllProps) => Promise<getAllReturn<E>>;
  addOne?: (data: E) => Promise<E>;
  update?: (id: string, data: Partial<E>) => Promise<E>;
  delete?: (id: string) => Promise<any>;
}

export type getOneProps = {
  key: string;
  value: any;
};

export type getAllProps = {
  page?: number;
  size?: number;
  filter?: filterProps;
};
export type getAllReturn<E> = {
  result: E[];
  totalItems: number;
  pageSize: number;
  thisPage: number;
  totalPage: number;
};

export type filterProps = {
  key?: string;
  value?: any;
  fields?: string;
};
