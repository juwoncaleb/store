import dbConnect from '../../utils/Mongo';
import clothes from '../../model/Clothes'
console.log(clothes);
export default async function ClothesSchema(req, res) {

    console.log("Connecting to the database...");
    await dbConnect()
    console.log("Connectied to the database...");

    console.log(req);
    if (req.method === "GET") {
        res.status(200).json(clothes.find());
    } else if (req.method === "POST") {
        const test = await clothes.insertOne(req.body)

        res.status(201).json("data saved", test)
    }


}
