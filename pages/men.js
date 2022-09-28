import React, { useEffect, useState, useMemo } from "react";
// import dbConnect from "../../utils/Mongo";
// import Product from "../../model/Product";
// import axios from "axios";

import { useRouter } from 'next/router'
import Footer from "../component/Footer";
import Header from "../component/Header";

// AUTHENTICATION
import {useSession , signIn, signOut} from "next-auth/react"
export default function men() {
  const router = useRouter()
const {data:session} = useSession()


  return (
    <div className="newBack">
            <Header/>
      <p className="headerText text-1xl mt-10">LACOSTE FOR MEN</p>

      <p className="headerText text-8xl mt-5 mb-5">The New Collection</p>

      <img className="menfashion ml-auto mr-auto  " src="menfashion.png" />

      <div className="SecondTab">
        <p className="headerText text-2xl flex justify-start ml-40 sectionMainHeader"> Men's style</p>

        <div class="grid grid-cols-3 gap-10 menStyleGrid">
          <div className=""  onClick={() => router.push('/summerFine')}>
            <img className=" menStyle cursor-pointer  " src="koofo.jpg" />
            <p className="headerText text-2xl flex cursor-pointer  "> Summer Fine</p>
            <hr className="textline" />

          </div>
          <div className=" middle"  >
            <img  onClick={() => router.push('/casual')} className="cursor-pointer  middleImage " src="bro.jfif" />
            <p className=" text-2xl flex  "> Casual</p>
            <hr className="textline_2" />

          </div>
          <div className="menStyleGrid_third"  onClick={() => router.push('/office')}>
            <img className="cursor-pointer  josh " src="work.jpg" />
            <p className="headerText text-2xl flex  "> Office</p>
            <hr className="textline_3" />

          </div>

        </div>

        <div class="grid grid-cols-3 gap-10  mt-20 menStyleGrid">
          <div className="cursor-pointer "  onClick={() => router.push('/comfort')}>
            <img className=" menStyle " src="ss.jpg" />
            <p className="headerText text-2xl flex  "> Comfort</p>
            <hr className="textline_4" />

          </div>
          <div className=" middle"  onClick={() => router.push('/retro')}>
            <img className="middleImage cursor-pointer " src="jerry.jpg" />
            <p className="headerText text-2xl flex  " > Retro</p>
            <hr className="textline_5" />

          </div>
          <div className="menStyleGrid_third"  onClick={() => router.push('/urban')}>
            <img className="cursor-pointer  rev " src="sk.jpg" />
            <p className="headerText text-2xl flex  "> Urban</p>
            <hr className="textline_6" />

          </div>

        </div>
        <div className="flex exploreButton">
          <p className=" headerText exploreText">Explore More !
          </p>
        </div>
      </div>


      <div className="fourthTab">

        {/* LINES */}
        <img className="tat" src="boxers.png" />

        <div className="lineBar">
          <div className="line">
            <hr className="bars" />
            <p className="footwear text-7xl">The Latest Footwear</p>
            <hr className="bars" />
            <div className="flex justify-center">
              <img className="logo1 mr-4" src="logo1.png" />

              <p className="footwear text-7xl" id="black">
                The Latest Leather Goods
              </p>
            </div>
            <hr className="bars" />
            <div className="flex justify-center">
              <p className="footwear text-7xl">Summer Accessories</p>
            </div>
            <hr className="bars" />
            <p className="footwear text-7xl">Summer Selection</p>
            <hr className="bars" />
          </div>
        </div>
      </div>

      <div className="lastTab">
        <p className="headerText text-3xl mb-20 lastTabText"> Top Pick This Month</p>


        <div class="grid grid-cols-4 gap-4">
          <div>
            <img className="topPick" src="kofi.jpg" />
          </div>
          <div>
            <img className="topPick" src="dread.png" />

          </div>
          <div>
            <img className="topPick" src="short.png" />

          </div>
          <div>
            <img className="topPick" src="sweat.png" />

          </div>
          <div>           <img className="topPick" src="dd.png" />
          </div>
          <div>           <img className="topPick" src="tro.png" />
          </div>
          <div>           <img className="topPick" src="slides.png" />
          </div>
          <div>           <img className="topPick" src="cream.png" />
          </div>

        </div>

      </div>
      <Footer/>
    </div>
  );
}


// export const getServerSideProps = async () => {
//   try {
//     console.log("connecting to the database");
//     await dbConnect();
//     console.log("Database connected Successfully");
//     console.log("Now fetching data ");
//     const newModels = await Product.find();
//     console.log("document fetched");

//     return {
//       props: {
//         newModels: JSON.parse(JSON.stringify(newModels)),
//       },
//     };
//   } catch (error) {
//     console.log(error);

//     return {
//       notFound: true,
//     };
//   }
// };