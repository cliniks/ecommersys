import S3 from "aws-sdk/clients/s3";
import { fileType, IS3Repository } from "../Interfaces";
export declare class S3Repository implements IS3Repository {
    private s3;
    uploadImage(file: fileType): Promise<S3.ManagedUpload.SendData>;
    deleteFile: (file: string) => Promise<unknown>;
}
