import React, { useEffect, useRef } from 'react';
import './../../App.css';
import Slider from 'react-slick';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Carousel } from 'bootstrap';
import { useParams } from 'react-router-dom';

export default function Product({ products }) {

    const params = useParams();
    const [product, setProduct] = useState(null);

    const images = [
        'data:image/jpeg;base64,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',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWk20oUxEpIF1lToREf_LQ5lFZaQQLIGuEKg&usqp=CAU',
        'https://hotline.ua/img/tx/242/2425355815.jpg'
    ];

    useEffect(() => {
        fetch(`http://localhost:5089/api/maestro/${params.id}`)
            .then(responce => responce.json().then(data => {
                console.log(data);
                setProduct(data);
            }))
            .catch(error => console.log(error));
    }, [products]);

    // useEffect(() => {
    //     let p = products.find(p => {
    //         return p.productId == params.id;
    //     });
    //     if (p === undefined)
    //         p = null;
    //     setProduct(p);


    // }, [products]);

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleDescription = (event) => {
        document.getElementById('tab1').className = 'tab-pane in active';
        document.getElementById("tab2").className = 'tab-pane fade in';
        document.getElementById("tab3").className = 'tab-pane fade in';
    };

    const handleDetails = (event) => {
        document.getElementById('tab1').className = 'tab-pane fade in';
        document.getElementById("tab2").className = 'tab-pane in active';
        document.getElementById("tab3").className = 'tab-pane fade in';
    };

    const handleReviews = (event) => {
        document.getElementById('tab1').className = 'tab-pane fade in';
        document.getElementById("tab2").className = 'tab-pane fade in';
        document.getElementById("tab3").className = 'tab-pane in active';
    };

    const handleButtonMouseEnter = (event) => {
        event.target.style.color = '#D10024';
    };

    const handleButtonMouseLeave = (event) => {
        event.target.style.color = 'black';
    }

    const handleClickPrevious = () => {
        let index = currentIndex;
        if (currentIndex > 0)
            index--;
        else
            index = images.length - 1;
        setCurrentIndex(index);
    };

    const handleClickNext = () => {
        let index = currentIndex;
        if (currentIndex < images.length - 1)
            index++;
        else
            index = 0;
        setCurrentIndex(index);
    };


    return (
        <div className="section">
            {
                product == null
                    ? <></>
                    : <div className="container">
                        <div className="row">

                            <div className="col-md-5 col-md-push-2">

                                <div className="slider-wrapper" style={{ height: '400px' }}>
                                    <div className="slides-container" id="slides-container">
                                        {
                                            product.pictures.map(p =>
                                                <div className="slide" key={p}>
                                                    <img src={p} alt="" />
                                                </div>
                                            )
                                        }
                                    </div>
                                    <i className="slide-arrow" id="slide-arrow-prev" onClick={handleClickPrevious}>
                                        <Icon icon='fa:arrow-left' style={{ backgroundColor: 'white', borderRadius: '5px' }} />
                                    </i>
                                    <i className="slide-arrow" id="slide-arrow-next" onClick={handleClickNext}>
                                        <Icon icon='fa:arrow-right' style={{ backgroundColor: 'white', borderRadius: '5px' }} />
                                    </i>
                                </div>
                            </div>

                            <div className="col-md-5 ">
                                <div className="product-details">
                                    <h2 className="product-name">{product.productName}</h2>
                                    <div>
                                        <div className="product-rating">
                                            <i><Icon icon='fa:star' /></i>
                                            <i><Icon icon='fa:star' /></i>
                                            <i><Icon icon='fa:star' /></i>
                                            <i><Icon icon='fa:star' /></i>
                                            <i><Icon icon='fa:star-o' /></i>
                                        </div>
                                        <a className="review-link" href="#">10 Review(s) | Add your review</a>
                                    </div>
                                    <div>
                                        <h3 className="product-price">${
                                            product.price - product.price * product.salePricePercent / 100
                                        } <del className="product-old-price">${product.price}</del></h3>
                                        {
                                            product.countOnStock > 0
                                                ? <span className="product-available">In Stock</span>
                                                : <span className="product-available">Saled!</span>
                                        }
                                        
                                    </div>
                                    <p>{product.description}</p>
                                    <div className="add-to-cart">
                                        {/* <div className="qty-label">
                                    Qty
                                    <div className="input-number">
                                        <input type="number" />
                                        <span className="qty-up">+</span>
                                        <span className="qty-down">-</span>
                                    </div>
                                </div> */}
                                        <button className="add-to-cart-btn"><i className="fa fa-shopping-cart"><Icon icon='fa:shopping-cart' /></i> add to cart</button>
                                    </div>

                                    <ul className="product-btns">
                                        <li><a href="#"><i><Icon icon='fa:heart-o' /></i> add to wishlist</a></li>
                                        <li><a href="#"><i><Icon icon='fa:exchange' /></i> add to compare</a></li>
                                    </ul>

                                    <ul className="product-links">
                                        <li>Category:</li>
                                        {
                                            product.categories.map(c =>
                                                <li><a href="#">{c}</a></li>
                                            )
                                        }
                                    </ul>

                                    <ul className="product-links">
                                        <li>Share:</li>
                                        <li><a href="#"><i><Icon icon='fa:facebook' /></i></a></li>
                                        <li><a href="#"><i><Icon icon='fa:twitter' /></i></a></li>
                                        <li><a href="#"><i><Icon icon='fa:google-plus' /></i></a></li>
                                        <li><a href="#"><i><Icon icon='fa:envelope' /></i></a></li>
                                    </ul>

                                </div>
                            </div>

                            <div className="col-md-12">


                                <div id="product-tab">
                                    <ul className="tab-nav">
                                        <li className="active">
                                            <button
                                                onClick={handleDescription}
                                                onMouseEnter={handleButtonMouseEnter}
                                                onMouseLeave={handleButtonMouseLeave}
                                                style={{
                                                    border: '0px',
                                                    backgroundColor: 'transparent',
                                                    fontFamily: 'sans-serif'
                                                }}
                                            >
                                                Description
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                onClick={handleDetails}
                                                onMouseEnter={handleButtonMouseEnter}
                                                onMouseLeave={handleButtonMouseLeave}
                                                style={{
                                                    border: '0px',
                                                    backgroundColor: 'transparent',
                                                    fontFamily: 'sans-serif'
                                                }}
                                            >
                                                Details
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                onClick={handleReviews}
                                                onMouseEnter={handleButtonMouseEnter}
                                                onMouseLeave={handleButtonMouseLeave}
                                                style={{
                                                    border: '0px',
                                                    backgroundColor: 'transparent',
                                                    fontFamily: 'sans-serif'
                                                }}
                                            >
                                                Reviews(3)
                                            </button>
                                        </li>
                                    </ul>

                                    <div className="tab-content">
                                        <div id="tab1" className="tab-pane in active">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <p>{product.description}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div id="tab2" className="tab-pane in fade ">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <p>
                                                        {
                                                            product.features.map(f =>
                                                                <div>{f}</div>
                                                            )
                                                        }
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div id="tab3" className="tab-pane">
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <div id="rating">
                                                        <div className="rating-avg">
                                                            <span>4.5</span>
                                                            <div className="rating-stars">
                                                                <i><Icon icon='fa:star' /></i>
                                                                <i><Icon icon='fa:star' /></i>
                                                                <i><Icon icon='fa:star' /></i>
                                                                <i><Icon icon='fa:star' /></i>
                                                                <i><Icon icon='fa:star-o' /></i>
                                                            </div>
                                                        </div>
                                                        <ul className="rating">
                                                            <li>
                                                                <div className="rating-stars">
                                                                    <i><Icon icon='fa:star' /></i>
                                                                    <i><Icon icon='fa:star' /></i>
                                                                    <i><Icon icon='fa:star' /></i>
                                                                    <i><Icon icon='fa:star' /></i>
                                                                    <i><Icon icon='fa:star' /></i>
                                                                </div>
                                                                <div className="rating-progress">
                                                                    <div style={{ width: "80%" }}></div>
                                                                </div>
                                                                <span className="sum">3</span>
                                                            </li>
                                                            <li>
                                                                <div className="rating-stars">
                                                                    <i><Icon icon='fa:star' /></i>
                                                                    <i><Icon icon='fa:star' /></i>
                                                                    <i><Icon icon='fa:star' /></i>
                                                                    <i><Icon icon='fa:star-o' /></i>
                                                                </div>
                                                                <div className="rating-progress">
                                                                    <div style={{ width: "60%" }}></div>
                                                                </div>
                                                                <span className="sum">2</span>
                                                            </li>
                                                            <li>
                                                                <div className="rating-stars">
                                                                    <i><Icon icon='fa:star' /></i>
                                                                    <i><Icon icon='fa:star' /></i>
                                                                    <i><Icon icon='fa:star' /></i>
                                                                    <i><Icon icon='fa:star-o' /></i>
                                                                    <i><Icon icon='fa:star-o' /></i>
                                                                </div>
                                                                <div className="rating-progress">
                                                                    <div></div>
                                                                </div>
                                                                <span className="sum">0</span>
                                                            </li>
                                                            <li>
                                                                <div className="rating-stars">
                                                                    <i><Icon icon='fa:star' /></i>
                                                                    <i><Icon icon='fa:star' /></i>
                                                                    <i><Icon icon='fa:star-o' /></i>
                                                                    <i><Icon icon='fa:star-o' /></i>
                                                                    <i><Icon icon='fa:star-o' /></i>
                                                                </div>
                                                                <div className="rating-progress">
                                                                    <div></div>
                                                                </div>
                                                                <span className="sum">0</span>
                                                            </li>
                                                            <li>
                                                                <div className="rating-stars">

                                                                    <i><Icon icon='fa:star' /></i>
                                                                    <i><Icon icon='fa:star-o' /></i>
                                                                    <i><Icon icon='fa:star-o' /></i>
                                                                    <i><Icon icon='fa:star-o' /></i>
                                                                    <i><Icon icon='fa:star-o' /></i>
                                                                </div>
                                                                <div className="rating-progress">
                                                                    <div></div>
                                                                </div>
                                                                <span className="sum">0</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div id="reviews">
                                                        <ul className="reviews">
                                                            <li>
                                                                <div className="review-heading">
                                                                    <h5 className="name">John</h5>
                                                                    <p className="date">27 DEC 2018, 8:0 PM</p>
                                                                    <div className="review-rating">
                                                                        <i><Icon icon='fa:star' /></i>
                                                                        <i><Icon icon='fa:star-o' /></i>
                                                                        <i><Icon icon='fa:star-o' /></i>
                                                                        <i><Icon icon='fa:star-o' /></i>
                                                                        <i className="empty"><Icon icon='fa:star-o' /></i>
                                                                    </div>
                                                                </div>
                                                                <div className="review-body">
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="review-heading">
                                                                    <h5 className="name">John</h5>
                                                                    <p className="date">27 DEC 2018, 8:0 PM</p>
                                                                    <div className="review-rating">
                                                                        <i><Icon icon='fa:star' /></i>
                                                                        <i><Icon icon='fa:star' /></i>
                                                                        <i><Icon icon='fa:star' /></i>
                                                                        <i><Icon icon='fa:star' /></i>
                                                                        <i><Icon icon='fa:star' /></i>
                                                                    </div>
                                                                </div>
                                                                <div className="review-body">
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="review-heading">
                                                                    <h5 className="name">John</h5>
                                                                    <p className="date">27 DEC 2018, 8:0 PM</p>
                                                                    <div className="review-rating">
                                                                        <i><Icon icon='fa:star' /></i>
                                                                        <i><Icon icon='fa:star' /></i>
                                                                        <i><Icon icon='fa:star' /></i>
                                                                        <i><Icon icon='fa:star' /></i>
                                                                        <i><Icon icon='fa:star' /></i>
                                                                    </div>
                                                                </div>
                                                                <div className="review-body">
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                        <ul className="reviews-pagination">
                                                            <li className="active">1</li>
                                                            <li><a href="#">2</a></li>
                                                            <li><a href="#">3</a></li>
                                                            <li><a href="#">4</a></li>
                                                            <li><a href="#"><i className="fa fa-angle-right"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div className="col-md-3">
                                                    <div id="review-form">
                                                        <form className="review-form">
                                                            <input className="input" type="text" placeholder="Your Name" />
                                                            <input className="input" type="email" placeholder="Your Email" />
                                                            <textarea className="input" placeholder="Your Review"></textarea>
                                                            <div className="input-rating">
                                                                <span>Your Rating: </span>
                                                                <div className="stars">
                                                                    <input id="star5" name="rating" value="5" type="radio" /><label for="star5"></label>
                                                                    <input id="star4" name="rating" value="4" type="radio" /><label for="star4"></label>
                                                                    <input id="star3" name="rating" value="3" type="radio" /><label for="star3"></label>
                                                                    <input id="star2" name="rating" value="2" type="radio" /><label for="star2"></label>
                                                                    <input id="star1" name="rating" value="1" type="radio" /><label for="star1"></label>
                                                                </div>
                                                            </div>
                                                            <button className="primary-btn">Submit</button>
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
            }
        </div>
    )
}
