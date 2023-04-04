import React from 'react'
import footerbg from '../Assets/images/footer-svg.png'

const Footer = () => {
  return (
    <div>
        <section>
<div className="footer-bx">
    <img src={footerbg} className="img-fluid footer-svg" alt=""/>
<div className="container">
    <div className="row">
        <div className="col-lg-3 col-6 footer-category-col">
            <div className="footer-txt">
                <h5 className="footer-category">MASSIVE CHOICE</h5>
                <ul className="footer-ul">
                    <li><a href="" className="massive-choices">SHORT TERM CAR RENTALS</a></li>
                    <li><a href="" className="massive-choices">LONG TERM CAR RENTAL</a></li>
                    <li><a href="" className="massive-choices">LEASE TO OWN</a></li>
                    <li><a href="" className="massive-choices">CAR FOR SALE</a></li>
                    <li><a href="" className="massive-choices">LIMOUSINE ANDCHAUFFER</a></li>
                    <li><a href="" className="massive-choices">SERVICE & MAINTENANCE</a></li>
                </ul>
            </div>
        </div>
        <div className="col-lg-3 col-6 footer-category-col">
            <div className="footer-txt">
                <h5 className="footer-category">GENERAL INFORMATION</h5>
                <ul className="footer-ul">
                    <li><a href="" className="massive-choices">FAQ</a></li>
                    <li><a href="" className="massive-choices">TERMS AND CONDITIONS</a></li>
                    <li><a href="" className="massive-choices">OUR PROCESS AND PACKAGES</a></li>
                    <li><a href="" className="massive-choices">REQUIREMENTS</a></li>
                </ul>
            </div>
        </div>
        <div className="col-lg-3 col-6 footer-category-col">
            <div className="footer-txt">
                <h5 className="footer-category">QUICK LINKS</h5>
                <ul className="footer-ul">
                    <li><a href="" className="massive-choices">ABOUT US</a></li>
                    <li><a href="" className="massive-choices">CAR RENTAL</a></li>
                    <li><a href="" className="massive-choices">CAREERS</a></li>
                    <li><a href="" className="massive-choices">CONTACT</a></li>
                </ul>
            </div>
        </div>
        <div className="col-lg-3 col-6 footer-category-col">
            <div className="footer-txt">
                <div className="news">
                <h5 className="footer-category">NEWS LETTER</h5>
                <div className="custom-file footer-submit">
                    <input type="text" className="custom-file-input news-submit" id="customFile"/>
                    <label className="custom-file-label"></label>
                  </div>
                </div>
                <div className="follow-us">
                    <h5 className="footer-category">FOLLOW US</h5>
                    <div className="social-media">
                        <a href=""> <i className="fab fa-twitter-square follow-icon"></i></a>
                        <a href=""> <i className="fab fa-facebook-square follow-icon"></i></a>
                         <a href=""><i className="fab fa-instagram-square follow-icon"></i></a>
                         <a href=""><i className="fab fa-youtube follow-icon"></i></a>
                         <a href=""><i className="fab fa-linkedin follow-icon"></i></a>
                       </div>
                    </div>
            </div>
        </div>

    </div>
</div>
</div>
<div className="copy-right">
    <p className="copy-right-txt">COPYRIGHT © 2023 HEX RENTAL. ALL RIGHTS RESERVED</p>
</div>
</section>
    </div>
  )
}

export default Footer