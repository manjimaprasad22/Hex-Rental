import React, { useEffect, useState } from 'react'
import Footer from '../../Components/Footer'
import SideNav from '../../Components/SideNav'
import Navbar from '../../Components/Navbar'
import toast, { Toaster } from 'react-hot-toast'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Feedbackform = () => {
    const { REACT_APP_SERVER_URL } = process.env;
    const token = localStorage.getItem("token");
    const cus_ID = localStorage.getItem("cus_ID");
    const [fname, setfname] = useState()
    const [lname, setlname] = useState()
    const [email, setemail] = useState()
    const [message, setmessage] = useState()
    const [messgtype, setmessgtype] = useState()
    const navigate = useNavigate();
    const handleLogout=async()=>{ 
      window.localStorage.removeItem('token');
      window.localStorage.removeItem('cus_ID');
      window.localStorage.removeItem('name');
      navigate('/')
    }
    useEffect(() => {
     getData()
    }, [])
    
    const getData = async()=>{
        await axios({
          url:`${REACT_APP_SERVER_URL}/api/user/profile-update-info?customer_id=${cus_ID}`,
          method:'GET',
          headers: {
            'Content-Type': 'application/json',
            "Authorization":`Bearer ${token}`,
        },
        }).then((res)=>{
          setfname(res.data.First_name)
          setlname(res.data.Last_name)
          setemail(res.data.Email_Address)
  
        }).catch((err) => {
          if(err.request){ console.log(err.request) } if(err.response){ 
              console.log(err.response)
        
        }})
      } 
    const handleSumbit=async(e)=>{
        e.preventDefault();
        await axios({
            url:`${REACT_APP_SERVER_URL}/api/user/feedback?`,
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
                "Authorization":`Bearer ${token}`,
            },
            data:{
                feedback_type:messgtype,
                feedback_message:message,
                feedback_fname:fname,
                feedback_lname:lname,
                customer_id:cus_ID
            }
        }).then((res)=>{
            if(res.data.status == 1){
                toast.success(res.data.message)
            }
        }).catch((err) => {
            if(err.request){ console.log(err.request) } if(err.response){ 
                console.log(err.response)
          
          }})
    }
  return (
    <div>
        <Navbar/>
        <section>
      <div className="content_listing my_profile">
        
        <div className="container-fluid">
          <div className="row">
            <div className="menu-button_p">
              <button>Menu</button>
            </div>
            <div className="col-lg-3  col-md-3 col-sm-12 Listing_sidebar myaccount_sidebar">
              <ul>
                <li><Link to={'/profile'} className='sidelink'>Profile</Link></li>
                <li><Link to={'/rentalhistory'} className='sidelink'>Rental History</Link></li>
                <li><Link to={'/notification'} className='sidelink'>Notifications</Link></li>
                <li className="active-item"><Link to={'/feedback'} className='sidelink'>Feedback</Link></li>
                <li><Link to={'/reservation'} className='sidelink'>Reservations</Link></li>
                <li><Link to={'/trafficviolations'} className='sidelink'>Traffic Violations</Link></li>
                <li><Link to='/changepassword' className='sidelink'>Change Password</Link></li>
                <li><Link  onClick={handleLogout} className='sidelink'>Sign Out</Link></li>
              </ul>
              
            </div>
           
            <div className="col-lg-9  col-md-9 col-sm-12 Listing_block profile_det">
                <form onSubmit={handleSumbit}>
              <div className="profile-display">
                <div className=" box_area">
                  <label>First Name </label>
                  <input type="text" name="" value={fname}  required/>
                </div>
                <div className=" box_area">
                  <label>Last Name </label>
                  <input type="text" name="" value={lname} required/>
                </div>
                <div className=" box_area">
                  <label>Email </label>
                  <input type="text" name="" value={email} required/>
                </div>
                <div className=" box_area">
                  <label>Feedback Type </label>
                  <select onChange={(e)=>{setmessgtype(e.target.value)}} required>
                  <option disabled selected value="">select a type</option>
                    <option value={1}>Complaint</option>
                    <option value={2}>Suggestion</option>
                  </select>
                
                </div>
             
               
              
                <div className="box_area" style={{width:"100%"}}>
                  <label>Message </label>
                  <textarea onChange={(e)=>setmessage(e.target.value)}></textarea>
                </div>
                 
                  
                
        
               
                <div className="sub_mit">
                  <button type='submit'>Submit</button>
                </div>
              </div>              
                </form>
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

export default Feedbackform