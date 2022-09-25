import { comments } from "../../../data/comment"

export default function handler(req, res) {
    // thos is to get the get the id in the req
    const { commentId } = req.query

    if (req.method === 'GET') {
        const comment = comments.find((comment) => comment.id === parseInt(commentId)

        )
        res.status(200).json(comment);

    }
    else if (req.method === 'DELETE') {
        // in th e comments arrary or database find where comment.id === commentId (from reqest ). Thie just gives the whole comment 

            const deletedComment = comments.find((comment) => comment.id === parseInt(commentId)
    
            )
            // this gives off the index of what wants to be deleted 
            const index = comments.indexOf((comment) => comment.id === parseInt(commentId))
            comments.splice(index, 1)
            res.status(200).json(deletedComment)
    }

} 
