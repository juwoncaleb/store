import React from 'react'
import { useRouter } from 'next/router'

export default function auth() {
    const router = useRouter()

    return (
        <div className='flex justify-around'>
            {/* FORM */}

            <div>
                <div>
                    <img onClick={() => router.push('/')} className="lacoste cursor-pointer" src="./logos.png" />

                </div>

                <p className=' text-4xl font-medium headerText '>Welcome to Lacoste </p>
                <p className='smallerText text-1xl  '>Please enter your account details</p>
                <div className='loginButton flex  '>
                    <img onClick={() => router.push('/')} className="google cursor-pointer" src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" />
               <p className='mt-3 loginText smallerText font-bold'>Log in with Google</p>
                </div>
                <br />
             <div className="grid">
             <input  className='mt-10 inputSize' placeholder='Email' type='text' />
                <input  className='mt-10 inputSize' placeholder='Password' type='password' />
             </div>

                <div className="flex justify-around mt-6">
                    <div className="flex justify-around pr-10">
                        <input type="checkbox" />
                        <p className="pl-4">Remember on this device</p>
                    </div>

                    <p>Forgot password ?</p>
                </div>

                <button type="buttonLogin"> Login</button>
                <p>Dont have an account ? Sign up for free</p>
            </div>

            {/* IMAGE SECTION */}
            <div>
                <img onClick={() => router.push('/')} className="lacoste cursor-pointer" src="./trevv.png" />
                <p>Dress like you’re already famous</p>
                <p>Simply elegant.</p>
            </div>
        </div>
    )
}
