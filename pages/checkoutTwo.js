import React from 'react'
import Footer from '../component/Footer'
import Header from '../component/Header'
import { useRouter } from 'next/router'
export default function checkoutTwo() {
  return (
    <div>
      <Header />
      <p className="checkoutTwo_Text text-6xl "> <span className="GreyText" >1</span ><span className="pl-5">-</span><span className=' pl-4'>2</span><span className="pl-5">-</span><span className='GreyText pl-4'>3</span></p>
      <p className='shipping_Header text-7xl '>Shipping</p>
      <p className='shipping_subHeader  '>ENTER YOUR EMAIL ADDRESS TO <br /> CONTINUE</p>
      <p className='shipping_text mt-4'>    Email will be used to track your order . If you dont have an account <br /> you will be able to create one during the shipping process </p>

      <div className='email_Input'>
        <div>
          <input placeholder='Your email address' className='email_Input_bar' />
        </div>
        <div className='button_email'>
          <p className='shipping_text '>Continue</p>
        </div>
      </div>
      <p className='shipping_text mt-10'>Sign up with your socials</p>
      <div className='flex justify-center mt-4'>
        <img className='mr-4 signUpIcon' src="https://img.icons8.com/ios-filled/50/000000/twitter.png" />
        <img className='signUpIcon' src="https://img.icons8.com/color/48/000000/google-logo.png" />
      </div>
      <Footer />
    </div>
  )
}
