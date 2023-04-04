import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SideNav = () => {
    const token = localStorage.getItem("token");
    const cus_ID = localStorage.getItem('cus_ID')
    const name = localStorage.getItem('name')
    const navigate = useNavigate();
    const handleLogout=async()=>{ 
      window.localStorage.removeItem('token');
      window.localStorage.removeItem('cus_ID');
      window.localStorage.removeItem('name');
      navigate('/')
    }
  return (
    <>
        <div className="menu-button_p">
              <button>Menu</button>
            </div>
            <div className="col-lg-3  col-md-3 col-sm-12 Listing_sidebar myaccount_sidebar">
              <ul>
                <li className="active-item"><Link to={'/profile'} className='sidelink'>Profile</Link></li>
                <li><Link to={'/rentalhistory'} className='sidelink'>Rental History</Link></li>
                <li><Link to={'/notification'} className='sidelink'>Notifications</Link></li>
                <li><Link to={'/feedback'} className='sidelink'>Feedback</Link></li>
                <li><Link to={'/reservation'} className='sidelink'>Reservations</Link></li>
                <li><Link to={'/trafficviolations'} className='sidelink'>Traffic Violations</Link></li>
                <li><Link to='/changepassword' className='sidelink'>Change Password</Link></li>
                <li><Link  onClick={handleLogout} className='sidelink'>Sign Out</Link></li>
              </ul>
              
            </div>
    </>
  )
}

export default SideNav