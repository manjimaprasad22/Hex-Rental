import axios from 'axios'
import { data } from 'jquery'
import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Footer from '../../Components/Footer'
import Navbar from '../../Components/Navbar'
import toast, { Toaster } from 'react-hot-toast'

const OtpVerification = () => {
  const location  = useLocation()
  const { REACT_APP_SERVER_URL } = process.env;
  const navigate = useNavigate()
  const [otp,setOtp] = useState()
  const [isLoading, setisLoading] = useState(false)
  const customer_id = location.state.customer_id

  const handleSubmit=async(e)=>{
    setisLoading(true)
    e.preventDefault();
    await axios({
      url:`${REACT_APP_SERVER_URL}/api/customer/otp-verify?customer_id=${customer_id}&otp=${otp}&device_type=1&device_token=abcd`,
      method:'GET',
      headers: {
        'Content-Type': 'application/json'
    },
      
    }).then((res)=>{
      if(res.data.status ==1){
        console.log(res.data,"succss");
        toast.success('otp verified')
        // localStorage.setItem('token', res.data.access_token);
        setisLoading(false)
        navigate('/login')
      }
      else{
        toast.error(res.data.message)
            console.log(res.data);
            setisLoading(false)
      }
    }).catch((err) => {
      if(err.request){ console.log(err.request) } if(err.response){ 
          console.log(err.response)
          toast.error(err.response.data.message)
          setisLoading(false)
      }})
  }
  const handleResentOtp=async()=>{
    await  axios({
      url:`${REACT_APP_SERVER_URL}/api/customer/resent-otp?customer_id=${customer_id}`,
      method:'GET',
      headers: {
        'Content-Type': 'application/json'
    },
    }).then((res)=>{
      console.log(res.data,"otp");
    }).catch((err) => {
      if(err.request){ console.log(err.request) } if(err.response){ 
          console.log(err.response)
          toast.error(err.response.data.message)
      }})
  }
  return (
    <div>
        <Navbar/>
         
             <div className="content_auth">
      <div className="cover-shadow"></div>
      <div className="container">
          <div className="row">
            <div className="form_authentication single_item_form">
              <h2> Please Login To Continue</h2>
              <form onSubmit={handleSubmit}>
              <div className="form_auth3">                
                <div className="fields_fm">
                  <label>Enter Your Mobile Number</label>
                  <input type="text" name="" placeholder="Enter otp" onChange={(e)=>{setOtp(e.target.value)}}  required/>
                </div>
                
                <div className="full_wd">
                    <button className="reg" type='submit'>{isLoading?"Loading":"Verify"}</button>
                    <Link onClick={handleResentOtp} style={{float:"right"}}>Resent otp </Link>
                </div>
              </div>
              </form>
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

export default OtpVerification