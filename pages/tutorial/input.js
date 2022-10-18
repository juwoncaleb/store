import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { update } from '../../redux/userSlice'

export default function input() {
    const [name , setName] = useState('')
    const [email , setEmail] = useState('')
    const user =  useSelector((state) => state.user)
    const dispatch = useDispatch()
    const handleUpdate = (e)=>{
      // the payload i.e what is being carried by the redux is 
      dispatch(update({name, email}))

    }
    console.log(name);

  return (
    <div>
        <div>
            <label>Username</label>
            <input className='formInput' type="text" placeholder='john' onChange={e=> setName(e.target.value) }/>
        </div>
        <div>
            <label>Username</label>
            <input className='formInput' type="text" placeholder='john' onChange={e=> setEmail(e.target.value) }/>
        </div>

        <div onClick={handleUpdate}>
          send
        </div>

        <p>{name}</p>
        <p>{email}</p>
    </div>
  )
}
