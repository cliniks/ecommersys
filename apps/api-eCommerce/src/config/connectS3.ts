export const s3Config = {
  bucketName: process.env.AWS_BUCKET_NAME,
  region: process.env.AWS_BUCKET_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_PRIVATE_KEY,
};
