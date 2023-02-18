import fs from "fs";
import S3 from "aws-sdk/clients/s3";
import { s3Config } from "../../config/connectS3";
import { fileType, IS3Repository } from "../Interfaces";

export class S3Repository implements IS3Repository {
  private s3 = new S3({
    region: s3Config.region,
    accessKeyId: s3Config.accessKeyId,
    secretAccessKey: s3Config.secretAccessKey,
  });

  async uploadImage(file: fileType) {
    const fileStream = fs.createReadStream(file.path);

    const uploadParams: any = {
      Bucket: s3Config.bucketName,
      Body: fileStream,
      Key: `Cliniks/Imagens/${file.originalname}`,
    };

    return this.s3.upload(uploadParams).promise();
  }

  deleteFile = async (file: string) => {
    try {
      const fileName = file.split("/")[3];
      const uploadParams: any = {
        Bucket: s3Config.bucketName,
        Key: fileName,
      };
      return this.s3.deleteObject(uploadParams).promise();
    } catch (error) {
      return error;
    }
  };
}
