import axios from 'axios'
import { data } from 'jquery'
import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MyContext } from './Navbar'

const Logout = () => {
    const [token,setToken] =useContext(MyContext)
    const { REACT_APP_SERVER_URL } = process.env;
    const cus_ID = localStorage.getItem('cus_ID')
    const name = localStorage.getItem('name')
    const navigate = useNavigate();
    const handleLogout=async()=>{ 
      window.localStorage.removeItem('token');
      window.localStorage.removeItem('cus_ID');
      window.localStorage.removeItem('name');
      setToken("")
      navigate('/')
        await axios({
            url:`${REACT_APP_SERVER_URL}/api/customer/logout?customer_id=${Number(cus_ID)}`,
            method:'GET',
            headers: {
              'Content-Type': 'application/json',
              "Authorization":`Bearer ${token}`,
          },
        }).then((res)=>{
            console.log(res.data,'logout succss');
           
        }).catch((err) => {
            if(err.request){ console.log(err.request) } if(err.response){ 
                console.log(err.response)
                
            }})
    }
    
  return (
    <div>
        <li className="nav-item dropdown hex-login">
                  <a className="nav-link dropdown-toggle hex-login-dropdown" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {name}
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link className="dropdown-item" to={'/profile'}>Profile</Link>
                    <Link className="dropdown-item" onClick={handleLogout}>Logout</Link>
                    
                    {/* <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Something else here</a> */}
                  </div>
                </li>
    </div>
  )
}

export default Logout