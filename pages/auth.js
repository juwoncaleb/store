
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"

const auth = () => {
    const { data: session } = useSession()
    if (session) {
        return (
            <div>
                <p> Welcome , {session.user.name}</p>
                <p onClick={() => signOut()}>SignOut</p>
            </div>)
    } else {
        return (
            <div className='flex justify-around'>
                {/* FORM */}

                <div className='leftBox'>
                    <img onClick={() => router.push('/')} className="lacoste cursor-pointer" src="./logos.png" />


                    <div className='mt-20'>

                        <p className=' text-4xl font-medium headerText '>Welcome to Lacoste </p>
                        <p className='smallerText text-1xl  mt-6'>Please enter your account details</p>
                        <div onClick={() => signIn()} className='loginButton flex mt-10 '>
                            <img className="google cursor-pointer" src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" />
                            <p className='mt-3 loginText smallerText font-bold'>Log in with Google</p>
                        </div>

                        <br />


                    </div>
                </div>



                {/* IMAGE SECTION */}
                <div>
                    <img onClick={() => router.push('/')} className=" mt-10" src="./trevv.png" />
                    <p className='smallerText text-4xl font-bold mt-4'>Dress like you’re already famous</p>
                    <p className='smallerText text-4xl font-bold mt-4' >Simply elegant.</p>
                </div>
            </div>
        )
    }
}
export default auth
