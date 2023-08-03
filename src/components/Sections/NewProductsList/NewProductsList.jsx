import React from 'react';
import './NewProductsList.css'
import { Icon } from '@iconify/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function NewProductsList() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4, //count depends on screen size
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
    };

    return (
        <div className="section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title">
                            <h3 className="title">New Products</h3>
                            <div className="section-nav">
                                <ul className="section-tab-nav tab-nav">
                                    <li className="active nav-item"><a className='nav-link navbar-text' data-toggle="tab" href="#tab1">Laptops</a></li>
                                    <li className="nav-item"><a className='nav-link navbar-text' data-toggle="tab" href="#tab1">Smartphones</a></li>
                                    <li className="nav-item"><a className='nav-link navbar-text' data-toggle="tab" href="#tab1">Cameras</a></li>
                                    <li className="nav-item"><a className='nav-link navbar-text' data-toggle="tab" href="#tab1">Accessories</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-12">
                        <div class="row">
                            <div class="products-tabs">
                                <div id="tab1" class="tab-pane active">
                                    <div class="products-slick" data-nav="#slick-nav-1">
                                        <Slider {...settings}>

                                            <div class="product ">
                                                <div class="product-img">
                                                    <img src="https://img.kytary.com/eshop_ie/velky_v2/na/637587725633400000/a86485b6/64867053/jet-guitars-js-300-sfg.jpg" alt="" />
                                                    <div class="product-label">
                                                        <span class="sale">-30%</span>
                                                        <span class="new">NEW</span>
                                                    </div>
                                                </div>
                                                <div class="product-body">
                                                    <p class="product-category">Category</p>
                                                    <h3 class="product-name"><a href="#">product name goes here</a></h3>
                                                    <h4 class="product-price">$980.00 <del class="product-old-price">$990.00</del></h4>
                                                    <div class="product-rating">
                                                    </div>
                                                    <div class="product-btns">
                                                        <button class="add-to-wishlist">
                                                            <i><Icon icon="fa:heart-o" /></i>
                                                            <span class="tooltipp">add to wishlist</span>
                                                        </button>
                                                        <button class="add-to-compare">
                                                            <i ><Icon icon="fa:exchange" /></i>
                                                            <span class="tooltipp">add to compare</span>
                                                        </button>
                                                        <button class="quick-view">
                                                            <i><Icon icon="fa:eye" /></i>
                                                            <span class="tooltipp">quick view</span>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div class="add-to-cart">
                                                    <button class="add-to-cart-btn">
                                                        <i><Icon icon="fa:shopping-cart" /></i>
                                                        add to cart</button>
                                                </div>
                                            </div>

                                            <div class="product ">
                                                <div class="product-img">
                                                    <img src="https://img.kytary.com/eshop_ie/velky_v2/na/637587725633400000/a86485b6/64867053/jet-guitars-js-300-sfg.jpg" alt="" />
                                                    <div class="product-label">
                                                        <span class="sale">-30%</span>
                                                        <span class="new">NEW</span>
                                                    </div>
                                                </div>
                                                <div class="product-body">
                                                    <p class="product-category">Category</p>
                                                    <h3 class="product-name"><a href="#">product name goes here</a></h3>
                                                    <h4 class="product-price">$980.00 <del class="product-old-price">$990.00</del></h4>
                                                    <div class="product-rating">
                                                    </div>
                                                    <div class="product-btns">
                                                        <button class="add-to-wishlist">
                                                            <i><Icon icon="fa:heart-o" /></i>
                                                            <span class="tooltipp">add to wishlist</span>
                                                        </button>
                                                        <button class="add-to-compare">
                                                            <i ><Icon icon="fa:exchange" /></i>
                                                            <span class="tooltipp">add to compare</span>
                                                        </button>
                                                        <button class="quick-view">
                                                            <i><Icon icon="fa:eye" /></i>
                                                            <span class="tooltipp">quick view</span>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div class="add-to-cart">
                                                    <button class="add-to-cart-btn">
                                                        <i><Icon icon="fa:shopping-cart" /></i>
                                                        add to cart</button>
                                                </div>
                                            </div>

                                            <div class="product">
                                                <div class="product-img">
                                                    <img src="https://img.kytary.com/eshop_ie/velky_v2/na/637587725633400000/a86485b6/64867053/jet-guitars-js-300-sfg.jpg" alt="" />
                                                    <div class="product-label">
                                                        <span class="sale">-30%</span>
                                                        <span class="new">NEW</span>
                                                    </div>
                                                </div>
                                                <div class="product-body">
                                                    <p class="product-category">Category</p>
                                                    <h3 class="product-name"><a href="#">product name goes here</a></h3>
                                                    <h4 class="product-price">$980.00 <del class="product-old-price">$990.00</del></h4>
                                                    <div class="product-rating">
                                                    </div>
                                                    <div class="product-btns">
                                                        <button class="add-to-wishlist">
                                                            <i><Icon icon="fa:heart-o" /></i>
                                                            <span class="tooltipp">add to wishlist</span>
                                                        </button>
                                                        <button class="add-to-compare">
                                                            <i ><Icon icon="fa:exchange" /></i>
                                                            <span class="tooltipp">add to compare</span>
                                                        </button>
                                                        <button class="quick-view">
                                                            <i><Icon icon="fa:eye" /></i>
                                                            <span class="tooltipp">quick view</span>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div class="add-to-cart">
                                                    <button class="add-to-cart-btn">
                                                        <i><Icon icon="fa:shopping-cart" /></i>
                                                        add to cart</button>
                                                </div>
                                            </div>

                                            <div class="product">
                                                <div class="product-img">
                                                    <img src="https://img.kytary.com/eshop_ie/velky_v2/na/637587725633400000/a86485b6/64867053/jet-guitars-js-300-sfg.jpg" alt="" />
                                                    <div class="product-label">
                                                        <span class="sale">-30%</span>
                                                        <span class="new">NEW</span>
                                                    </div>
                                                </div>
                                                <div class="product-body">
                                                    <p class="product-category">Category</p>
                                                    <h3 class="product-name"><a href="#">product name goes here</a></h3>
                                                    <h4 class="product-price">$980.00 <del class="product-old-price">$990.00</del></h4>
                                                    <div class="product-rating">
                                                    </div>
                                                    <div class="product-btns">
                                                        <button class="add-to-wishlist">
                                                            <i><Icon icon="fa:heart-o" /></i>
                                                            <span class="tooltipp">add to wishlist</span>
                                                        </button>
                                                        <button class="add-to-compare">
                                                            <i ><Icon icon="fa:exchange" /></i>
                                                            <span class="tooltipp">add to compare</span>
                                                        </button>
                                                        <button class="quick-view">
                                                            <i><Icon icon="fa:eye" /></i>
                                                            <span class="tooltipp">quick view</span>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div class="add-to-cart">
                                                    <button class="add-to-cart-btn">
                                                        <i><Icon icon="fa:shopping-cart" /></i>
                                                        add to cart</button>
                                                </div>
                                            </div>

                                            <div class="product">
                                                <div class="product-img">
                                                    <img src="https://img.kytary.com/eshop_ie/velky_v2/na/637587725633400000/a86485b6/64867053/jet-guitars-js-300-sfg.jpg" alt="" />
                                                    <div class="product-label">
                                                        <span class="sale">-30%</span>
                                                        <span class="new">NEW</span>
                                                    </div>
                                                </div>
                                                <div class="product-body">
                                                    <p class="product-category">Category</p>
                                                    <h3 class="product-name"><a href="#">product name goes here</a></h3>
                                                    <h4 class="product-price">$980.00 <del class="product-old-price">$990.00</del></h4>
                                                    <div class="product-rating">
                                                    </div>
                                                    <div class="product-btns">
                                                        <button class="add-to-wishlist">
                                                            <i><Icon icon="fa:heart-o" /></i>
                                                            <span class="tooltipp">add to wishlist</span>
                                                        </button>
                                                        <button class="add-to-compare">
                                                            <i ><Icon icon="fa:exchange" /></i>
                                                            <span class="tooltipp">add to compare</span>
                                                        </button>
                                                        <button class="quick-view">
                                                            <i><Icon icon="fa:eye" /></i>
                                                            <span class="tooltipp">quick view</span>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div class="add-to-cart">
                                                    <button class="add-to-cart-btn">
                                                        <i><Icon icon="fa:shopping-cart" /></i>
                                                        add to cart</button>
                                                </div>
                                            </div>
                                        </Slider>
                                    </div>
                                    <div id="slick-nav-1" class="products-slick-nav"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
