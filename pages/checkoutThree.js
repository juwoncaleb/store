import React from 'react'
import Footer from '../component/Footer'
import Header from '../component/Header'
export default function checkoutThree() {
  return (
    <div>
      <Header />
      <p className="checkoutTwo_Text text-6xl "> <span className="GreyText" >1</span ><span className="pl-5">-</span><span className='GreyText pl-4'>2</span><span className="pl-5">-</span><span className=' pl-4'>3</span></p>
      <p className='shipping_Header text-7xl mb-20  '>PAYMENT</p>

      <div className=" flex justify-between">
        <div>
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
          </div>
         



          {/* FINAL CART */}

        </div>












        <div>
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
          <div className=' mr-20'>
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

            <div className='proceed_checkOut'>
              <p>Proceed to checkout</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
