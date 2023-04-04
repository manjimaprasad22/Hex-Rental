import React, { useEffect, useState } from 'react'
import $ from 'jquery'
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const DetailPage = () => {
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
    const navigate = useNavigate()
    const token = localStorage.getItem("token");
    const cus_ID = localStorage.getItem("cus_ID");
    const model_id = location.state.model_id
    const [selectcity,setselectcity] = useState(location.state.selectcity)
    const [selectlocation,setselectlocation] = useState(location.state.selectlocation)
    const Day1 = location.state.Day1
    const Day2 = location.state.Day2
    const days = location.state.Days
    const fromTime = location.state.fromTime
    const toTime = location.state.toTime
    const [Offer_Rate,setofferRate] = useState(location.state.offerrate)
    const perday_rate = location.state.perdayrate
    const currency = location.state.currency
    const [modeldetail, setmodeldetail] = useState({})
    const [Nation, setNation] = useState([])
    const [specific, setspecific] = useState([])
    const [city, setcity] = useState([]);
    const [Location, setlocation] = useState([]);
    const [fname, setfname] = useState()
    const [lname, setlname] = useState()
    const [cntCode, setcntCode] = useState("")
    const [number, setnumber] = useState()
    const [DoB, setDoB] = useState("")
    const [qatarid, setqatarid] = useState()
  const [Passport, setPassport] = useState()
  const [license, setlicense] = useState()
  const [licensexpiry, setlicensexpiry] = useState()
  const [licensecntry, setlicensecntry] = useState()
  const [nationality, setnationality] = useState()
  const [address1, setaddress1] = useState("")
  const [address2, setaddress2] = useState("")
  const [Zipcode, setZipcode] = useState()
  const [file, setFile] = useState(null);
  const [terms1,setTerms1] = useState("")
  const [terms,setTerms] = useState("")
  const [info1,setinfo1] = useState("")
  const [info2,setinfo2] = useState("")
  const [agree,setagree] = useState(false)
  const [loading,setloading] = useState(true)
console.log(nationality);
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  // console.log(tomorrow,"jsjd");
  let Day = String(tomorrow.getDate()).padStart(2, '0');
  let Month = String(tomorrow.getMonth() + 1).padStart(2, '0');
  let Year = new Date(tomorrow).getFullYear();
  let date = `${Year}-${Month}-${Day}`
    useEffect(() => {
          
      getData()
      fetchNation()
      fetchCity()
      // console.log(selectcity);
      fetchLocation()
      }, [selectcity])
      const fetchNation=async()=>{
        await axios({
          url:`${REACT_APP_SERVER_URL}/api/country/list`,
          method:'GET',
          headers: {
            'Content-Type': 'application/json'
        },
        }).then((res)=>{
          // console.log(res.data,'nations');
          setNation(res.data.Countries)
        }).catch((err) => {
          if(err.request){ console.log(err.request) } if(err.response){ 
              console.log(err.response)
        }})
      }
      const getData=async()=>{
          await axios({
              url:`${REACT_APP_SERVER_URL}/api/customer/info?customer_id=${cus_ID}&model_id=${model_id}`,
              method:'GET',
              headers: {
                  'Content-Type': 'application/json',
                  "Authorization":`Bearer ${token}`,
              },
          }).then((res)=>{
              // console.log(res.data["Model Details"],'detail');
              console.log(res.data,'detail');
              setmodeldetail(res.data["Model Details"])
              setfname(res.data["Customer Information"].Customer_first_name)
              setlname(res.data["Customer Information"].Customer_Last_name)
              setnumber(res.data["Customer Information"].Mobile_number)
              setDoB(res.data["Customer Information"].Date_of_birth)
              setPassport(res.data["Customer Information"].Passport_number)
              setnationality(res.data["Customer Information"].Nationality_id)
              setcntCode(res.data["Customer Information"].Mobile_code)
              setspecific(res.data["Model Details"].specifications)
              setloading(false)
          }) .catch((err) => {
              if(err.request){ console.log(err.request) } if(err.response){ 
                  console.log(err.response)
            
            }})
         
            await axios({
              url:`${REACT_APP_SERVER_URL}/api/terms-conditions`,
              method:'GET',
              headers:{
                'Content-Type': 'application/json'
            },
            }).then((res)=>{
              setTerms1(res.data.Terms_and_conditions_Line_1)
              setTerms(res.data.Terms_and_conditions_Line_2)
              // console.log(res.data);
            })
            await axios({
              url:`${REACT_APP_SERVER_URL}/api/additional-information`,
              method:'GET',
              headers:{
                'Content-Type': 'application/json'
            },
            }).then((res)=>{
              setinfo1(res.data.Additional_info_Line_1)
              setinfo2(res.data.Additional_info_Line_2)
              // console.log(res.data);
            })
      }
      const fetchCity=async()=>{
        await axios({
            url:`${REACT_APP_SERVER_URL}/api/web-city/list`,
            method:"GET",
            
        }).then((response)=>{
            console.log(response.data,'city');
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
            'Content-Type': 'application/json'
        },
      }).then((response)=>{
          console.log(response.data,'location');
          setlocation(response.data)            
      }) .catch((err) => {
          if(err.request){ console.log(err.request) } if(err.response){ 
              console.log(err.response)
        
        }})
      } 
      const handelCity=(event)=>{
        setselectcity((event.target.value)) 
        console.log(event.target.value,'city selected');
       
      }
      const handleLocation=(event)=>{
        setselectlocation(event.target.value)
        console.log(event.target.value,'loc');
      }
      const handleFileInputChange = (event) => {
        setFile(event.target.files[0])
      };
      
      const handleSubmit = async(e)=>{
        e.preventDefault();
        navigate('/confirmbooking',{state:{
          Day1:Day1,
          fromTime:fromTime,
          model_id:model_id,
          Offer_Rate:Offer_Rate,
          perday_rate:perday_rate,
          fname:fname,
          lname:lname,
          cntCode:cntCode,
          number:number,
          qatarid:qatarid,
          nationality:nationality,
          address1:address1,
          address2:address2,
          selectcity:selectcity,
          selectstate:selectlocation,
          Zipcode:Zipcode,
          selectlocation:selectlocation,
          Day2:Day2,
          toTime:toTime,
          DoB:DoB,
          Passport:Passport,
          license:license,
          licensexpiry:licensexpiry,
          licensecntry:licensecntry,
          file:file,
          days:days,
          currency:currency
        }})
        // await axios({
        //     url:`${REACT_APP_SERVER_URL}/api/user/booking?`,
        //     method:'POST',
        //     headers: {
        //       'Content-Type': 'application/json',
        //       "Authorization":`Bearer ${token}`,
        //   },
        //     data:{
        //       book_from_date:Day1,
        //       book_pickup_time:fromTime,
        //       book_car_model:model_id,
        //       book_daily_rate:Offer_Rate,
        //       book_total_rate:perday_rate,
        //       book_cust_id:Number(cus_ID),
        //       book_bill_cust_fname:fname,
        //       book_bill_cust_lname:lname,
        //       book_bill_cust_mobile_code:cntCode,
        //       book_bill_cust_mobile:number,
        //       book_bill_cust_qatar_id:qatarid,
        //       book_bill_cust_nationality:nationality,
        //       book_bill_cust_address_1:address1,
        //       book_bill_cust_address_2:address2,
        //       book_bill_cust_city:selectcity,
        //       book_bill_cust_state:selectlocation,
        //       book_bill_cust_zipcode:Zipcode,
        //       book_bill_cust_location:selectlocation,
        //       book_to_date:Day2,
        //       book_return_time:toTime,
        //       book_bill_cust_dob:DoB,
        //       cust_passport:Passport,
        //       book_bill_cust_lic_date:licensexpiry,
        //       book_bill_cust_lic_country:licensecntry,
        //       drop_fee:"",
        //       additional_package:"",
        //       image:file,
              
        //     }
        // }).then((response)=>{
        //   console.log(response.data);
        //   toast.success("booking success")
        // }).catch((err) => {
        //   if(err.request){ console.log(err.request) } if(err.response){ 
        //       console.log(err.response)
        //       toast.error(err.response.data.message)
        //   }})
      }
      const handleTermsAndCondition=()=>{
        setagree(!agree)
        console.log(agree);
      }
  //  console.log("Day1:",Day1);
  //  console.log("fromTime:",fromTime);
  //  console.log("model_id:",model_id);
  //  console.log("Offer_Rate:",Offer_Rate);
  //  console.log("perday_rate:",perday_rate);
  //  console.log("cus_ID:",cus_ID);
  //  console.log("fname:",fname);
  //  console.log("lname:",lname);
  //  console.log("cntCode:",cntCode);
  //  console.log("cntCode:",cntCode);
  //  console.log("Day1:",Day1);
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
                <h2>{modeldetail.Makers} { modeldetail.Model_Name} <span>Reference Lorem Ipsum</span></h2>
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

                    <div class="rate_details_sp">
                      <div>
                        <span class="offer_p">{currency} {Offer_Rate}</span>
                        {/* <span class="orig_p">QAR 400.00</span> */}
                        <p><b>{currency} {perday_rate}</b> / Day</p>
                        </div>
                        <div>
                          <button class="pay_now_d">Book Now</button>
                        </div>
                      </div>

                </div>
              </div>

            </div>

            <div class="pay_form_fill ">
              <div class="form_to_fill">

                  <form onSubmit={handleSubmit}>
                <div class="form_pick">
                  <div class="close_pop"><i class="fas fa-times-circle"></i></div>
                  <div class="fm_fld">
                    <label>Name</label>
                    <input type="" name="" value={fname} onChange={(e)=>setfname(e.target.value)}/>
                  </div>
                  <div class="fm_fld">
                    <label>Last Name</label>
                    <input type="" name="" value={lname} onChange={(e)=>{setlname(e.target.value)}}/>
                  </div>
                  <div class="fm_fld">
                    <label>Mobile Number</label>
                    <input type="number" name="" value={number} onChange={(e)=>{setnumber(e.target.value)}}/>
              
                  </div>
                  <div class="fm_fld">
                    <label>DOB</label>
                    <input type="date" max="2003-12-31" value={DoB} name="dob"onChange={(e)=>{setDoB(e.target.value)}}/>
                  </div>
                  <div class="fm_fld">
                    <label>Qatar ID</label>
                    <input type="" name="" onChange={(e)=>{setqatarid(e.target.value)}}/>
                  </div>
                  <div class="fm_fld">
                    <label>Passport Number</label>
                    <input type="" name=""value={Passport} onChange={(e)=>{setPassport(e.target.value)}}/>
                  </div>
                  <div class="fm_fld">
                    <label>Licence Number</label>
                    <input type="" name="" onChange={(e)=>{setlicense(e.target.value)}}/>
                  </div>
                  <div class="fm_fld">
                    <label>Licence Expiry Date</label>
                    <input type="date" placeholder="Expiry Date" min={date} name="dateInput" onChange={(e)=>{setlicensexpiry(e.target.value)}} required/>
                  </div>
                  <div class="fm_fld">
                    <label>Licence Issued Country</label>
                    <select onChange={(e)=>{setlicensecntry(e.target.value)}}>
                      <option disabled selected value="">Select</option>
                      {Nation.map((nat)=>{

                        return(

                          <option key={nat.country_id} value={nat.country_id}>{nat.country_name}</option>
                        )
                      })}
                    </select>
                  </div>
                  
                  <div class="fm_fld">
                    <label>Nationality</label>
                    <select onChange={(e)=>{setnationality(e.target.value)}} value={nationality}>
                    <option disabled selected value="">Select Nation</option>
                    {Nation.map((nat)=>{

                      return(

                        <option key={nat.country_id} value={nat.country_id}>{nat.country_name}</option>
                      )
                    })}
                    </select>
                  </div>
                  <div class="fm_fld">
                    <label>Address Line 1</label>
                    <input type="" name="" onChange={(e)=>{setaddress1(e.target.value)}}/>
                  </div>
                  <div class="fm_fld">
                    <label>Address Line 2</label>
                    <input type="" name="" onChange={(e)=>{setaddress2(e.target.value)}}/>
                  </div>
                  <div class="fm_fld">
                    <label>City</label>
                    <select  onChange={handelCity} value={selectcity}>
                            {city.map((e)=>{
                                return(

                                    <option key={e.city_id} value={e.city_id}>{e.city_name}</option>
                                )
                            })}
                        </select>                  </div>
                  <div class="fm_fld">
                    <label>Location</label>
                    <select  onChange={handleLocation} value={selectlocation}>
                          <option>--select--</option>
                         {Location.map((e)=>{
                          return(
                            <option value={e.locationId}>{e.locationName}</option>
                          )
                         })}
                        </select>                  </div>
                  <div class="fm_fld">
                    <label>Zipcode</label>
                    <input type="number" name="" onChange={(e)=>{setZipcode(e.target.value)}}/>
                  </div>
                  <div class="fm_fld">
                    <label>Upload Your ID</label>
                    <input type="file" name="" onChange={handleFileInputChange}/>
                  </div>
                    
                  <div class="form_tc">
                  <a href="#" >Additional Information</a>
                    {/* <span>{terms}</span> */}
                    <div dangerouslySetInnerHTML={{ __html: info1}} />
                    <div dangerouslySetInnerHTML={{ __html: info2}} /><br/>
                    <a href="#" >Terms & Conditions</a>
                    {/* <span>{terms}</span> */}
                    
                    <div dangerouslySetInnerHTML={{ __html: terms1}} />
                    <div dangerouslySetInnerHTML={{ __html: terms}} />
                    <label><input type="checkbox" name=""onClick={handleTermsAndCondition}/>I agree with all the terms of service and privacy policy</label>
                  </div>
                  <div class="fm_fld form_tc">
                    {agree?<button type='submit'>Proceed</button>
                    :
                    <button type='submit' disabled style={{opacity:"0.5",cursor:"not-allowed"}}>Proceed</button>
                    }
                  </div>
                </div>
                  </form>
              </div>
            </div>
            <div class="flex-booking">

              <div class="pickup_det booking_det">
                <div class="dp_s">
                  <span class="top-title">PICKUP</span>
                  {/* <!-- <h3>16 March 2023, Thursday 11:00 AM</h3>
                  <p>Reference site about Lorem Ipsum</p>
                  <p class="ads">giving information on its origins, as well as a rando</p> --> */}
                </div>
                <div class="p_loc">
                  <i class="fas fa-map-marker-alt"></i>
                  <p>
                    <span>City</span>
                    
                            {city.map((e)=>{
                                return(
                                    <>
                                    {e.city_id == selectcity?<span>{e.city_name}</span>:""}
                                    
                                    </>
                                )
                            })}
                      
                  </p>
                </div>
                <div class="p_loc">
                  <i class="fas fa-clock"></i>
                  <p>
                    <span>Pickup Time</span>
                    {Day1}- {fromTime}
                  </p>
                </div>
                <div class="p_loc">
                   <i class="fas fa-info-circle"></i>
                  <p>
                    <span>Pick-up Instruction</span>
                    giving information on its origins, as well as a rando giving information on its origins, as well as a rando
                  </p>
                </div>
                
               
              </div>
              <div class="dropoff_det booking_det">
                <div class="dp_s">
                  <span class="top-title">DROP-OFF</span>
                  {/* <!-- <h3>16 March 2023, Thursday 11:00 AM</h3>
                  <p>Reference site about Lorem Ipsum</p>
                  <p class="ads">giving information on its origins, as well as a rando</p> --> */}
                </div>
                <div class="p_loc">
                  <i class="fas fa-map-marker-alt"></i>
                  <p>
                    <span>Location</span>
                    {Location.map((e)=>{
                                return(
                                    <>
                                    {e.locationId == selectlocation?<span>{e.locationName}</span>:""}
                                    
                                    </>
                                )
                            })}
                  </p>
                </div>
                <div class="p_loc">
                  <i class="fas fa-clock"></i>
                  <p>
                    <span>Drop Off Time</span>
                    {Day2} - {toTime}
                  </p>
                </div>
                <div class="p_loc">
                   <i class="fas fa-info-circle"></i>
                  <p>
                    <span>Drop Off Instruction</span>
                    giving information on its origins, as well as a rando giving information on its origins, as well as a rando
                  </p>
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

export default DetailPage