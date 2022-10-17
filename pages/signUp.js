import React from 'react'
import { useRouter } from 'next/router'
export default function signUp() {
    const router = useRouter()

    return (
        
        <div className='flex justify-around'>
            {/* FORM */}
            

            <div className='leftBox'>

                <div className='mt-20'>

                    <p className=' text-4xl font-medium headerText '>Welcome to Lacoste </p>
                    <div className=' flex mt-10 '>
                        <p className='mt-3 loginText smallerText font-bold'>Please create your account .</p>
                    </div>
                    <br />
                    <div className="grid">
                        <input className='mt-10 inputSize' placeholder='Name' type='text' />
                        <input className='mt-10 inputSize' placeholder='Email' type='email' />
                        <input className='mt-10 inputSize' placeholder='Phone Number' type='password' />
                        <input className='mt-10 inputSize' placeholder='Password' type='password' />

                    </div>

                    

                    <div className='buttonLogin mt-10'>
                        <p className="smallerText mt-2">Signup</p>
                    </div>
                </div>
            </div>



            {/* IMAGE SECTION */}
            <div>
                <img onClick={() => router.push('/')} className=" signUpImg mt-10" src="./kofi.jpg" />
                <p className='smallerText text-4xl font-bold mt-4'>Life is not Perfect but Your Outfit Can be!</p>
            </div>
        </div>
    )
}
