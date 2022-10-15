import React from 'react'
import Footer from "../component/Footer";
import Header from "../component/Header";
import { useRouter } from 'next/router'


export default function summerFine() {
    const router = useRouter()

    return (
        <div>
            <Header />
            <p className=" itemHeader ml-auto text-left">  <span className='cursor-pointer' onClick={() => router.push('/men')}>Men</span>   <span className='GreyText ml-2'>   / Summer FIne</span></p>
            <p className='itemHeader_Main text-5xl text-left'>SUMMER FINE SELECTON</p>
           
            <Footer />
        </div>
    )
}


export const getServerSideProps = async () => {
  try {
    console.log("connecting to the database");
    await dbConnect();
    console.log("Database connected Successfully");
    console.log("Now fetching data ");
    const menModel = await Product.find();
    console.log("document fetched");

    return {
      props: {
        men: JSON.parse(JSON.stringify(menModel)),
      },
    };
  } catch (error) {
    console.log(error);

    return {
      notFound: true,
    };
  }
};