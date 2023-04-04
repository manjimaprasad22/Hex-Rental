import React, { useEffect, useState } from 'react'

import axios from 'axios';

const DateRangeSelector = () => {
  const [first, setfirst] = useState()
  const { REACT_APP_SERVER_URL } = process.env;
  const token = localStorage.getItem("token");
  
  useEffect(() => {
   getimage()
  }, [])
  
  const getimage=()=>{
    axios({
      url:`${REACT_APP_SERVER_URL}/api/item/search?from_date=2021-08-20 02:00:00&to_date=2021-08-21 10:30:00&city_id=1&city_loc_id=2&cur_type=1&vehicle_type=0&brand_type=0`,
      method:'GET',
      headers: {
        'Content-Type': 'application/json',
        "Authorization":`Bearer ${token}`,
    },
    }
    ).then((res)=>{
      console.log(res.data.Models[0].specifications);
      setfirst(res.data.Models[0].specifications)
    }).catch((err) => {
      if(err.request){ console.log(err.request) } if(err.response){ 
          console.log(err.response)
          setfirst()
      }})
  }
  return (
    <div>
      kjbj
      
      <img src={REACT_APP_SERVER_URL+first[1]} alt="" />
    </div>
  )
}

export default DateRangeSelector