import React, { useState } from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import toast, { Toaster } from 'react-hot-toast'
import axios from 'axios'
import SideNav from '../../Components/SideNav'
import { Link, useNavigate } from 'react-router-dom'

const ChangePassword = () => {
    const { REACT_APP_SERVER_URL } = process.env;
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const cus_ID = localStorage.getItem("cus_ID");
    const [oldpassword, setoldpassword] = useState()
    const [Password,setPassword] = useState()
    const [cnfpassword, setcnfpassword] = useState()
    const [isLoading,setisLoading] = useState(false)
    const [lengthError, setlengthError] = useState('');
    const [cnflengtherror, setcnflengtherror] = useState('');

    const validatePassword =(e)=>{
        if(e.target.value.length==0){
           setlengthError('This field is required')
         }
         else if(e.target.value.length<8){
           setlengthError("Please enter at least 8 characters.")
         }
         else{
           setlengthError("")
         }
       }
       const validateconfirmPassword=(e)=>{
         if(e.target.value.length==0){
           setcnflengtherror('This field is required')
         }
         else if(e.target.value.length<8){
           setcnflengtherror("Please enter at least 8 characters.")
         }
         else if(e.target.value !== Password){
           setcnflengtherror('Password does not match')
         }
         else{
           setcnflengtherror("")
         }
       }
     
    const handleSubmit=async(e)=>{
        e.preventDefault();
        if(Password != cnfpassword){
            toast.error("Password does not match")
        }
        else{

            await axios({
                url:`${REACT_APP_SERVER_URL}/api/user/change/password?customer_id=${cus_ID}&old_password=${oldpassword}&new_password=${Password}`,
                method:'GET',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization":`Bearer ${token}`,
                },
            }).then((res)=>{
                if(res.data.status == 1){
                    console.log(res.data);
                    toast.success(res.data.message)
                }
                else if(res.data.status == 0)
                    toast.error(res.data.message)
            }).catch((err) => {
                if(err.request){ console.log(err.request) } if(err.response){ 
                    console.log(err.response)
                    toast.error(err.response.data.message)
                }})
        }
    }
    const handleLogout=async()=>{ 
      window.localStorage.removeItem('token');
      window.localStorage.removeItem('cus_ID');
      window.localStorage.removeItem('name');
      navigate('/')
    }
  return (
  
          <div>
        <Navbar/>
        <section>
      <div className="content_listing my_profile">
        
        <div className="container-fluid">
          <div className="row">
          <div class="menu-button_p">
              <button>Menu</button>
            </div>
            <div class="col-lg-3  col-md-3 col-sm-12 Listing_sidebar myaccount_sidebar">
              <ul>
                <li ><Link to={'/profile'} className='sidelink'>Profile</Link></li>
                <li><Link to={'/rentalhistory'} className='sidelink'>Rental History</Link></li>
                <li><Link to={'/notification'} className='sidelink'>Notifications</Link></li>
                <li><Link to={'/feedback'} className='sidelink'>Feedback</Link></li>
                <li><Link to={'/reservation'} className='sidelink'>Reservations</Link></li>
                <li><Link to={'/trafficviolations'} className='sidelink'>Traffic Violations</Link></li>
                <li class="active-item"><Link to='/changepassword' className='sidelink'>Change Password</Link></li>
                <li><Link  onClick={handleLogout} className='sidelink'>Sign Out</Link></li>
              </ul>
              
            </div>
            
            <div className="col-lg-9  col-md-9 col-sm-12 Listing_block profile_det">
          
              <div className="form_auth">
              
                <form onSubmit={handleSubmit}>
                
                <div className="fields_fm">
                  <label>Current Password</label>
                  <input type="password" name="" placeholder="Enter Your User Name" onChange={(e)=>{setoldpassword(e.target.value)}} required/>
                </div>
                <div className="fields_fm">
                  <label>Password</label>
                  <input type="password" name="" placeholder="Enter Your Password" onKeyUp={(e)=>{setPassword(e.target.value)}} onChange={validatePassword} required/>
                  <span className='errormessg'>{lengthError}</span>
                </div>
                <div className="fields_fm">
                  <label>Confirm Password</label>
                  <input type="password" name="" placeholder="Enter Your Password" onKeyUp={(e)=>{setcnfpassword(e.target.value)}} onChange={validateconfirmPassword} required/>
                  <span className='errormessg'>{cnflengtherror}</span>
                </div>
                <button type='submit'>{isLoading? "Loading...":"Update Password"}</button>
                </form>
                </div>

            </div>
             
            
          </div>
        </div>
      </div>
      <Toaster
position="top-center"
reverseOrder={false}
/> 
    </section>
    <Footer/>
    </div>
   
  )
}

export default ChangePassword