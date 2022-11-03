

import React, { useState } from 'react'
import Footer from '../component/Footer'
import Header from '../component/Header'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { useUser } from '@auth0/nextjs-auth0'


const checkoutTwo = () => {
  // const { data: session } = useSession()
  const cart = useSelector((state) => state.cart)
  const router = useRouter()
  const { user, error, isLoading } = useUser()
  console.log(user);
  const [phoneNumber, setPhoneNumber] = useState('')
  const [address, setAddress] = useState('')
  const [note, setNote] = useState('')

  
  

  const submitComment = async () => {
    // this is to find where we want to post int
    await fetch('/api/Product', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            name:user.name,
            email:user.email,
            phoneNumber,
            address,
            note,
            description,
            category,
            subCategory,
            price

        }),
    })

    let data = await res.json()

}
  if (isLoading) return <div>Loading</div>
  if (user) {

    return (
      <div>
        <Header />
        <p className="checkoutTwo_Text text-6xl "> <span onClick={() => router.push('/checkoutOne')} className="GreyText cursor-pointer" >1</span ><span className="pl-5">-</span><span onClick={() => router.push('/checkoutTwo')} className='GreyText pl-4 cursor-pointer'>2</span><span className="pl-5">-</span><span className=' pl-4'>3</span></p>
        <p className='shipping_Header text-7xl mb-20  '>PAYMENT</p>

        <p className='shipping_Header text-7xl mb-20  '>{user.name}</p>

        <div className='flex justify-around'>
          <div>
            <a href='/api/auth/logout' className='checkoutHeader text-left ml-40' >GROUND - FREE</a>


            <div className='finalcheckout_details flex justify-center mr-40 pl-20 mt-4'>
              <input type='checkbox' />
              <p className="text-justify ml-10 smallerText">Based on national delays with the shipping providers , packages arrives within 5
                to 10 working days <br />from when it is shipped . Due to precautionary measures  at the warehouse
              </p>
            </div>
            <p className='checkoutHeader text-left ml-40 mt-10' >EXPRESS DELIVERY - $20</p>


            <div className='finalcheckout_details flex justify-center mr-40 pl-20 mt-4'>
              <input type='checkbox' />
              <p className="text-justify ml-10 smallerText ">Based on national delays with the shipping providers , packages arrives within 5
                to 10 working days <br />from when it is shipped . Due to precautionary measures  at the warehouse
              </p>
            </div>
          </div>
          <div>
            {

              cart.products.map((items) => (

                <div key={items._id}>

                  <hr className='cart' />
                  <div className='flex justify-around mt-6 mb-6'>
                    <div className="basis-1/4">
                      <img className='cartImg ml-20' src={items.images} />

                    </div>
                    <div className="mt-8 basis-1/2">
                      <div className='ml-40'>
                        <div>
                          <div className='checkoutHeader flex justify-start'>
                            <p className='text-2xl'>{items.name}</p>

                          </div>
                        </div>
                        <div className="flex justify-start mt-8">
                          <p className="smallerText font-semibold	">Color</p>
                          <div>
                            <div className='color flex justify-center ml-10'></div>
                          </div>
                        </div>
                        <div className="flex justify-start mt-4">
                          <p className='smallerText font-semibold'>size : {items.itemSize}</p>
                        </div>

                      </div>
                    </div>


                    <div className='basis-1/4'>
                      <p className='smallerText font-semibold text-3xl'>$ {items.price * items.amount}</p>


                    </div>

                  </div>

                  <hr className='cart' />
                </div>
              ))
            }
          </div>

        </div>

        <div className='flex justify-between mt-10'>
          <div>
            <div>
              <p className='checkoutHeader text-left ml-40 mt-10'>SHIPPING ADDRESS (*required)</p>
              <p className="text-justify ml-40 smallerText mt-4 ">Items will be deliverd directly to your doorstop , based on the given address</p>
              <div className=' mt-8 smallerText font-bold ml-20 flex jusify-around pl-20'>

                <div>
                  <p>Title </p>
                </div>

                <div className='flex jusify-around ml-20'>
                  <input type="checkbox" />
                  <p className="ml-2">Mr</p>
                </div>

                <div className='flex jusify-around ml-20'>
                  <input type="checkbox" />
                  <p className="ml-2">Ms</p>
                </div>

                <div className='flex jusify-around ml-20'>
                  <input type="checkbox" />
                  <p className="ml-2">Mrs</p>
                </div>

              </div>
              <form className='bg-white ml-24' action="/action.php">
                <input disabled className='fill mt-10' type="text" id="fname" placeholder={user.name} />
                <input className='fill mt-10' type="text" id="fname" placeholder={user.email} disabled />

                <input className='fill mt-10' type="text" id="fname" placeholder="Phone number" onChange={(e) => { setPhoneNumber(e.target.value) }} value={phoneNumber} />

                <input className='fill mt-10' type="text" id="fname" placeholder="Address" onChange={(e) => { setAddress(e.target.value) }} value={address} />


                <br />
                <textarea className='fill mt-10' id="txtid" name="txtname" rows="8" cols="100" maxlength="200" placeholder='Additiional Note' onChange={(e) => { setNote(e.target.value) }} value={note} >

                </textarea>

              </form>
            </div>

          </div>
          <div className='basis-1/3 mr-20'>
            <div className='flex justify-between final_checkout_Header'>
              <p>2 PRODUCTS</p>
              $ {cart.total}
            </div>
            <div className='flex justify-between smallerText font-semibold mt-4'>
              <p>Shipping</p>
              $ 0
            </div>
            <div className='flex justify-between smallerText font-semibold mt-4'>
              <p>VAT</p>
              $ 0
            </div>
            <hr className='checkout_Line' />
            <div className='flex justify-between smallerText font-semibold mt-4'>
              <p>TOTAL</p>
              <p>$ {cart.total}</p>
            </div>

            <div onClick={() => router.push('/checkoutTwo')} className='proceed_checkOut'>
              <p>Proceed to checkout</p>
            </div>
          </div>
        </div>



        <Footer />
      </div>
    )
  } else {

    return (
      <div>
        <Header />
        <p className="checkoutTwo_Text text-6xl "> <span onClick={() => router.push('/checkoutOne')} className="GreyText cursor-pointer" >1</span ><span className="pl-5">-</span><span className=' pl-4 cursor-pointer'>2</span><span className="pl-5">-</span><span className='GreyText pl-4'>3</span></p>
        <p className='shipping_Header text-7xl '>Shipping</p>
        <p className='shipping_subHeader  '>ENTER YOUR EMAIL ADDRESS TO <br /> CONTINUE</p>
        <p className='shipping_text mt-4'>    Email will be used to track your order . If you dont have an account <br /> you will be able to create one during the shipping process </p>

        <div className='email_Input'>
          <div>
            <input placeholder='Your email address' className='email_Input_bar' />
          </div>
          <div className='button_email'>
            <a className='shipping_text' href='/api/auth/login'  >Continue</a>
          </div>
        </div>
        <p className='shipping_text mt-10'>Sign up with your socials</p>
        <div className='flex justify-center mt-4'>
          <img className='mr-4 signUpIcon' src="https://img.icons8.com/ios-filled/50/000000/twitter.png" />
          <a className='shipping_text' href='/api/auth/login'  > <img className='signUpIcon' src="https://img.icons8.com/color/48/000000/google-logo.png" />
          </a>

        </div>
        <Footer />
      </div>
    )
  }
}

export default checkoutTwo