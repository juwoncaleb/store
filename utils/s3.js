import aws from 'aws-sdk';
import dotenv from 'dotenv'
dotenv.config()
 // Using AWS s3 bucket Details
 const region = 'us-west-2'
 const bucketName = ''
 const accessKeyId = process.env.AWS_ACCESS_KEY_ID
 const secretAccessKey = process.env.AWS_SECRET_KEY

 // this initializes the s3 bucket
 const s3 = new aws.S3({
     region,
     accessKeyId,
     secretAccessKey,
     signatureVersion: 'v4'
 })
 // Aws URL
 export async function generateUploadUrl() {
     const imageName = "Random Image "

     const params = ({
         bucketName: bucketName,
         key: imageName,
         Expires: 60
     })
     const uploadUrl = await s3.getSignedUrlPromise('putObject', params)
     return uploadUrl
 }

