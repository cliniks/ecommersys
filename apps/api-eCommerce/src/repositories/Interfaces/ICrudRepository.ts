export interface ICrudRepository {
  getOne({ key, value }: getOneProps): Promise<any>;
  getAll(): Promise<any>;
  addOne(data: any): Promise<any>;
  update(id: string, data: any): Promise<any>;
  delete(id: string): Promise<any>;
}

export type getOneProps = {
  key: string;
  value: any;
};
