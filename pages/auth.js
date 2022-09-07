import React from 'react'
import { useRouter } from 'next/router'

export default function auth() {
    const router = useRouter()

    return (
        <div className='flex jusify-between'>
            {/* FORM */}

            <div>
                <div>
                    <img onClick={() => router.push('/')} className="lacoste cursor-pointer" src="./logos.png" />

                </div>

                <p className=' text-4xl font-medium headerText '>Welcome to Lacoste </p>
                <p className='smallerText text-1xl font-light  '>Please enter your account details</p>
                <button className='loginButton'>
                    <img onClick={() => router.push('/')} className="lacoste cursor-pointer" src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" />
                    </button>
                    <br/>
                {/* <input placeholder='Email' type='text' />
                <input placeholder='Password' type='password' /> */}

                <div>
                    <div>
                        <input type="checkbox" />
                        <p>Remember on this device</p>
                    </div>

                    <p>Forgot password ?</p>
                </div>

                <button type="button"> Login</button>
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
