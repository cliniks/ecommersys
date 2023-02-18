export interface IRedisRepository {
  insertData(key: string, value: any): Promise<any>;
  insertString(key: string, value: string): Promise<any>;
  updateData(key: string, value: any): Promise<any>;
  removeData(key: string): Promise<any>;
  getData(key: string): Promise<any>;
  getHashData(key: string, field?: string): Promise<any>;
}
