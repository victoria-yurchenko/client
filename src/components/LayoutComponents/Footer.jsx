import { Icon } from '@iconify/react'
import React from 'react'

export default function Footer() {
    return (
        <footer id="footer">
            <div class="section">
                <div class="container">
                    <div class="row">
                        <div className='col-lg-3 col-md-3 col-xs-6 col-sm-6'>
                            <div class="footer">
                                <h3 class="footer-title">About Us</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.</p>
                                <ul class="footer-links">
                                    <li><a href="#"><i><Icon icon="fa:map-marker"/></i>1734 Stonecoal Road</a></li>
                                    <li><a href="#"><i><Icon icon="fa:phone"/></i>+021-95-51-84</a></li>
                                    <li><a href="#"><i><Icon icon="fa:envelope-o"/></i>email@email.com</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-3 col-xs-6 col-sm-6'>
                            <div class="footer">
                                <h3 class="footer-title">Categories</h3>
                                <ul class="footer-links">
                                    <li><a href="#">Hot deals</a></li>
                                    <li><a href="#">Laptops</a></li>
                                    <li><a href="#">Smartphones</a></li>
                                    <li><a href="#">Cameras</a></li>
                                    <li><a href="#">Accessories</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-3 col-xs-6 col-sm-6'>
                            <div class="footer">
                                <h3 class="footer-title">Information</h3>
                                <ul class="footer-links">
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Orders and Returns</a></li>
                                    <li><a href="#">Terms & Conditions</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-3 col-xs-6 col-sm-6'>
                            <div class="footer">
                                <h3 class="footer-title">Service</h3>
                                <ul class="footer-links">
                                    <li><a href="#">My Account</a></li>
                                    <li><a href="#">View Cart</a></li>
                                    <li><a href="#">Wishlist</a></li>
                                    <li><a href="#">Track My Order</a></li>
                                    <li><a href="#">Help</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="bottom-footer" class="section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 text-center">
                            <ul class="footer-payments">
                                <li><a href="#"><i><Icon icon="fa:cc-visa" /></i></a></li>
                                <li><a href="#"><i><Icon icon="fa:credit-card" /></i></a></li>
                                <li><a href="#"><i><Icon icon="fa:cc-paypal" /></i></a></li>
                                <li><a href="#"><i><Icon icon="fa:cc-mastercard" /></i></a></li>
                                <li><a href="#"><i><Icon icon="fa:cc-discover" /></i></a></li>
                                <li><a href="#"><i><Icon icon="fa:cc-amex" /></i></a></li>
                            </ul>
                            <span class="copyright">
                                Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | Maestro<i class="fa fa-heart-o" aria-hidden="true"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
