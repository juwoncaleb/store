import React, { useState } from 'react'
import Footer from '../component/Footer'
import Header from '../component/Header'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'

export default function checkoutOne() {
  const router = useRouter()
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart.products)
  console.log(cart);
  return (
    <div>
      <Header />
      <p className="checkOne text-6xl "> <span >1</span ><span className="pl-5">-</span><span className='GreyText pl-4'>2</span><span className="pl-5">-</span><span className='GreyText pl-4'>3</span></p>
      <p className='shipping text-5xl mb-20'>CART</p>

      {
        cart.map((cartItem) => (
          <div key={cartItem._id}>
            <p>{cartItem.id}</p>

          </div>
        ))
      }
      <p>{cart.name}</p>

      <div className="mt-40 flex justify-between promo">
        <div>
          <p className='promoCode_Header checkoutHeader'>Promo Code</p>
          <div className='flex justify-around mt-6'>
            <input className='promoCode' placeholder='Enter your promo code' />

            <div className='ml-4 promoButton smallerText'>
              Apply
            </div>
          </div>
        </div>

        <div className='basis-1/3 mr-20'>
          <div className='flex justify-between final_checkout_Header'>
            <p>2 PRODUCTS</p>
            $ 200
          </div>
          <div className='flex justify-between smallerText font-semibold mt-4'>
            <p>Shipping</p>
            $ 10
          </div>
          <div className='flex justify-between smallerText font-semibold mt-4'>
            <p>VAT</p>
            $ 13
          </div>
          <hr className='checkout_Line' />
          <div className='flex justify-between smallerText font-semibold mt-4'>
            <p>TOTAL</p>
            <p>$350</p>
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
