import React,{useState} from 'react'
import { useRouter } from 'next/router'
import axios from 'axios';


export default function login() {
    const router = useRouter()
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState("")
    const [error, setError] = useState()
    
    const handleClick = async (e) => {
        try {
            await axios.post("http://localhost:3000/api/login", {userName, password})
            router.push("/summerFine")
        } catch (error) {
            console.log(error);
            setError(true)
        }
    }

    return (
        <div>
            <form className='bg-white ml-24' action="/action.php">
                <input onChange={(e) => setUserName(e.target.value)} className='fill mt-10' type="text" id="fname" placeholder="Name" />
                <input onChange={(e) => setPassword(e.target.value)} className='fill mt-10' type="text" id="fname" placeholder="Phone number" />

                <p onClick={()=>handleClick()}>Submit</p>
            </form>
            {error && <span>Wrong Credentials</span>}
            </div>
    )
}
