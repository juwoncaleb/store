import React, { useState } from 'react'
import AddUser from './components/addUser'
import { useRouter } from 'next/router'

export default function Feild() {
    const router = useRouter()

    const [values, setValues] = useState({
        name: '',
        email: ''
    })

    const addNewUser = () => {
        console.log(values);
        setValues({ name: '', email: '' })
    }
    return (
        <div>
            <AddUser
                label='Name'
                value={values.name}
                onChange={(e) => setValues({ ...values, name: e.target.value })}
                inputProps={{ type: 'text', placeholder: 'name ' }}
            />
            <br />
            <AddUser
                label='Email'
                onChange={(e) => setValues({ ...values, email: e.target.value })}

                value={values.email}
                inputProps={{ type: 'Email', placeholder: 'email' }}
            />
            <p onClick={() => {
                addNewUser()
                router.push('/')
            }}>Submitt</p>
        </div>
    )
}
