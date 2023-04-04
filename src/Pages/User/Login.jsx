import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../../Components/Footer'
import Navbar from '../../Components/Navbar'
import Swal from 'sweetalert2';
import $ from 'jquery'

const Login = () => {
  $(document).ready(function(){
    $(".search_edit_edit").click(function(){
    $(".search-edit").toggleClass("show_search");
    });
    $(".filter-phone").click(function(){
    $(".Listing_sidebar").toggleClass("show_filter");
    });
    });
    
  const navigate =  useNavigate()
  const { REACT_APP_SERVER_URL } = process.env;
  const [number, setnumber] = useState()
  const [password, setpassword] = useState()
  const [isLoading, setisLoading] = useState(false)
  const register=()=>{
    navigate('/register')
  }
  const handleSubmit=async(e)=>{
    setisLoading(true)
    e.preventDefault();
    
      
    
    //   // Swal.fire({
    //   //   title: 'Success!',
    //   //   text: 'You have successfully logged in.',
    //   //   icon: 'success',
    //   //   confirmButtonText: 'OK'
    //   // });
    //   navigate("/")
    
    // } catch (error) {
    //   console.log(error);
     
    //   // Swal.fire({
    //   //   title: 'Error!',
    //   //   text: 'Invalid username or password',
    //   //   icon: 'error',
    //   //   confirmButtonText: 'OK'
    //   // });
    //   // alert(error)
    // }
    await axios({
      headers:{"Content-type":"application/json"},
      url:`${REACT_APP_SERVER_URL}/api/customer/login?cust_mobile_number=&cust_password=&device_type=1&device_token=fgfgfg`,
      method:'POST',
      data:{
        cust_mobile_number:number,
        cust_password: password
      }
    }).then((res)=>{
      if (res.data.status == 1) {
        
        console.log(res.data,'login success');
        localStorage.setItem('token',res.data.access_token)
        localStorage.setItem('cus_ID',res.data.cust_id)
        localStorage.setItem('name',res.data.cust_fname+" " + res.data.cust_lname)
        Swal.fire({
          title: 'Success!',
          text: 'You have successfully logged in.',
          icon: 'success',
          confirmButtonText: 'OK'
        });
        setisLoading(false)
        navigate('/')
      }
      else if(res.data.status==2){
        setisLoading(false)
        console.log(res.data.otp,'otp');
        
        navigate('/verifyOTP',{state:{
          customer_id: res.data.customer_id
        }})
      }
    }).catch((err) => {
      if(err.request){ console.log(err.request) } if(err.response){ 
          console.log(err.response)
          Swal.fire({
            title: 'Error!',
            text: 'Invalid username or password',
            icon: 'error',
            confirmButtonText: 'OK'
          });
          setisLoading(false)
      }})
  }
  return (
    <div>
        <Navbar/>
         <div className="content_auth" >
      <div className="cover-shadow"></div>
      <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12 col-md-6 ">
              <div className="form_auth">
                <h2> Please Login To Continue</h2>
                <form onSubmit={handleSubmit}>
                <div className="fields_fm">
                  <label>Mobile Number</label>
                  <input type="number" name="" placeholder="Enter Your User Name" onChange={(e)=>{setnumber(e.target.value)}} required/>
                </div>
                <div className="fields_fm">
                  <label>Password</label>
                  <input type="password" name="" placeholder="Enter Your Password" onChange={(e)=>{setpassword(e.target.value)}} required/>
                </div>
                <button type='submit'>{isLoading? "Loading...":"Login"}</button>
                </form>
                <Link to={'/forgotpassword'}>Forgot Password? </Link>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 col-md-6  flex-center">
              <div className="reg-login">
                <h2>New Customer? </h2>
                <button onClick={register}>Create New Account</button>
                <p>
                  <i className="far fa-clock"></i>Save Time
                  <span>Fastest pick up and drop off car rental</span>
                </p>
                <p><i className="fas fa-cog"></i>
                  Manage Your Car Rental
                  <span>Booking and reserving cars are even more faster to manage</span>
                </p>
                <p>
                 <i className="fas fa-user"></i> Access Your Account
                  <span>Anytime and wherever you are</span>
                </p>
              </div>

            </div>
          </div>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Login