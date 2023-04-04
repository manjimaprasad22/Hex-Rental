import React, { useContext,useEffect,useState } from 'react'
import carlist from '../Assets/images/carlist.png'
import ac from '../Assets/images/ac.png'
import seat from '../Assets/images/seat.png'
import manual from '../Assets/images/manual.png'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { MyContext } from '../Components/SearchCarBox'
import $, { event } from 'jquery'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const RentalPage = () => {
    $(document).ready(function(){
        $(".search_edit_edit").click(function(){
         $(".search-edit").toggleclassName("show_search");
        });
        $(".filter-phone").click(function(){
         $(".Listing_sidebar").toggleclassName("show_filter");
        });
      });
      const date = new Date();
      const location=useLocation()
      const navigate = useNavigate();
      const { REACT_APP_SERVER_URL } = process.env;
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const token = localStorage.getItem("token");
      const [fromTime, setFromTime] = useState("00:00:00");
      const [toTime, settoTime] = useState("00:00:00"); 
      const [selectcity, setselectcity] = useState();
      const [selectlocation, setselectlocation] = useState();
      const [sortByLowToHigh, setSortByLowToHigh] = useState(false);
      const [sortByHighToLow, setSortByHighToLow] = useState(false);
      const [fromDate,setFromDate]=useState(new Date())
      const [toDate,setToDate]=useState(tomorrow)
      const [city, setcity] = useState([]);
      const [Location, setlocation] = useState([]);
      const [maker, setmaker] = useState([]);
      const [category, setcategory] = useState([]);
      const [brand, setbrand] = useState("");
      const [cartype, setcartype] = useState("");
      const [today, setToday] = useState(new Date());
      const [list, setlist] = useState([])
      const [facilities, setfacilities] = useState([])
      const [startDate, setstartDate] = useState()
      const [enddate, setenddate] = useState()
      
      
      useEffect(() => {
        
        getData() 
        fetchCity()
        fetchLocation()
     }, [selectcity,brand,cartype])
     
        
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
         const handleFromDateChange = (date) => {
          console.log(date,'from date');
          setFromDate(date);// reset to date when from date changes
          const tomorrow = new Date(date);
          tomorrow.setDate(tomorrow.getDate() + 1);
          setToDate(tomorrow); 
        };
        const handleToDateChange = (date) => {
          setToDate(date);
          console.log(date,'to date');
          
        };
        const handleFromTime=(event)=>{
          setFromTime((event.target.value))
          console.log(event.target.value,'from time');
        }
        const handleToTime=(event)=>{
          settoTime((event.target.value))
          console.log(event.target.value,'to time');
        }
        const handlebrand=(event)=>{
          setbrand(event.target.value)
          console.log(event.target.value,'brandselect');
          
        }
        const handlecartype=(event)=>{
          setcartype((event.target.value))
          console.log(event.target.value,'cartype select');
        
        }
       
        const getData=async()=>{
          let Day1 = String(fromDate.getDate()).padStart(2, '0');
          let Month1 = String(fromDate.getMonth() + 1).padStart(2, '0');
          let Year1 = new Date(fromDate).getFullYear();
          let date1 = `${Year1}-${Month1}-${Day1}`
          setstartDate(date1)
          let Day2 = String(toDate.getDate()).padStart(2, '0');
          let Month2 = String(toDate.getMonth() + 1).padStart(2, '0');
          let Year2 = new Date(toDate).getFullYear();
          let date2=`${Year2}-${Month2}-${Day2}`
          setenddate(date2)
          // console.log(Year2,"-",Month2,"-",Day2,"",toTime);
          await axios({
              url:`${REACT_APP_SERVER_URL}/api/item/search-web?from_date=${date1} ${fromTime}&to_date=${date2} ${toTime}&city_id=${selectcity}&city_loc_id=${selectlocation}&cur_type=1&vehicle_type=${cartype}&brand_type=${brand}`,
              method:"GET",
              headers: {
                'Content-Type': 'application/json'
            },
          }).then((response)=>{
              console.log(response.data,'data');
              setlist(response.data.Models)
              setfacilities(response.data.Models.specifications)
              response.data.Models.forEach((el)=>{
    
               })
              
          }).catch((err) => {
            if(err.request){ console.log(err.request) } if(err.response){ 
                console.log(err.response)
          
          }})
          await axios({
              url:`${REACT_APP_SERVER_URL}/api/web/maker/list`,
              method:"GET",
              headers: {
                'Content-Type': 'application/json'
            },
          }).then((response)=>{
              setmaker(response.data.cateDet)
          }).catch((err) => {
            if(err.request){ console.log(err.request) } if(err.response){ 
                console.log(err.response)
          
          }})
          await axios({
              url:`${REACT_APP_SERVER_URL}/api/web/category/list`,
              method:"GET",
              headers: {
                'Content-Type': 'application/json'
            },
          }).then((response)=>{
              setcategory(response.data.cateDet)
          }).catch((err) => {
            if(err.request){ console.log(err.request) } if(err.response){ 
                console.log(err.response)
          
          }})
      }
      const sortedProducts = [...list].sort((a, b) => {
        if (sortByLowToHigh) {
          return a.Offer_Rate - b.Offer_Rate;
        } else if (sortByHighToLow) {
          return b.Offer_Rate - a.Offer_Rate;
        } else {
          return list;
        }
      });
      const handleBooking=async(id,offer,perday)=>{
        if(token){
            navigate('/detailpage',{state:{
              model_id:id,
              selectcity:selectcity,
              selectlocation:selectlocation,
              Day1:startDate,
              fromTime:fromTime,
              Day2:enddate,
              toTime:toTime,
              offerrate:offer,
              perdayrate:perday
            }})
            console.log(selectcity);
        }
        else{
            navigate('/login')
            alert("login for booking")
        }
     }
      // console.log(
    
      //    fromDate,'ajith'
      // );
      // console.log(c);
      return (
        <div>
            <Navbar/>
            <section>
          <div class="content_listing">
            <div class="container">
              <div class="row">
    
                <div class="search-edit">
                  
                  <div class="city_edit">
                  <select  onChange={handelCity} value={selectcity}>
                                {city.map((e)=>{
                                    return(
    
                                        <option key={e.city_id} value={e.city_id}>{e.city_name}</option>
                                    )
                                })}
                            </select>
                          
                            {/* <label for="exampleFormControlSelect1" className="banner-form-label">SELECT LOCATION</label> */}
                            <select  onChange={handleLocation} value={selectlocation}>
                              <option>--select--</option>
                             {Location.map((e)=>{
                              return(
                                <option value={e.locationId}>{e.locationName}</option>
                              )
                             })}
                            </select>
                  </div>
                          
                  <div class="date_time">
                    {/* <input type="date" placeholder="Pickup Date"  name="dateInput" value="" required/> */}
                    <DatePicker
            id="from-date"
            selected={fromDate}
            onChange={handleFromDateChange}
            minDate={new Date()}
            startDate={fromDate}
            selectsStart
            dateFormat="dd/MM/yyyy"
            className='form-control'
          />
                   <select name="ddlpickTime" id="ddlpickTime" className="time-box"  onChange={handleFromTime} value={fromTime}>
    
                
    <option value="00:00:00">00:00</option>
    <option value="00:30:00">00:30</option>
    <option value="01:00:00">01:00</option>
    <option value="01:30:00">01:30</option>
    <option value="02:00:00">02:00</option>
    <option value="02:30:00">02:30</option>
    <option value="03:00:00">03:00</option>
    <option value="03:30:00">03:30</option>
    <option value="04:00:00">04:00</option>
    <option value="04:30:00">04:30</option>
    <option value="05:00:00">05:00</option>
    <option value="05:30:00">05:30</option>
    <option value="06:00:00">06:00</option>
    <option value="06:30:00">06:30</option>
    <option value="07:00:00">07:00</option>
    <option value="07:30:00">07:30</option>
    <option value="08:00:00">08:00</option>
    <option value="08:30:00">08:30</option>
    <option value="09:00:00">09:00</option>
    <option value="09:30:00">09:30</option>
    <option value="10:00:00">10:00</option>
    <option value="10:30:00">10:30</option>
    <option value="11:00:00">11:00</option>
    <option value="11:30:00">11:30</option>
    <option value="12:00:00">12:00</option>
    <option value="12:30:00">12:30</option>
    <option value="13:00:00">13:00</option>
    <option value="13:30:00">13:30</option>
    <option value="14:00:00">14:00</option>
    <option value="14:30:00">14:30</option>
    <option value="15:00:00">15:00</option>
    <option value="15:30:00">15:30</option>
    <option value="16:00:00">16:00</option>
    <option value="16:30:00">16:30</option>
    <option value="17:00:00">17:00</option>
    <option value="17:30:00">17:30</option>
    <option value="18:00:00">18:00</option>
    <option value="18:30:00">18:30</option>
    <option value="19:00:00">19:00</option>
    <option value="19:30:00">19:30</option>
    <option value="20:00:00">20:00</option>
    <option value="20:30:00">20:30</option>
    <option value="21:00:00">21:00</option>
    <option value="21:30:00">21:30</option>
    <option value="22:00:00">22:00</option>
    <option value="22:30:00">22:30</option>
    <option value="23:00:00">23:00</option>
    <option value="23:30:00">23:30</option>
    </select>
                  </div>
                  <div class="date_time">
                    {/* <input type="date" placeholder="Return Date"  name="dateInput" value="" required/> */}
                    <DatePicker
            id="to-date"
            selected={toDate}
            onChange={handleToDateChange}
            minDate={toDate}
            startDate={toDate}
            selectsEnd
            disabled={!tomorrow} // disable until from date is selected
            dateFormat="dd/MM/yyyy"
            className='form-control'
          />
                    <select name="ddlpickTime" id="ddlpickTime" className="time-box" value={toTime} onChange={handleToTime}>
              <option value="00:00:00">00:00</option>
                  <option value="00:30:00">00:30</option>
                  <option value="01:00:00">01:00</option>
                  <option value="01:30:00">01:30</option>
                  <option value="02:00:00">02:00</option>
                  <option value="02:30:00">02:30</option>
                  <option value="03:00:00">03:00</option>
                  <option value="03:30:00">03:30</option>
                  <option value="04:00:00">04:00</option>
                  <option value="04:30:00">04:30</option>
                  <option value="05:00:00">05:00</option>
                  <option value="05:30:00">05:30</option>
                  <option value="06:00:00">06:00</option>
                  <option value="06:30:00">06:30</option>
                  <option value="07:00:00">07:00</option>
                  <option value="07:30:00">07:30</option>
                  <option value="08:00:00">08:00</option>
                  <option value="08:30:00">08:30</option>
                  <option value="09:00:00">09:00</option>
                  <option value="09:30:00">09:30</option>
                  <option value="10:00:00">10:00</option>
                  <option value="10:30:00">10:30</option>
                  <option value="11:00:00">11:00</option>
                  <option value="11:30:00">11:30</option>
                  <option value="12:00:00">12:00</option>
                  <option value="12:30:00">12:30</option>
                  <option value="13:00:00">13:00</option>
                  <option value="13:30:00">13:30</option>
                  <option value="14:00:00">14:00</option>
                  <option value="14:30:00">14:30</option>
                  <option value="15:00:00">15:00</option>
                  <option value="15:30:00">15:30</option>
                  <option value="16:00:00">16:00</option>
                  <option value="16:30:00">16:30</option>
                  <option value="17:00:00">17:00</option>
                  <option value="17:30:00">17:30</option>
                  <option value="18:00:00">18:00</option>
                  <option value="18:30:00">18:30</option>
                  <option value="19:00:00">19:00</option>
                  <option value="19:30:00">19:30</option>
                  <option value="20:00:00">20:00</option>
                  <option value="20:30:00">20:30</option>
                  <option value="21:00:00">21:00</option>
                  <option value="21:30:00">21:30</option>
                  <option value="22:00:00">22:00</option>
                  <option value="22:30:00">22:30</option>
                  <option value="23:00:00">23:00</option>
                  <option value="23:30:00">23:30</option>
              </select>
                  </div>
                  <button onClick={getData}>Search</button>
                </div>
              </div>
            </div>
            <div class="container">
              <div class="row">
                <div class="col-lg-3  col-md-3 col-sm-12 Listing_sidebar">
                  <h3>Sort & Filters</h3>
                  <div class="filter_block">
                    <h4>Sort</h4>
                    <ul>
                      <li>
                        <label>
                          <input type="radio" name="sort" onClick={() => {setSortByLowToHigh(false); setSortByHighToLow(false)}}/>
                          Featured
                        </label>
                        <label>
                          <input type="radio" name="sort" onClick={() => {setSortByLowToHigh(true); setSortByHighToLow(false)}}/>
                          Price - Low - High
                        </label>
                        <label>
                          <input type="radio" name="sort" onClick={() => {setSortByHighToLow(true); setSortByLowToHigh(false)}}/>
                          Price - High - Low
                        </label>
                      </li>
                    </ul>
                  </div>
                  <div class="filter_block">
                  
                    <h4>Brand</h4>
    
                    <select onChange={handlebrand} value={brand}  >
                      {maker.map((mak)=>{
                        return(
                    <option key={mak.maker_id} value={mak.maker_id} >{mak.maker_name}</option>
                  )
                })}
                    </select>
                    
                  </div>
                  <div class="filter_block">
                    <h4>Car type</h4>
                    <select onChange={handlecartype} value={cartype}>
                      {category.map((cat)=>{
                        return(
                         
                  <option key={cat.model_cat_id} value={cat.model_cat_id}>{cat.model_cat_name}</option>
                    
    
                  )
                })}
                    </select>
                  </div>
                </div>
                <div class="col-lg-9  col-md-9 col-sm-12 Listing_block">
                  <div class="sort-box">
                    <div class="filter-phone">
                      Filter
                    </div>
                    <div class="search_edit_edit">
                      <i class="fas fa-search"></i>
                    </div>
                  </div>
                  <div class="listing_flex">
                  {sortedProducts.map((car)=>{
                return(
                    <div class="single_block" key={car.Model_Id}>
                      <div class="image_block">
                        <img src={REACT_APP_SERVER_URL+car.Model_image}/>
                      </div>
                      <div class="detail_block">
                      <h2 id={car.Model_Id}>{car.Maker} {car.Model_name}</h2>
                        <div className="specification">
                    <ul>
                     { car.specifications.length>0?
                      car.specifications.map((spef, index)=>{
                          return(
    
                            <li key={index}>
                          <img style={{width:20,height:20}} src={REACT_APP_SERVER_URL+spef[1]}/>&nbsp;
                          <span >{spef[0]}</span>&nbsp;
                          
                        </li>
                          )
                        }):""}
                                        
                    </ul>
                  </div>
                        <div className="rate_details">
                    <div>
                      <span className="offer_p">{car.Currency_code} {car.Offer_Rate}</span>
                      <span className="orig_p">{car.Currency_code} {car.Main_Rate}</span>
                      <p><b>{car.Rate_per_day}</b> / Day</p>
                      </div>
                      <div>
                        
                        {car.Model_Available>0?<button onClick={()=>{handleBooking(car.Model_Id,car.Offer_Rate,car.Rate_per_day)}}>Pay Now</button>:<button className='car-price-btn-out'>Rented Out</button>}
                      </div>
                    </div>
                  </div>
                </div>
                       )
                      })}
                        
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
                
              </section>
              <Footer/>
        </div>
      )
    }
    
export default RentalPage