import React, { useEffect, useState } from 'react'
import bannerbg from '../Assets/images/banner-bg.png'
import bannercar from '../Assets/images/banner-car-img.png'
import servicetracktire from '../Assets/images/service-track-tire.png'
import limousin from '../Assets/images/limousin.png'
import carforsale from '../Assets/images/car-for-sale.png'
import carforrent from '../Assets/images/car-for-rent.png'
import quickservice from '../Assets/images/quick-service.png'
import features from '../Assets/images/features.png'
import towtruck from '../Assets/images/tow-truck.png'
import engine from '../Assets/images/engine.png'
import gasstation from '../Assets/images/gas-station.png'
import tire from '../Assets/images/tire.png'
import googleplay from '../Assets/images/google-play.png'
import applestore from '../Assets/images/apple-strore.png'
import appphones from '../Assets/images/app-phones.png'
import ListOfCar from '../Components/ListOfCar'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SearchCarBox from '../Components/SearchCarBox'

const Homepage = () => {
    
    
    const myFunction=()=> {
        // var dots = document.getElementById("dots");
        // var moreText = document.getElementById("more");
        // var btnText = document.getElementById("myBtn");
        // setDisplay(!Display)
        // if (Display) {
        //   dots.style.display = "inline";
        //   btnText.innerHTML = "Read more"; 
        //   moreText.style.display = "none";
        // } else {
        //   dots.style.display = "none";
        //   btnText.innerHTML = "Read less"; 
        //   moreText.style.display = "inline";
        // }
      }
   
  return (
    <div>
        {/* <!-- Header --> */}

        <Navbar/>
         
        {/* <!-- Header End -->
  <!-- BANNER --> */}
  <section className="banner-bg">
    <div className="banner-background">
        <img src={bannerbg} className="img-fluid banner-surcle-bg" alt=""/>

      <div className="container">
      <div className="row">
        <SearchCarBox/>
        <div className="col-lg-8 ">
            <div className="banner-car-img">
            <img  src={bannercar} className="img-fluid banner-car" alt=""/>
        </div>
        </div>

      </div>
    </div>

</div>
</section>
 {/* <!-- Banner End -->
<!-- Searvice --> */}
<section className="service-total-col">
    <img src={servicetracktire} className="img-fluid srviceimg-bg" alt=""/>
    <div className="service-bg">
<div className="container">
    <div className="service">
        <div className="row">
            <div className="col-lg-6">
                <div className="total-service">
                <div className="limousine">
                    <div className="row">
                        <div className="col-lg-8 service-txt">
                            <h6 className="service-head">LIMOUSINE SERVICE</h6>
                            <p className="service-discription">Our Limousine services offer the ultimate way to travel in elegance, style and safely. Comfort and luxury are never compromised when you choose to tra...</p>
                            <a className="service-more-btn" href="">Read More <i className="fas fa-arrow-right service-arrow"></i> </a>

            
                            

                        </div>
                        <div className="col-lg-4 service-img">
                            <div className="limousin-bx">
                                <img src={limousin} className="img-fluid limousin-img w-100" alt=""/>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="car-for-sale">
                    <div className="row">
                        <div className="col-lg-8 service-txt">
                            <h6 className="service-head">CAR FOR SALE</h6>
                            <p className="service-discription">We Almana Leasing provide you the best preowned vehicles that fully suits your needs and within your budget. We provide diverse options of vehicles wh...</p>
                            <a className="service-more-btn" href="">Read More <i className="fas fa-arrow-right service-arrow"></i> </a>
                        </div>
                        <div className="col-lg-4 service-img">
                            <div className="limousin-bx">
                                <img src={carforsale} className="img-fluid limousin-img w-100" alt=""/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            </div>
            <div className="col-lg-6">
                <div className="total-service-rightbx">
                    <div className="car-rental">
                        <div className="row">
                            <div className="col-lg-4 service-img">
                                <div className="limousin-bx">
                                    <img src={carforrent} className="img-fluid limousin-img w-100" alt=""/>
                                </div>
                            </div>
                            <div className="col-lg-8 service-txt">
                                <h6 className="service-head">CAR RENTAL</h6>
                                <p className="service-discription">Almana Leasing’s rental and lease options are cost effective for individual and corporate clients. We cater, all rental and leasing needs by tailor...</p>
                                <a className="service-more-btn" href="">Read More <i className="fas fa-arrow-right service-arrow"></i> </a>
                            </div>
                         
    
                        </div>
                    </div>
                    <div className="quick-service">
                        <div className="row">
                            <div className="col-lg-4 service-img">
                                <div className="limousin-bx">
                                    <img src={quickservice} className="img-fluid limousin-img w-100" alt=""/>
                                </div>
                            </div>
                            <div className="col-lg-8 service-txt">
                                <h6 className="service-head">QUICK SERVICES</h6>
                                <p className="service-discription">Al Mana Leasing has access to number of service facilities in Doha and other prime locations outside Doha compared to any other car leasing company...</p>
                                <a className="service-more-btn" href="">Read More <i className="fas fa-arrow-right service-arrow"></i> </a>
                            </div>
                           
    
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
</div>
</section>
{/* <!-- Searvice End-->

<!-- Sub-Service --> */}
<section>
<div className="container">
    <div className="features">
        <div className="features-img">
        <img src={features} className="img-fluid features-img-bg" alt=""/>
    </div>
    
    <div className="towing-bx">
        <p className="towing-txt">Towing</p>
        <div className="towing-img">
        <img src={towtruck} className="img-fluid service-icon" alt=""/>
    </div>
    </div>
    <div className="jumb-start-bx">
        <p className="towing-txt">Jump Start</p>
        <div className="towing-img">
        <img src={engine} className="img-fluid service-icon" alt=""/>
    </div>
    </div>
    <div className="fuel-bx">
        <p className="towing-txt">Fuel</p>
        <div className="towing-img">
        <img src={gasstation} className="img-fluid service-icon" alt=""/>
    </div>
    </div>
    <div className="tire-bx">
        <p className="towing-txt">Tire</p>
        <div className="towing-img">
        <img src={tire} className="img-fluid service-icon" alt=""/>
    </div>
    </div>
    </div>
</div>
</section>
{/* <!-- SUb Service End -->

<!-- List OF Car --> */}

<ListOfCar/>
  {/* <!-- Application --> */}
  <section>
    <div className="app">
    <div className="container">
    <div className="row">
        <div className="col-lg-6 col-6 app-col">
            <div className="app-txt-bx">
                <div className="app-txt">
                    <h3 className="app-txt-head">Download the app now &
                        Get exciting new offer</h3>
                </div>
                <div className="app-description">
                    <p className="app-descriptiontxt">Best Price Car Rental - Guaranteed. Low-Cost Rental with affordable, Qualit y,Friendly
                        And Legally Compliant Services and Competitive Rates</p>
                </div>
                <div className="app-mobile">
                    <a href="">
                    <img src={googleplay} className="img-fluid google-app" alt=""/>
                </a>
                <a href="">
                    <img src={applestore} className="img-fluid google-app" alt=""/>
                </a>
                </div>
            </div>
        </div>
        <div className="col-lg-6 col-6 app-col">
            <div className="app-mobiles">
                <div className="apple-app">
                    <img src={appphones} className="img-fluid apple-phone  w-100" alt=""/>
                </div>
            </div>
          
        </div>

    </div>
    </div>
</div>
  </section>
    {/* <!-- Application End-->
       <!-- Footer--> */}
<Footer/>
{/* <!-- Footer End--> */}
    </div>
  )
}

export default Homepage