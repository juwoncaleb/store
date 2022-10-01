import generateUploadUrl from '../../utils/s3'

export default async function aws(req, res) {
   const url = await generateUploadUrl()
   res.send({url})
}