import React, { useState } from 'react'
import Footer from '../../Components/Footer'
import Navbar from '../../Components/Navbar'
import toast, { Toaster } from 'react-hot-toast'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

const ResetPassword = () => {
    const { REACT_APP_SERVER_URL } = process.env;
    const location=useLocation()
    const [Password, setPassword] = useState()
    const [cnfpassword, setcnfpassword] = useState()
    const [validationError, setValidationError] = useState('');
    const [lengthError, setlengthError] = useState('');
    const [cntCode, setcntCode] = useState(location.state.code)
   const [number, setnumber] = useState(location.state.number)
   const [isLoading, setisLoading] = useState(false)
    const handlepassword =(e)=>{
        if(e.target.value.length<8){
            setlengthError("PASSWORD MUST BE ATLEAST 8 CHARACTERS")
        }
        // console.log(e.target.value);
    }
    const handlecnfpassword =()=>{
        
        // console.log(e.target.value);
        if (Password !== cnfpassword) {
            setValidationError("PASSWORD DOES NOT MATCH")
        }
        else{
            setValidationError("")
        }
    }
    const Validateform=async(e)=>{
        e.preventDefault();
        if (Password !== cnfpassword) {
            toast.error("password does not match")
        }
        else{
            setisLoading(true)
            handleSubmit()
        }
    }
    const handleSubmit=async()=>{
        await axios({
            url:`${REACT_APP_SERVER_URL}/api/user/reset-password?mobile_number=${number}&country_code=${cntCode}&password=${Password}&password_confirmation=${cnfpassword}`,
            method:'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((res)=>{
            console.log(res.data);
            toast.success("password changed successfully")
            setisLoading(false)
        }).catch((err) => {
            if(err.request){ console.log(err.request) } if(err.response){ 
                console.log(err.response)
                toast.error(err.response)
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
          <form onSubmit={Validateform}>
          <div className="form_auth3">                
            <div className="fields_fm">
              <label>New Password</label>
              <input type="text" name="" placeholder="Enter New Password" onBlur={handlepassword} onChange={(e)=>{setPassword(e.target.value)}}  required/>
            </div>
            <div className="fields_fm">
              <label>Confirm Password</label>
              <input type="text" name="" placeholder="Enter Confirm Password" onKeyUp={handlecnfpassword} onChange={(e)=>{setcnfpassword(e.target.value)}} required/>
              <p className='errormessg'>{validationError}</p>
            </div>
            
            <div className="full_wd">
                <button className="reg" type='submit'>{isLoading?"Loading":"Submit"}</button>
                
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

export default ResetPassword