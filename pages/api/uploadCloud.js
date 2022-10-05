import generateUploadUrl from '../../utils/s3'

export default async function aws(req, res) {
  if (req.method === 'GET') {
   const url = await generateUploadUrl()
   res.status(200).json({url})
  }
  
}