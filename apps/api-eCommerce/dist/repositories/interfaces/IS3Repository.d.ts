export interface IS3Repository {
    uploadImage(file: fileType): Promise<any>;
    deleteFile(file: string): Promise<any>;
}
export declare type fileType = {
    fieldname: string;
    originalname: string;
    encoding: string;
    mimetype: string;
    destination: string;
    filename: string;
    path: string;
    size: number;
};
