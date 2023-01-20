export interface ICrudRepository {
  getOne(props: getOneProps): Promise<any>;
  getAll(props: getAllProps): Promise<any>;
  addOne(data: any): Promise<any>;
  update(id: string, data: any): Promise<any>;
  delete(id: string): Promise<any>;
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

export type filterProps = {
  key?: string;
  value?: any;
  fields?: string;
};
