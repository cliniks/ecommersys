const S3 = require("aws-sdk/clients/s3");
const fs = require("fs");

const bucketName = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_BUCKET_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_PRIVATE_KEY;

const s3 = new S3({
  region,
  accessKeyId,
  secretAccessKey,
});

const uploadImage = (file) => {
  const fileStream = fs.createReadStream(file.path);
  const uploadParams = {
    Bucket: bucketName,
    Body: fileStream,
    Key: file.filename,
  };

  return s3.upload(uploadParams).promise();
};

const deleteFile = async (file) => {
  try {
    const fileName = file.split("/")[3];
    const uploadParams = {
      Bucket: bucketName,
      Key: fileName,
    };
    return s3.deleteObject(uploadParams).promise();
  } catch (error) {
    return error;
  }
};

exports.uploadImage = uploadImage;
exports.deleteFile = deleteFile;
