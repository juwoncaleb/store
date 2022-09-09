import React from 'react'
import Header from "./components/header";
import Footer from "./components/Footer";
import { useRouter } from 'next/router'
import { Carousel } from 'react-responsive-carousel';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function summerFine() {
    const router = useRouter()

    return (
        <div>
            <Header />
            <p className=" itemHeader ml-auto text-left">  <span className='cursor-pointer' onClick={() => router.push('/men')}>Men</span>   <span className='GreyText ml-2'>   / Summer FIne</span></p>
            <p className='itemHeader_Main text-5xl text-left'>SUMMER FINE SELECTON</p>
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
            <Footer />
        </div>
    )
}
