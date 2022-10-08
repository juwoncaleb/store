import { generateUploadUrl } from "../../utils/s3"

export default async function s3Url(req, res) {
  
    const url = await generateUploadUrl()
    res.send({url})
  
}

