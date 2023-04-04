import React from 'react'
import { Link } from 'react-router-dom'

const SideNav = () => {
  return (
    <>
        <div class="menu-button_p">
              <button>Menu</button>
            </div>
            <div class="col-lg-3  col-md-3 col-sm-12 Listing_sidebar myaccount_sidebar">
              <ul>
                <li class="active-item"><Link to={'/profile'}>Profile</Link></li>
                <li><a>Rental History</a></li>
                <li><a>Notifications</a></li>
                <li><Link to={'/feedback'}>Feedback</Link></li>
                <li><a>Reservations</a></li>
                <li><a>Traffic Violations</a></li>
                <li><Link to='/changepassword'>Change Password</Link></li>
                <li><a>Sign Out</a></li>
              </ul>
              
            </div>
    </>
  )
}

export default SideNav