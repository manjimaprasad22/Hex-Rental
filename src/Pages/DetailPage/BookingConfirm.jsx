import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Footer from '../../Components/Footer'
import Navbar from '../../Components/Navbar'
import $ from 'jquery'
import toast, { Toaster } from 'react-hot-toast'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const BookingConfirm = () => {
  $(document).ready(function(){
    $(".pay_now_d").click(function(){
    $(".pay_form_fill").toggleClass("show_popup_det");
    $("body").addClass("noscroll")
    });
    $(".close_pop i").click(function(){
    $(".pay_form_fill").toggleClass("show_popup_det");
    $("body").removeClass("noscroll")
    });
    });
    const { REACT_APP_SERVER_URL } = process.env;
    const { REACT_APP_IMAGE_URL } = process.env;
    const location  = useLocation()
    const token = localStorage.getItem("token");
    const cus_ID = localStorage.getItem("cus_ID");
    const model_id = location.state.model_id
    const selectcity=location.state.selectcity
    const selectlocation=location.state.selectlocation
    const Day1 = location.state.Day1
    const Day2 = location.state.Day2
    const days = location.state.days
    const fromTime = location.state.fromTime
    const toTime = location.state.toTime
    const [Offer_Rate,setofferRate] = useState(location.state.Offer_Rate)
    const perday_rate = location.state.perday_rate
    const currency = location.state.currency
    const fname= location.state.fname
    const lname= location.state.lname
    const cntCode= location.state.cntCode
    const number= location.state.number
    const DoB= location.state.DoB
    const qatarid= location.state.qatarid
    const Passport= location.state.Passport
    const nationality= location.state.nationality
    const address1= location.state.address1
    const address2= location.state.address2
    const selectstate= location.state.selectstate
    const Zipcode= location.state.Zipcode
    const license= location.state.license
    const licensexpiry= location.state.licensexpiry
    const licensecntry= location.state.licensecntry  
    const file= location.state.file
    const [modeldetail, setmodeldetail] = useState({})
    const [Nation, setNation] = useState([])
    const [specific, setspecific] = useState([])
    const [city, setcity] = useState([]);
    const [Location, setlocation] = useState([]);
    const [coupon, setcoupon] = useState();
    const [dropfee, setdropfee] = useState(0);
    const [additional, setadditional] = useState(0);
    const [loading,setloading] = useState(true)
useEffect(() => {
 getData()
 fetchCity()
 fetchLocation()
}, [selectcity])

    const getData=async()=>{
        await axios({
            url:`${REACT_APP_SERVER_URL}/api/customer/info?customer_id=${cus_ID}&model_id=${model_id}`,
            method:'GET',
            headers: {
                'Content-Type': 'application/json',
                "Authorization":`Bearer ${token}`,
            },
        }).then((res)=>{
            // console.log(res.data);
            setmodeldetail(res.data["Model Details"])
            setspecific(res.data["Model Details"].specifications)
            setloading(false)
        }).catch((err) => {
          if(err.request){ console.log(err.request) } if(err.response){ 
              console.log(err.response)
        
        }})
    }
    const fetchCity=async()=>{
      await axios({
          url:`${REACT_APP_SERVER_URL}/api/web-city/list`,
          method:"GET",
          
      }).then((response)=>{
          // console.log(response.data,'city');
          setcity(response.data.cityDet) 
         
                   
      }) .catch((err) => {
          if(err.request){ console.log(err.request) } if(err.response){ 
              console.log(err.response)
        
        }})
    
    }
    const fetchLocation=async()=>{
      await axios({
        url:`${REACT_APP_SERVER_URL}/api/fetch/city/location-web?city_id=${selectcity}`,
        method:"GET",
        headers: {
          'Content-Type': 'application/json',          
      },
    }).then((response)=>{
        // console.log(response.data,'location');
        setlocation(response.data)            
    }) .catch((err) => {
        if(err.request){ console.log(err.request) } if(err.response){ 
            console.log(err.response)
      
      }})
    }
    const handleCoupon=async()=>{
      await axios({
        url:`${REACT_APP_SERVER_URL}/api/coupons/apply?customer_id=${cus_ID}`,
        data:{
          total_amount:Offer_Rate,
          coupon_code:coupon
        },
        method:'POST',
        headers: {
          'Content-Type': 'application/json',
          "Authorization":`Bearer ${token}`,
      },
      }).then((res)=>{
        if(res.data.status === 0){
          toast.error(res.data.message)
          console.log(res.data);
        }
        else if (res.data.status === 1){
          toast.error(res.data.message)
          console.log(res.data);
        }
        else if(res.data.status === 2){
          setofferRate(res.data.total_rate)
          console.log(res.data);
          toast.success(res.data.message)
          
        }
      }).catch((err) => {
        if(err.request){ console.log(err.request) } if(err.response){ 
            console.log(err.response)
      
      }})
    }
    const handleSumbit=async(e)=>{
      console.log(Number(cus_ID),'ajith');
      e.preventDefault();
       await axios({
            url:`${REACT_APP_SERVER_URL}/api/user/booking?`,
            method:'POST',
            headers: {
              "Authorization":`Bearer ${token}`,
          },
            data:{
              book_from_date:Day1,
              book_pickup_time:fromTime,
              book_car_model:model_id,
              book_daily_rate:Offer_Rate,
              book_total_rate:perday_rate,
              book_cust_id: Number(cus_ID),
              book_bill_cust_fname:fname,
              book_bill_cust_lname:lname,
              book_bill_cust_mobile_code:cntCode,
              book_bill_cust_mobile:number,
              book_bill_cust_qatar_id:qatarid,
              book_bill_cust_nationality:nationality,
              book_bill_cust_address_1:address1,
              book_bill_cust_address_2:address2,
              book_bill_cust_city:selectcity,
              book_bill_cust_state:selectstate,
              book_bill_cust_zipcode:Zipcode,
              book_bill_cust_location:selectlocation,
              book_to_date:Day2,
              book_return_time:toTime,
              book_bill_cust_dob:DoB,
              cust_passport:Passport,
              book_bill_cust_lic_date:licensexpiry,
              book_bill_cust_lic_country:licensecntry,
              drop_fee:dropfee,
              additional_package:additional,
            //  image:file,
              
            }
        }).then((response)=>{
          console.log(response.data);
          toast.success("booking success")
        }).catch((err) => {
          if(err.request){ console.log(err.request) } if(err.response){ 
              console.log(err.response)
              toast.error(err.response.data.message)
          }})
    }
  //    console.log("Day1:",Day1);
  //  console.log("fromTime:",fromTime);
  //  console.log("model_id:",model_id);
  //  console.log("Offer_Rate:",Offer_Rate);
  //  console.log("perday_rate:",perday_rate);
  //  console.log("cus_ID:",cus_ID);
  //  console.log("fname:",fname);
  //  console.log("lname:",lname);
  //  console.log("cntCode:",cntCode);
  //  console.log("number:",number);
  //  console.log("selectcity:",selectcity);
  //  console.log("selectlocation:",selectlocation);
  //  console.log("selectstate:",selectstate);
  //  console.log("qatarid:",qatarid);
  //  console.log("nationality:",nationality);
  //  console.log("address1:",address1);
  //  console.log("address2:",address2);
  //  console.log("Zipcode:",Zipcode);
  //  console.log("Day2:",Day2);
  //  console.log("toTime:",toTime);
  //  console.log("DoB:",DoB);
  //  console.log("Passport:",Passport);
  //  console.log("licensexpiry:",licensexpiry);
  //  console.log("licensecntry:",licensecntry);
  //  console.log("dropfee:",dropfee);
  //  console.log("additional:",additional);
  //  console.log("file:",file);
  
    return (
    <div>
        <Navbar/>
         <div class="detail_page_sec">
      <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="detail_flex">
                <div class="det_img">
                {loading?(<Skeleton style={{width:"100%"}} height={300}/>):
                <img src={REACT_APP_SERVER_URL + modeldetail.Image}/>}
                </div>
                <div class="det-details">
                  <h2>{modeldetail.Makers} { modeldetail.Model_Name}<span>Reference Lorem Ipsum</span></h2>
                  <div class="det_specification">
                    <ul>
                    {specific.length>0?
                    specific.map((spe,index)=>{
                      return(
                        
                          <li>
                            {index%2==0?
                            
                            <span>{spe}</span>
                            :
                            <img style={{width:17,height:18}} src={REACT_APP_IMAGE_URL+spe}/>
                          }
                          </li>
                      )
                    }):""}
                          </ul>

                      {/* <!--  --> */}

                  </div>
                </div>

              </div>
              <div class="cflex">

                <div class="booking_details_cnfm">
                  <div class="box_de_b">
                    <h2> Booking Details </h2>
                    <div class="de_info">
                      <span class="name_v">Hello User</span>

                      <div class="info_line">
                        <span>Billing Address <b>:</b></span>
                        <p>
                          {address1} <br/>
                          {address2}
                        </p>                      
                      </div>
                      <div class="info_line">
                        <span>Location <b>:</b></span>
                        
                        {Location.map((e)=>{
                                return(
                                    <>
                                    {e.locationId == selectlocation?<p>{e.locationName}</p>:""}
                                    
                                    </>
                                )
                            })}
                                           
                      </div>
                      <div class="info_line">
                        <span>Mobile Number <b>:</b></span>
                        <p>
                          {number}
                        </p>                      
                      </div>
                      <div class="info_line">
                        <span>Paasport Number <b>:</b></span>
                        <p>
                          {Passport}
                        </p>                      
                      </div>
                      <div class="info_line">
                        <span>Qatar ID <b>:</b></span>
                        <p>
                          {qatarid}
                        </p>                      
                      </div>
                      <div class="info_line">
                        <span>Licence Number <b>:</b></span>
                        <p>
                          {license}
                        </p>                      
                      </div>

                    </div>
                  </div>
                </div>

                <div class="cin">
                  <div class="bill_info">
                    <div>
                      <span>Pickup</span>
                      <p>
                        <b>{Day1}</b>
                      </p>
                      <p>{fromTime} </p>
                      <p class="place_n">
                        Location
                      </p>
                    </div>
                    <div>
                      <span>Pickup</span>
                      <p>
                        <b>{Day2}</b>
                      </p>
                      <p>{toTime}</p>
                      <p class="place_n">
                        Location
                      </p>
                    </div>
                  </div>

                  <div class="rate_i">
                    <div class="fx_d">
                      <span> Daily Rate <b>:</b> </span>
                      <p>{perday_rate} {currency}</p>
                    </div>
                    <div class="fx_d">
                      <span> No: Of Days <b>:</b> </span>
                      <p>{days}</p>
                    </div>
                    <div class="fx_d">
                      <span> Drop Fee <b>:</b> </span>
                      <p>{dropfee} {currency}</p>
                    </div>
                    <div class="fx_d">
                      <span> Additional Rate <b>:</b> </span>
                      <p>{additional} {currency}</p>
                    </div>
                    <div class="fx_d apply_coup">
                      <span> Apply Coupon <b>:</b> </span>
                      <p><input type="text" name="" onChange={(e)=>{setcoupon(e.target.value)}}/><button onClick={handleCoupon}>Apply</button></p>
                    </div>
                    <div class="fx_d Total_f">
                      <span> Total <b>:</b> </span>
                      <p>{Offer_Rate} {currency}</p>
                    </div>

                    <button class="pay_cnfm" onClick={handleSumbit}>Confirm & Pay</button>
                  </div>
                </div>

              </div>

             


            </div>
          </div>
      </div>
      <Toaster
position="top-center"
reverseOrder={false}
/>
    </div>
<Footer/>
    </div>
  )
}

export default BookingConfirm