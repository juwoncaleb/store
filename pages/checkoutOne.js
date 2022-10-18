import React from 'react'
import Footer from '../component/Footer'
import Header from '../component/Header'
import { useRouter } from 'next/router'

export default function checkoutOne() {
  const router = useRouter()

  return (
    <div>
      <Header />
      <p className="checkOne text-6xl "> <span >1</span ><span className="pl-5">-</span><span className='GreyText pl-4'>2</span><span className="pl-5">-</span><span className='GreyText pl-4'>3</span></p>
      <p className='shipping text-5xl mb-20'>CART</p>
      <hr className='cart' />
      <div className='flex justify-around mt-6 mb-6'>
        <div className="basis-1/4">
          <img className='cartImg ml-20' src="./dd.png" />

        </div>
        <div className="mt-8 basis-1/2">
          <div className='ml-40'>
            <div>
              <div className='checkoutHeader flex justify-start'>
                <p className='text-2xl'>Limted Multicolor Sweater</p>

              </div>
            </div>
            <div className="flex justify-start mt-8">
              <p className="smallerText font-semibold	">Color</p>
              <div>
                <div className='color flex justify-center ml-10'></div>
              </div>
              <p className="ml-20 smallerText font-semibold	count">- 1 +</p>
            </div>
            <div className="flex justify-start mt-4">
              <p className='smallerText font-semibold'>size : XXL</p>
            </div>

          </div>
        </div>


        <div className='basis-1/4'>
          <p className='smallerText font-semibold text-3xl'>$100</p>

        </div>

      </div>

      <hr className='cart' />
      <div className='flex justify-around mt-6 mb-6'>
        <div className="basis-1/4">
          <img className='cartImg ml-20' src="./slides.png" />

        </div>
        <div className="mt-8 basis-1/2">
          <div className='ml-40'>
            <div>
              <div className='checkoutHeader flex justify-start'>
                <p className='text-2xl'>Nike Benasassi Slides</p>

              </div>
            </div>
            <div className="flex justify-start mt-8">
              <p className="smallerText font-semibold	">Color</p>
              <div>
                <div className='black flex justify-center ml-10'></div>
              </div>
              <p className="ml-20 smallerText font-semibold	count">- 1 +</p>
            </div>
            <div className="flex justify-start mt-4">
              <p className='smallerText font-semibold'>size : 12</p>
            </div>

          </div>
        </div>


        <div className='basis-1/4'>
          <p className='smallerText font-semibold text-3xl'>$100</p>

        </div>

      </div>
      <hr className='cart' />
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
