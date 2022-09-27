
// first find a way to bring the data from an external api or from a database
import { comments } from "../../../data/comment";

// once you get data in the project then make it in json format so it can be used 
export default function handler(req, res) {
    if (req.method === "GET") {
        res.status(200).json(comments)
    } else if (req.method === "POST") {
        const comment = req.body.comment
        // what is being pushed to the comment array
        const newComment = {
            // Date now gives  a uniqness to the id
            id: Date.now(),
            text : comment
        }
        // this is used to push the data in the comment array

        comments.push(newComment)
        res.status(201).json(newComment)
    }

}

