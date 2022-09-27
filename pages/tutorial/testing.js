import React from 'react'
import { useRouter } from 'next/router'

const users = [{ id: 1, name: 'John', email: 'john@gmail.com' },
{ id: 2, name: '  john', email: 'john@gmail.com' },];

const renderCard = () => users.map((user) => (


    <div className="bg-gray-300 p-5 flex items-center justify-between" key={users.id}>
        <div>
            <h3 className='font-bold text-lg text-gray-700'>{user.name}</h3>
            <span className="font-normal text-gray-600">{user.email}</span>
        </div>
        <div>
        <p onClick={()=>router.push(`edit-user/${user.id}`)}> UPdATE</p>

     </div>
    </div>))



export default function testing() {
    const router = useRouter()

    return (
        <div className='grid gap-5 mid:grid' >
            {users.length ? renderCard() : <p className='text-center col-span-2 text-gray-700 font-semibold'>No User</p>}
       <p onClick={() => router.push('/feild')}>ADDD</p> 
       <p onClick={()=>router.push(`edit-user/${user.id}`)}> UPdATE</p>
            <p> delete</p>
        </div >
    )
}
