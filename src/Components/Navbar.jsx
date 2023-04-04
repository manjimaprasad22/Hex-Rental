import React, { createContext, useEffect, useState } from 'react'
import '../Assets/style/style.css'
import logo from '../Assets/images/HexRentals-Logo.png'
import translate from '../Assets/images/google-translate.png'
import $ from 'jquery'
import { Link } from 'react-router-dom'
import Logout from './Logout'

const MyContext = createContext()

const Navbar = () => {
  const [token,setToken]= useState('')
  useEffect(() => {
    
  setToken(localStorage.getItem('token'))
    
  }, [token])
  
  
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 100) {
      $(".hedear-top").addClass("active");
    } else {
      //remove the background property so it comes transparent again (defined in your css)
      $(".hedear-top").removeClass("active");
    }
  });
  return (
    <div>
        <header className="hedear-top">
    <div className="container">
        <div className="total-banner">
        
        <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="#">
                <img className="hex-rental-logo" src={logo} alt=""/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          
            <div className="collapse navbar-collapse nav-menus nav-responsive" id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link nav-category hvr-underline-from-center" href="#">HOME<span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link nav-category hvr-underline-from-center" href="#">ABOUT US <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item active">
                    <Link className="nav-link nav-category hvr-underline-from-center" to={'/carlisting'}>CAR RENTAL <span className="sr-only">(current)</span></Link>
                  </li>
                  <li className="nav-item active">
                    <Link className="nav-link nav-category hvr-underline-from-center" >SERVICES <span className="sr-only">(current)</span></Link>
                  </li>
                  <li className="nav-item active">
                    <a className="nav-link nav-category hvr-underline-from-center" href="#">CAREERS<span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item active">
                    <a className="nav-link nav-category hvr-underline-from-center" href="#">GALLERY<span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item active">
                    <a className="nav-link nav-category hvr-underline-from-center" href="#">CONTACT US<span className="sr-only">(current)</span></a>
                  </li>
                  <div className="rental-nav-btn">
                  <MyContext.Provider value={[token,setToken]}>
                   {token?<Logout/>:
                <li className="nav-item dropdown hex-login">
                  <a className="nav-link dropdown-toggle hex-login-dropdown" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    LOGIN/REGISTRATION
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link className="dropdown-item" to={'/login'}>Login</Link>
                    <Link className="dropdown-item" to={'/register'}>Register</Link>
                    {/* <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Something else here</a> */}
                  </div>
                </li>
           }
           </MyContext.Provider>
                <div className="language">
                <li className="nav-item dropdown hex-login ar-btn">
                    <a className="nav-link dropdown-toggle hex-login-dropdown" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img src={translate} className="img-fluid" alt=""/>
                      AR
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a className="dropdown-item" href="#">Action</a>
                      <a className="dropdown-item" href="#">Another action</a>
                     
                      
                    </div>
                  </li>
                </div>
            </div>
    
              </ul>
         
            </div>
          </nav>
        </div>
        </div>
    </header>
    </div>
  )
}

export default Navbar
export {MyContext}