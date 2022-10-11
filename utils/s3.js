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
    // randomize the name of the file once uploaded
    const result = Math.random().toString(36).substring(2, 7);


    const params = ({
        Bucket,
        Key: result,
        Expires: 60
    })
    const uploadUrl = await s3.getSignedUrlPromise('putObject', params)
    return uploadUrl
}