import React from 'react'
import { useSelector } from 'react-redux'

export default function testing() {
    const nameOfperson = useSelector(state => state.user.name)
    return (
        <div>
            <p>{nameOfperson}</p>
        </div>
    )
}
