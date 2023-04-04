import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../../Components/Footer'
import Navbar from '../../Components/Navbar'
import toast, { Toaster } from 'react-hot-toast'
import axios from 'axios'
import { useLocation } from 'react-router-dom'


const OtpVerifyForgot = () => {
  const location=useLocation()
  const { REACT_APP_SERVER_URL } = process.env;
  const navigate = useNavigate()
  const [otp,setOtp] = useState()    
  const [cntCode, setcntCode] = useState(location.state.code)
  const [number, setnumber] = useState(location.state.number)
  const [isLoading, setisLoading] = useState(false)
    const handleSubmit=async(e)=>{
      setisLoading(true)
      e.preventDefault();
        await axios({
            url:`${REACT_APP_SERVER_URL}/api/user/forgot-password/otp-verify?mobile_number=${number}&country_code=${cntCode}&otp=${otp}`,
            method:'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((res)=>{
            console.log(res.data);
            setisLoading(false)
            navigate('/resetpassword',{state:{
              number:number,
              code:cntCode
            }})
        }).catch((err) => {
            if(err.request){ console.log(err.request) } if(err.response){ 
                console.log(err.response)
                setisLoading(false)
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

export default OtpVerifyForgot