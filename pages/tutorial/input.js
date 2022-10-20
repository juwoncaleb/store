import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { update } from '../../redux/userSlice'

export default function input() {
 
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()


  const handleUpdate = (e) => {
    e.preventDefault()
    // the payload i.e what is being carried by the redux is 
    dispatch(update({ name, email }))

  }
  console.log(name);

  return (
    <div>
      <div>
        <label>Username</label>
        <input className='formInput' type="text" placeholder='' onChange={e => setName(e.target.value)} />
      </div>
      <div>
        <label>Username</label>
        <input className='formInput' type="text" placeholder='' onChange={e => setEmail(e.target.value)} />
      </div>

      <div >
        <p onClick={handleUpdate}>SEND</p>
      </div>

      <p>{user.name}</p>
      <p>{user.email}</p>

    </div>
  )
}
