import { Icon } from '@iconify/react'
import React from 'react'

export default function Footer() {
    return (
        <footer id="footer">
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className='col-lg-3 col-md-3 col-xs-6 col-sm-6'>
                            <div className="footer">
                                <h3 className="footer-title">About Us</h3>
                                <p>We offer you to buy high-quality musical instruments by low prices. If you have advertisement offers contact us by email given bellow.</p>
                                <ul className="footer-links" >
                                    <li><a href="#" style={{textDecoration: 'none'}}><i><Icon icon="fa:map-marker"/></i>Marseille, Bouches-du-Rhône</a></li>
                                    <li><a href="#" style={{textDecoration: 'none'}}><i><Icon icon="fa:phone"/></i>+012-345-67-89</a></li>
                                    <li><a href="#" style={{textDecoration: 'none'}}><i><Icon icon="fa:envelope-o"/></i>maestro_de@gmail.com</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-3 col-xs-6 col-sm-6'>
                            <div className="footer">
                                <h3 className="footer-title">Categories</h3>
                                <ul className="footer-links">
                                    <li><a href="#" style={{textDecoration: 'none'}}>Hot deals</a></li>
                                    <li><a href="#" style={{textDecoration: 'none'}}>All</a></li>
                                    <li><a href="#" style={{textDecoration: 'none'}}>Guitars</a></li>
                                    <li><a href="#" style={{textDecoration: 'none'}}>Pianos</a></li>
                                    <li><a href="#" style={{textDecoration: 'none'}}>Percussion</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-3 col-xs-6 col-sm-6'>
                            <div className="footer">
                                <h3 className="footer-title">Information</h3>
                                <ul className="footer-links">
                                    <li><a href="#" style={{textDecoration: 'none'}}>About Us</a></li>
                                    <li><a href="#" style={{textDecoration: 'none'}}>Contact Us</a></li>
                                    <li><a href="#" style={{textDecoration: 'none'}}>Privacy Policy</a></li>
                                    <li><a href="#" style={{textDecoration: 'none'}}>Orders and Returns</a></li>
                                    <li><a href="#" style={{textDecoration: 'none'}}>Terms & Conditions</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-3 col-xs-6 col-sm-6'>
                            <div className="footer">
                                <h3 className="footer-title">Service</h3>
                                <ul className="footer-links">
                                    <li><a href="#" style={{textDecoration: 'none'}}>My Account</a></li>
                                    <li><a href="#" style={{textDecoration: 'none'}}>View Cart</a></li>
                                    <li><a href="#" style={{textDecoration: 'none'}}>Wishlist</a></li>
                                    <li><a href="#" style={{textDecoration: 'none'}}>Track My Order</a></li>
                                    <li><a href="#" style={{textDecoration: 'none'}}>Help</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="bottom-footer" className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <ul className="footer-payments">
                                <li><a href="#" style={{textDecoration: 'none'}}><i><Icon icon="fa:cc-visa" /></i></a></li>
                                <li><a href="#" style={{textDecoration: 'none'}}><i><Icon icon="fa:credit-card" /></i></a></li>
                                <li><a href="#" style={{textDecoration: 'none'}}><i><Icon icon="fa:cc-paypal" /></i></a></li>
                                <li><a href="#" style={{textDecoration: 'none'}}><i><Icon icon="fa:cc-mastercard" /></i></a></li>
                                <li><a href="#" style={{textDecoration: 'none'}}><i><Icon icon="fa:cc-discover" /></i></a></li>
                                <li><a href="#" style={{textDecoration: 'none'}}><i><Icon icon="fa:cc-amex" /></i></a></li>
                            </ul>
                            <span className="copyright">
                                Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | Maestro<i className="fa fa-heart-o" aria-hidden="true"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
