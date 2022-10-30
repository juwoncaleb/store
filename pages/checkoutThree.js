import React from 'react'
import Footer from '../component/Footer'
import Header from '../component/Header'
import { useRouter } from 'next/router'
import { useSession, signIn, signOut } from "next-auth/react"


import { useDispatch, useSelector } from 'react-redux'

export default function checkoutThree() {
  const router = useRouter()
  const { data: session } = useSession()

  const cart = useSelector((state) => state.cart)

  return (
    <div>
      <Header />
      <p className="checkoutTwo_Text text-6xl "> <span onClick={() => router.push('/checkoutOne')} className="GreyText cursor-pointer" >1</span ><span className="pl-5">-</span><span onClick={() => router.push('/checkoutTwo')} className='GreyText pl-4 cursor-pointer'>2</span><span className="pl-5">-</span><span className=' pl-4'>3</span></p>
      <p className='shipping_Header text-7xl mb-20  '>PAYMENT</p>


      <div className='flex justify-around'>
        <div>
          <p className='checkoutHeader text-left ml-40' >GROUND - FREE</p>


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
              <input className='fill mt-10' type="text" id="fname" placeholder={name} />
              <input className='fill mt-10' type="text" id="fname" placeholder="Phone number" />
              <input className='fill mt-10' type="text" id="fname" placeholder="Email" />

              <input className='fill mt-10' type="text" id="fname" placeholder="Street" />
              <input className='fill mt-10' type="text" id="fname" placeholder="State" />


              <br />
              <textarea className='fill mt-10' id="txtid" name="txtname" rows="8" cols="100" maxlength="200" placeholder='Additiional Note'  >

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
}
