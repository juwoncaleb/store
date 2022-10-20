import React from 'react'
import { useSelector } from 'react-redux'

export default function testing() {
    const user = useSelector((state) => state.user)
    return (
        <div>
            <p>{user.name}</p>
            <p>{user.email}</p>

        </div>
    )
}
 