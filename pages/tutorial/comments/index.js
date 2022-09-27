import { useState } from 'react'
function CommentPage() {
    // const [comments, setComments] = useState([])

    
    const [comment, setComment] = useState('')
    const fetchComments = async () => {
        const response = await fetch('/api/comment')
        let data = await response.json();
        console.log(data);
        setComments(data)
    }
    // this is to submitt to a databse 
    const submitComment = async () => {
        // this is to find where we want to post int
        const response = await fetch('/api/comment', {
            method: 'POST',
            body: JSON.stringify({ comment }),
            headers: {
                'content-type': 'application/json',
            },
        })

    }

    // To delete a comment
    const deleteComment = async (commmentId) => {
        // this is calling the api of the dynamic api shit , default method is always get , so always state the given method you want to use 

        const response = await fetch(`/api/comment/${commmentId}`, {
            method: 'DELETE',
        })
        const data = await response.json()
        console.log(data);
        // call the fetchComments syntax state earlier to retrieve the latest comments in the UI
        fetchComments()
    }
    return (
        <>
            <input type='text' value={comment} onChange={(e) => setComment(e.target.value)} />
            <div onClick={submitComment}>Submitt </div>
            <div onClick={fetchComments}>Load the api</div>
            {
                comments.map(comment => {
                    return (
                        <div key={comment.id}>
                            {comment.text}
                            <div className='cursor-pointer' onClick={() => deleteComment(comment.id)}> Delete  </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default CommentPage