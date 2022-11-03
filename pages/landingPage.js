import React, {useEffect} from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
export default function LandingPage() {

  return (
    <div className="App">
        {/* <Header/> */}
      <div className="landingPage_text">
        <p className="text-6xl md:text-8xl landingPage_MainText">
          Memorial Day
        </p>
        <p className="text-5xl md:text-8xl landingPage_MainText">
          Weekend Sale
        </p>

        <p className=" landingPage_subText">
          40% off storewide with code FORTYOFF
        </p>
      </div>
      <img className="backgroundImage" src="new.png" />

      <p className="category">Lacoste Wardtobe Essentials</p>

      <div className="flex justify-center">
        <div className="grid gap-4 grid-cols-2 landingPage_secondPage  ">
          <div>
            <img className="image1  " src="jig.png" />
            <p className="catergory_subs">TrackSuit</p>
          </div>
          <div>
            <img className="image1  " src="de.png" />
            <p className="catergory_subs">Blazer</p>
          </div>
          <div>
            <img className="image1  " src="eee.png" />
            <p className="catergory_subs">Specials</p>
          </div>
          <div>
            <img className="image1  " src="jon.png" />
            <p className="catergory_subs">Sweater</p>
          </div>
        </div>
      </div>

      <div className="bar">
        <div className="flex world  ">
          <img className="recomend_logo" src="logo1.png" />

          <p className="lacoste_Text ">The Lacoste World</p>
        </div>
        {/* LINES */}
        <img className="tat" src="tat.png" />

        <div className="lineBar">
          <div className="line">
            <hr className="bars" />
            <p className="footwear md:text-7xl text-4xl ">The Latest Footwear</p>
            <hr className="bars" />
            <div className="flex justify-center">
              <img className="logo1 mr-4" src="logo1.png" />

              <p className="footwear md:text-7xl text-4xl mr-20" id="black">
                The Latest Leather 
              </p>
            </div>
            <hr className="bars" />
            <div className="flex justify-center">
              <p className="footwear md:text-7xl text-4xl">Summer Accessories</p>
            </div>
            <hr className="bars" />
            <p className="footwear md:text-7xl text-4xl">Summer Selection</p>
            <hr className="bars" />
          </div>
        </div>
      </div>
      <div className="flex lg">
        <img className="recomend_logo" src="logo1.png" />
        <p className="text-4xl recommended_text">Recommended For You</p>
      </div>

      <div className="recommended">
        <div class="grid-container ">
          <div>
            <img className="" src="ds.png" />
            <p>Lacoste RGB</p>
            <p>$200</p>

          </div>
          <div>
            <img className="" src="jon.png" />

            <p>Lacoste RGB</p>
            <p>$200</p>          </div>
          <div>
            <img className="" src="bruno.png" />

            <p>Lacoste RGB</p>
            <p>$200</p>          </div>
          <div>
            <img src="m3.png" />

            <p>Lacoste RGB</p>
            <p>$200</p>          </div>
          <div>
            <img src="roe.png" />

            <p>Lacoste RGB</p>
            <p>$200</p>          </div>
          <div>
            <img src="dd.png" />

            <p>Lacoste RGB</p>
            <p>$200</p>          </div>
          <div>
            <img class="grid-item grid-item-7" src="fall.jpg" alt="" />
            <p>Lacoste RGB</p>
            <p>$200</p>          </div>
          <div>
            <img class="grid-item grid-item-8" src="m2.jpg" alt="" />
            <p>Lacoste RGB</p>
            <p>$200</p>          </div>
          <div>
            <img class="grid-item grid-item-9" src="capture.png" alt="" />
            <p>Lacoste RGB</p>
            <p>$200</p>          </div>
          <div>
            <img class="grid-item grid-item-10" src="hj.png" alt="" />
            <p>Lacoste RGB</p>
            <p>$200</p>          </div>
        </div>
      </div>

      <div className="essentials ">
        <div className="Lacoste_inside flex">
          <img className="inside" src="logo1.png" />

          <p className="text-4xl essential_text">Lacoste Inside</p>
        </div>{" "}
        <div class="container">
          <div class="card">
            <img src="heroimg.jpg" />
            <div class="card__head">SUMMER COLLECTION</div>
          </div>
          <div class="card">
            <img src="teal.png" />
            <div class="card__head">TYLER AND FRIENDS</div>
          </div>
          <div class="card">
            <img src="mjh.png" />
            <div class="card__head">TEES</div>
          </div>
          <div class="card">
            <img src="spring.jpg" />
            <div class="card__head">WINTER</div>
          </div>
          <div class="card">
            <img src="m2.jpg" />
            <div class="card__head">CLOTHES</div>
          </div>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/> <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/> <br/>
        <br/>
        <br/>
      </div>
<Footer/>
      
    </div>
    
  );
}
