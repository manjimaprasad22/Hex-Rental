import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import axios from 'axios';
import { event } from 'jquery';
import React, { createContext, useEffect, useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from 'react-router-dom';
import ListingPage from '../Pages/ListingPage';




const SearchCarBox = () => {
  

    const navigate = useNavigate(); 
    const { REACT_APP_SERVER_URL } = process.env;
    const [list,setlist] = useState([])
    const [fromDate, setFromDate] = useState(new Date());
    const [toDate, setToDate] = useState("");
    const [fromTime, setFromTime] = useState('00:00:00');
    const [toTime, settoTime] = useState('00:00:00');
    const [city, setcity] = useState(['']);
    const [location, setlocation] = useState(['']);
    const [selectcity, setselectcity] = useState();
    const [selectlocation, setselectlocation] = useState('');
    
    const tomorrow = new Date(fromDate);
    tomorrow.setDate(tomorrow.getDate() + 1);
    useEffect(() => {
      fetchCity()
    }, [])
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
   
  const handleFromDateChange = (date) => {
    console.log(date,'from date');
    setFromDate(date);
    setToDate(null); // reset to date when from date changes
    const tomorrow = new Date(date);
    tomorrow.setDate(tomorrow.getDate() + 1);
    console.log(tomorrow,'lala');
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

  
  
  const handelCity=(event)=>{
    setselectcity(event.target.value)
    fetchLocation(event.target.value) 
    console.log(event.target.value,'city selected');
  }
  const fetchLocation=async(data)=>{

    await axios({
      url:`${REACT_APP_SERVER_URL}/api/fetch/city/location-web?city_id=${Number(data)}`,
      method:"GET",
  }).then((response)=>{
      console.log(response.data,'location');
      setlocation(response.data)            
  }) .catch((err) => {
      if(err.request){ console.log(err.request) } if(err.response){ 
          console.log(err.response)
    
    }})
  }
  const handleLocation=(event)=>{
    setselectlocation(event.target.value)
    console.log(event.target.value,'loc');
  }
  
  const searchCar=async()=>{
    
    
        navigate('/carlisting',{state:
          { selectcity:selectcity,
            selectlocation:selectlocation,
            fromDate:fromDate,
            toDate:toDate,
          fromTime:fromTime,
        toTime:toTime,
     
  }})
}

  return (
    
        <div className="col-lg-4 car-banner-img">
            <div className="banner-registration">
          <form onSubmit={searchCar}>
                <div className="banner-registration-registration">
                    <h6 className="banner-register-name">Search your ride</h6>
                </div>
                    <div className="form-group">
                        <label for="exampleFormControlSelect1" className="banner-form-label">SELECT CITY</label>
                        <select className="form-control" id="exampleFormControlSelect1" onChange={handelCity}  required>
                        <option disabled selected value="">Please choose City</option>
                            {city.map((e)=>{
                                return(

                                    <option key={e.city_id} value={e.city_id}>{e.city_name}</option>
                                )
                            })}
                        </select>
                      </div>
                      <div className="form-group">
                        <label for="exampleFormControlSelect1" className="banner-form-label">SELECT LOCATION</label>
                        <select className="form-control" id="exampleFormControlSelect1" onChange={handleLocation} required>
                        <option disabled selected value="">select  Location</option>
                         {location.map((e)=>{
                          return(
                            <option value={e.locationId}>{e.locationName}</option>
                          )
                         })}
                        </select>
                      </div>
                      
    
        <div className="row">
            <div className="form-group col-md-6 col-6 date-col">
                <label for="exampleFormControlSelect1" className="banner-form-label">PICKUP DATE</label>
                
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

            </div>
           
            <div className="form-group col-md-6 col-6 time-col">
                <label for="exampleFormControlSelect1" className="banner-form-label">PICKUP TIME</label>
                <select name="ddlpickTime" id="ddlpickTime" className="time-box form-control" value={fromTime} onChange={handleFromTime} >
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
          </div>
       
         
         <div className="row">
            <div className="form-group col-md-6 col-6 date-col">
                <label for="exampleFormControlSelect1" className="banner-form-label">RETURN DATE</label>
                {/* <input name="txtdate" type="date" id="txtdate" className="form-control"/> */}
                <DatePicker
        id="to-date"
        selected={toDate}
        onChange={handleToDateChange}
        minDate={tomorrow}
        startDate={tomorrow}
        selectsEnd
        disabled={!tomorrow} // disable until from date is selected
        dateFormat="dd/MM/yyyy"
        className='form-control'
        required
      />
                
            </div>
            <div className="form-group col-md-6 col-6 time-col">
                <label for="exampleFormControlSelect1" className="banner-form-label">RETURN TIME</label>
                <select name="ddlpickTime" id="ddlpickTime" className="time-box form-control" value={toTime} onChange={handleToTime} >
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
          </div>
          
         <div className="form-register">         
         <button className="btn btn-primary form-register-btn" type="submit" >SEARCH</button>
         
        </div> 
        </form>
            </div>
            
            
        </div>
        
  )
}

export default SearchCarBox
