import React, { useEffect, useRef } from 'react';
import './../App.css';
import Slider from 'react-slick';
import { useState } from 'react';
import { Icon } from '@iconify/react';

export default function Product() {

    // const productImgsRef = useRef(null);
    // const productMainImgRef = useRef(null);

    // useEffect(() => {
    //     var zoomMainProduct = document.getElementById('product-main-img');
    //     if (zoomMainProduct) 
    //     document.getElementById('product-main-img').zoom();
    // }, mainImgRef);

    // const mainImgRef = useRef(null);

    var zoomMainProduct = document.getElementById('product-main-img');
    if (zoomMainProduct) {
        document.getElementById('product-main-img').zoom();
        document.getElementById('product-preview').zoom();
    }

    const settingsProductMainImg = {
        infinite: true,
        speed: 300,
        dots: false,
        arrows: true,
        fade: true,
        // asNavFor: productImgsRef,
    }

    const settingsProductImgs = {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: 0,
        vertical: true,
        // asNavFor: productMainImgRef,
        responsive: [{
            breakpoint: 991,
            settings: {
                vertical: false,
                arrows: false,
                dots: true,
            }
        },
        ]
    }

    const src = 'https://media.istockphoto.com/id/1124394341/photo/colorful-piano-key-board.jpg?s=612x612&w=0&k=20&c=C2ld3WdyXxJYcUoE4qne1DvC9PDsz_1mC5SgS7_W4ks=';
    const [currentState, setCurrentState] = useState({
        backgroundImage: `url(${src})`,
        backgroundPosition: '0% 0%'
    });

    const handleMouseMove = (event) => {
        debugger;
        const { left, top, width, height } = event.target.getBoundingClientRect()
        const x = (event.pageX - left) / width * 100
        const y = (event.pageY - top) / height * 100
        let state = {
            backgroundImage: currentState.backgroundImage,
            backgroundPosition: `${x}% ${y}%`
        }
        setCurrentState(state);
    }


    return (
        <div class="section">
            <div class="container">
                <div class="row">
                    <div class="col-md-5 col-md-push-2">
                        <div class="product-preview">
                            <figure onMouseMove={handleMouseMove} style={currentState} >
                                <img src={src} alt='' />
                            </figure>
                        </div>
                    </div>

                    <div class="col-md-2  col-md-pull-5">
                        <Slider  {...settingsProductImgs} id="product-main-img">
                            {/* <div ref={productImgsRef} id="product-imgs"> */}
                            <div class="product-preview">
                                <img src="https://media.istockphoto.com/id/1124394341/photo/colorful-piano-key-board.jpg?s=612x612&w=0&k=20&c=C2ld3WdyXxJYcUoE4qne1DvC9PDsz_1mC5SgS7_W4ks=" alt="" />
                            </div>

                            <div class="product-preview">
                                <img src="https://s3.envato.com/files/237260205/2607171119.jpg" alt="" />
                            </div>

                            <div class="product-preview">
                                <img src="https://media.istockphoto.com/id/1124394341/photo/colorful-piano-key-board.jpg?s=612x612&w=0&k=20&c=C2ld3WdyXxJYcUoE4qne1DvC9PDsz_1mC5SgS7_W4ks=" alt="" />
                            </div>

                            <div class="product-preview">
                                <img src="https://s3.envato.com/files/237260205/2607171119.jpg" alt="" />
                            </div>
                            {/* </div> */}
                        </Slider>
                    </div>

                    <div class="col-md-5">
                        <div class="product-details">
                            <h2 class="product-name">product name goes here</h2>
                            <div>
                                <div class="product-rating">
                                    <i><Icon icon='fa:star' /></i>
                                    <i><Icon icon='fa:star' /></i>
                                    <i><Icon icon='fa:star' /></i>
                                    <i><Icon icon='fa:star' /></i>
                                    <i><Icon icon='fa:star-o' /></i>
                                </div>
                                <a class="review-link" href="#">10 Review(s) | Add your review</a>
                            </div>
                            <div>
                                <h3 class="product-price">$980.00 <del class="product-old-price">$990.00</del></h3>
                                <span class="product-available">In Stock</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                            <div class="product-options">
                                <label>
                                    Size
                                    <select class="input-select">
                                        <option value="0">X</option>
                                    </select>
                                </label>
                                <label>
                                    Color
                                    <select class="input-select">
                                        <option value="0">Red</option>
                                    </select>
                                </label>
                            </div>

                            <div class="add-to-cart">
                                <div class="qty-label">
                                    Qty
                                    <div class="input-number">
                                        <input type="number" />
                                        <span class="qty-up">+</span>
                                        <span class="qty-down">-</span>
                                    </div>
                                </div>
                                <button class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i> add to cart</button>
                            </div>

                            <ul class="product-btns">
                                <li><a href="#"><i><Icon icon='fa:heart-o' /></i> add to wishlist</a></li>
                                <li><a href="#"><i><Icon icon='fa:exchange' /></i> add to compare</a></li>
                            </ul>

                            <ul class="product-links">
                                <li>Category:</li>
                                <li><a href="#">Headphones</a></li>
                                <li><a href="#">Accessories</a></li>
                            </ul>

                            <ul class="product-links">
                                <li>Share:</li>
                                <li><a href="#"><i><Icon icon='fa:facebook' /></i></a></li>
                                <li><a href="#"><i><Icon icon='fa:twitter' /></i></a></li>
                                <li><a href="#"><i><Icon icon='fa:google-plus' /></i></a></li>
                                <li><a href="#"><i><Icon icon='fa:envelope' /></i></a></li>
                            </ul>

                        </div>
                    </div>

                    <div class="col-md-12">
                        <div id="product-tab">
                            <ul class="tab-nav">
                                <li class="active"><a data-toggle="tab" href="#tab1">Description</a></li>
                                <li><a data-toggle="tab" href="#tab2">Details</a></li>
                                <li><a data-toggle="tab" href="#tab3">Reviews (3)</a></li>
                            </ul>

                            <div class="tab-content">
                                <div id="tab1" class="tab-pane fade in active">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        </div>
                                    </div>
                                </div>

                                <div id="tab2" class="tab-pane fade in">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        </div>
                                    </div>
                                </div>

                                <div id="tab3" class="tab-pane fade in">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <div id="rating">
                                                <div class="rating-avg">
                                                    <span>4.5</span>
                                                    <div class="rating-stars">
                                                        <i><Icon icon='fa:star' /></i>
                                                        <i><Icon icon='fa:star' /></i>
                                                        <i><Icon icon='fa:star' /></i>
                                                        <i><Icon icon='fa:star' /></i>
                                                        <i><Icon icon='fa:star-o' /></i>
                                                    </div>
                                                </div>
                                                <ul class="rating">
                                                    <li>
                                                        <div class="rating-stars">
                                                            <i><Icon icon='fa:star' /></i>
                                                            <i><Icon icon='fa:star' /></i>
                                                            <i><Icon icon='fa:star' /></i>
                                                            <i><Icon icon='fa:star' /></i>
                                                            <i><Icon icon='fa:star' /></i>
                                                        </div>
                                                        <div class="rating-progress">
                                                            <div style={{ width: "80%" }}></div>
                                                        </div>
                                                        <span class="sum">3</span>
                                                    </li>
                                                    <li>
                                                        <div class="rating-stars">
                                                            <i><Icon icon='fa:star' /></i>
                                                            <i><Icon icon='fa:star' /></i>
                                                            <i><Icon icon='fa:star' /></i>
                                                            <i><Icon icon='fa:star-o' /></i>
                                                        </div>
                                                        <div class="rating-progress">
                                                            <div style={{ width: "60%" }}></div>
                                                        </div>
                                                        <span class="sum">2</span>
                                                    </li>
                                                    <li>
                                                        <div class="rating-stars">
                                                            <i><Icon icon='fa:star' /></i>
                                                            <i><Icon icon='fa:star' /></i>
                                                            <i><Icon icon='fa:star' /></i>
                                                            <i><Icon icon='fa:star-o' /></i>
                                                            <i><Icon icon='fa:star-o' /></i>
                                                        </div>
                                                        <div class="rating-progress">
                                                            <div></div>
                                                        </div>
                                                        <span class="sum">0</span>
                                                    </li>
                                                    <li>
                                                        <div class="rating-stars">
                                                            <i><Icon icon='fa:star' /></i>
                                                            <i><Icon icon='fa:star' /></i>
                                                            <i><Icon icon='fa:star-o' /></i>
                                                            <i><Icon icon='fa:star-o' /></i>
                                                            <i><Icon icon='fa:star-o' /></i>
                                                        </div>
                                                        <div class="rating-progress">
                                                            <div></div>
                                                        </div>
                                                        <span class="sum">0</span>
                                                    </li>
                                                    <li>
                                                        <div class="rating-stars">

                                                            <i><Icon icon='fa:star' /></i>
                                                            <i><Icon icon='fa:star-o' /></i>
                                                            <i><Icon icon='fa:star-o' /></i>
                                                            <i><Icon icon='fa:star-o' /></i>
                                                            <i><Icon icon='fa:star-o' /></i>
                                                        </div>
                                                        <div class="rating-progress">
                                                            <div></div>
                                                        </div>
                                                        <span class="sum">0</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <div id="reviews">
                                                <ul class="reviews">
                                                    <li>
                                                        <div class="review-heading">
                                                            <h5 class="name">John</h5>
                                                            <p class="date">27 DEC 2018, 8:0 PM</p>
                                                            <div class="review-rating">
                                                                <i><Icon icon='fa:star' /></i>
                                                                <i><Icon icon='fa:star-o' /></i>
                                                                <i><Icon icon='fa:star-o' /></i>
                                                                <i><Icon icon='fa:star-o' /></i>
                                                                <i class="empty"><Icon icon='fa:star-o' /></i>
                                                            </div>
                                                        </div>
                                                        <div class="review-body">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="review-heading">
                                                            <h5 class="name">John</h5>
                                                            <p class="date">27 DEC 2018, 8:0 PM</p>
                                                            <div class="review-rating">
                                                                <i><Icon icon='fa:star' /></i>
                                                                <i><Icon icon='fa:star' /></i>
                                                                <i><Icon icon='fa:star' /></i>
                                                                <i><Icon icon='fa:star' /></i>
                                                                <i><Icon icon='fa:star' /></i>
                                                            </div>
                                                        </div>
                                                        <div class="review-body">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="review-heading">
                                                            <h5 class="name">John</h5>
                                                            <p class="date">27 DEC 2018, 8:0 PM</p>
                                                            <div class="review-rating">
                                                                <i><Icon icon='fa:star' /></i>
                                                                <i><Icon icon='fa:star' /></i>
                                                                <i><Icon icon='fa:star' /></i>
                                                                <i><Icon icon='fa:star' /></i>
                                                                <i><Icon icon='fa:star' /></i>
                                                            </div>
                                                        </div>
                                                        <div class="review-body">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <ul class="reviews-pagination">
                                                    <li class="active">1</li>
                                                    <li><a href="#">2</a></li>
                                                    <li><a href="#">3</a></li>
                                                    <li><a href="#">4</a></li>
                                                    <li><a href="#"><i class="fa fa-angle-right"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div class="col-md-3">
                                            <div id="review-form">
                                                <form class="review-form">
                                                    <input class="input" type="text" placeholder="Your Name" />
                                                    <input class="input" type="email" placeholder="Your Email" />
                                                    <textarea class="input" placeholder="Your Review"></textarea>
                                                    <div class="input-rating">
                                                        <span>Your Rating: </span>
                                                        <div class="stars">
                                                            <input id="star5" name="rating" value="5" type="radio" /><label for="star5"></label>
                                                            <input id="star4" name="rating" value="4" type="radio" /><label for="star4"></label>
                                                            <input id="star3" name="rating" value="3" type="radio" /><label for="star3"></label>
                                                            <input id="star2" name="rating" value="2" type="radio" /><label for="star2"></label>
                                                            <input id="star1" name="rating" value="1" type="radio" /><label for="star1"></label>
                                                        </div>
                                                    </div>
                                                    <button class="primary-btn">Submit</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
