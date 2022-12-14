import React from 'react'
import Footer from '../component/Footer'
import Header from '../component/Header'
import Link from "next/link"
import axios from 'axios'


export default function SummerFine({ allProducts }) {
    const isServerReq = req => !req.url.startsWith('/_next');

    return (
        <div>
            <Header />
            <p className=" itemHeader ml-auto text-left">  <span className='cursor-pointer' onClick={() => router.push('/men')}>Men</span>  </p>
            <p className='itemHeader_Main text-5xl text-left'>SUMMER FINE SELECTON</p>
            <div className="grid productSection lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 mt-10">
                {
                    allProducts.map((summerFineItem) => (
                        <Link href={`/summerFineItem/${summerFineItem._id}`} passHref  key={summerFineItem._id}>
                            <div className='productGrid ' key={summerFineItem._id}>
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

export const getServerSideProps = async ()=> {
   let prodRes =    await axios.get("http://lacostestore.vercel.app/api/products") 
    return {
        props: {
            allProducts: prodRes.data
        }
    }
}