import React from 'react'

export default function user({ users }) {
    return (
        <div>
            {
                users.map(user => {
                    return (
                        <div key={user.id}>
                            <p>{user.name}</p>
                            <p>{user.email}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export async function getStaticProps() {
    // this is used to fecth the data from the api end point
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    // this is used to convert the api we got into json
    const data = await response.json()
    //after fetching we shoild return 
    return {
        props: {
            users: data
        }
    }
}

