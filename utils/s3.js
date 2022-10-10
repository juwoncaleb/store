import aws from 'aws-sdk';


// Using AWS s3 bucket Details
const region = "us-west-2";
const Bucket = 'storeecom'
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
    const imageName =  "r"

    const params = ({ 
        Bucket,
        Key: imageName,
        Expires: 60
    })
    const uploadUrl = await s3.getSignedUrlPromise('putObject', params)
    return uploadUrl
}