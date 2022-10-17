import React from 'react'
import Footer from '../component/Footer'
import Header from '../component/Header'
import Link from "next/link"


export default function summerFine({ allProducts }) {
    return (
        <div>
            <Header />
            <p className=" itemHeader ml-auto text-left">  <span className='cursor-pointer' onClick={() => router.push('/men')}>Men</span>   <span className='GreyText ml-2'>   / Summer FIne</span></p>
            <p className='itemHeader_Main text-5xl text-left'>SUMMER FINE SELECTON</p>
            <div class="grid productSection lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 mt-10">
                {
                    allProducts.map((summerFineItem) => (
                        <Link href={`/summerFineItem/${summerFineItem._id}`} passHref>
                            <div className='productGrid' key={summerFineItem._id}>
                                <img className='productImages' src={summerFineItem.images} />
                                <br />
                                {summerFineItem.name}
                                <br />
                                {summerFineItem.price}
                            </div>
                        </Link>
                    ))
                }
            </div>
            <Footer />
        </div>
    )
}

export async function getServerSideProps() {
    const prodRes = await fetch("http://localhost:3000/api/products")
    const data = await prodRes.json()
    console.log(data);
    return {
        props: {
            allProducts: data
        }
    }
}