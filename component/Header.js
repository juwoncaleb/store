import React, { useState } from "react";
import { useRouter } from 'next/router'
import { useSelector } from "react-redux";

function Header() {
  const router = useRouter()
  const orderQuantity = useSelector((state) => state.cart.products.length)
  console.log(orderQuantity);
  return (

    <div className="">

      <div className="flex justify-between">
        <div className="flex justify-between lefticon">
          <img
            className="navIcon"
            src="https://img.icons8.com/ios/100/undefined/marker--v2.png"
          />
          <img
            className="navIcon moon"
            src="https://img.icons8.com/external-thin-kawalan-studio/96/undefined/external-dark-mode-user-interface-thin-kawalan-studio.png"
          />
        </div>


        <div onClick={() => router.push('/')}>
          <img onClick={() => router.push('/')} className="lacoste cursor-pointer" src="./logos.png" />
        </div>



        <div className="flex justify-around rightIcon">
          <img onClick={() => router.push('/auth')}
            className="navIcon"
            src="https://img.icons8.com/ios/50/undefined/search--v3.png"
          />
          <img
            onClick={() => router.push('/auth')}
            className="navIcon"
            src="https://img.icons8.com/ios/50/undefined/user--v3.png"
          />


          <div className="cursor-pointer" onClick={() => router.push('/checkoutOne')} >
          
            <img
              className="navIcon "
              src="https://img.icons8.com/ios/50/undefined/shopping-bag--v1.png"
            />
            <p className="cartCount"> 
             {orderQuantity}
          </p>
          </div>
        </div>
      </div>
      {/* HEADER TWO */}

      <hr className="border1 mt-1" />
      <div className="headerText flex justify-between ">
        <p className="mt-2 men cursor-pointer headeText " onClick={() => router.push('/men')}>MEN</p>

        <p className="mt-2  cursor-pointer	headeText" onClick={() => router.push('/women')}>WOMEN</p>

        <p className="mt-2  cursor-pointer	headeText" onClick={() => router.push('/kids')}>KIDS</p>
        <p className="mt-2  cursor-pointer	headeText" onClick={() => router.push('/shoes')}>SHOES</p>

        <p className="mt-2  dis cursor-pointer headeText	" onClick={() => router.push('/discount')}> DISCOUNT-SALE</p>
      </div>
      <hr className="border1 mt-3" />


      <div>

        {/* CAROUSEL */}
        <div>

        </div>
      </div>
    </div>
  );
}

export default Header;