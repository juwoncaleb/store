import dbConnect from '../../utils/Mongo';
import productModel from '../../model/Product'
export default async function productSchema(req, res) {

    console.log(productModel);
    console.log("Connecting to the database...");
    await dbConnect()
    console.log("Connectied to the database...");

    console.log(req);
    if (req.method === "GET") {
        res.status(200).json(Product.find());
    } else if (req.method === "POST") {
        const newItem = req.body
        await Product.insertOne(newItem).then(result => {
            res.status(200).json(result)
        })
            .catch(error => {
                res.status(500).json({ error : 'couldnt create new product'})
            }
            )
    }


}
