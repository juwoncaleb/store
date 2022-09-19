import React from 'react'
import Header from "./components/header";
import Footer from "./components/Footer";
import { useRouter } from 'next/router'

import Carousel from "react-elastic-carousel";

export default function selectedItem() {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },
      ];
    return (
        <div>
            <Header />
            <p className=" itemHeader ml-auto text-left">  <span className='cursor-pointer' onClick={() => router.push('/men')}>Women's L.12.12  Concept Zip Tote Bag</span>   <span className='GreyText ml-2'>   / Summer FIne</span></p>
            <p className='itemHeader_Main text-5xl text-left'>Women's L.12.12 <br /> Concept Zip Tote Bag</p>
            <p className=" itemHeader ml-auto text-left">  <span className='cursor-pointer' onClick={() => router.push('/men')}>PRODUCT REF. NF1880PD <br /> $100</span>   <span className='GreyText ml-2'>   / Summer FIne</span></p>
            <div className="App">
                <Carousel breakPoints={breakPoints}>
                    <Item>One</Item>
                    <Item>Two</Item>
                    <Item>Three</Item>
                    <Item>Four</Item>
                    <Item>Five</Item>
                    <Item>Six</Item>
                    <Item>Seven</Item>
                    <Item>Eight</Item>
                </Carousel>
            </div>
            <Footer />
        </div>
    )
}
