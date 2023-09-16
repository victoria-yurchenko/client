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

    useEffect(() => {
        fetch(`http://localhost:5089/api/maestro/${params.id}`)
            .then(responce => responce.json().then(data => {
                console.log(data);
                setProduct(data);
                console.log(data.pictures[0]);
            }))
            .catch(error => console.log(error));
    }, [products]);

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleDescription = (event) => {
        document.getElementById('tab1').className = 'tab-pane in active';
        document.getElementById("tab2").className = 'tab-pane fade in';
        // document.getElementById("tab3").className = 'tab-pane fade in';
    };

    const handleDetails = (event) => {
        document.getElementById('tab1').className = 'tab-pane fade in';
        document.getElementById("tab2").className = 'tab-pane in active';
        // document.getElementById("tab3").className = 'tab-pane fade in';
    };

    // const handleReviews = (event) => {
    //     document.getElementById('tab1').className = 'tab-pane fade in';
    //     document.getElementById("tab2").className = 'tab-pane fade in';
    //     document.getElementById("tab3").className = 'tab-pane in active';
    // };

    const handleButtonMouseEnter = (event) => {
        event.target.style.color = '#D10024';
    };

    const handleButtonMouseLeave = (event) => {
        event.target.style.color = 'black';
    }

    const splitFeatures = (features) => {
        const _features = [];
        if (features !== undefined) {
            for (let i = 0; i < features.length; i++) {
                const feature = features[i].split("____");
                const featureValue = feature[0];
                const featureName = feature[1];
                _features.push({ featureName, featureValue });
            }
        }
        return _features;
    };

    // const handleClickPrevious = () => {
    //     let index = currentIndex;
    //     if (currentIndex > 0)
    //         index--;
    //     else
    //         index = images.length - 1;
    //     setCurrentIndex(index);
    // };

    // const handleClickNext = () => {
    //     let index = currentIndex;
    //     if (currentIndex < images.length - 1)
    //         index++;
    //     else
    //         index = 0;
    //     setCurrentIndex(index);
    // };


    return (
        <div className="section">
            {
                product == null
                    ? <></>
                    : <div className="container">
                        <div className="row">

                            <div className="col-md-5 col-md-push-2">

                                <div className="slider-wrapper" style={{ height: '400px' }}>
                                    <img src={`data:image/jpeg;base64,${product.pictures[0]}`} alt="" height={300} />
                                    {/* <i className="slide-arrow" id="slide-arrow-prev" onClick={handleClickPrevious}>
                                        <Icon icon='fa:arrow-left' style={{ backgroundColor: 'white', borderRadius: '5px' }} />
                                    </i>
                                    <i className="slide-arrow" id="slide-arrow-next" onClick={handleClickNext}>
                                        <Icon icon='fa:arrow-right' style={{ backgroundColor: 'white', borderRadius: '5px' }} />
                                    </i> */}
                                </div>
                            </div>

                            <div className="col-md-5 ">
                                <div className="product-details">
                                    <h2 className="product-name">{product.productName}</h2>
                                    <div>
                                        {/* <div className="product-rating">
                                            <i><Icon icon='fa:star' /></i>
                                            <i><Icon icon='fa:star' /></i>
                                            <i><Icon icon='fa:star' /></i>
                                            <i><Icon icon='fa:star' /></i>
                                            <i><Icon icon='fa:star-o' /></i>
                                        </div>
                                        <a className="review-link" href="#">10 Review(s) | Add your review</a> */}
                                    </div>
                                    <div>
                                        <h3 className="product-price">${product.newPrice}
                                            <del className="product-old-price" style={{ marginLeft: '20px' }}>${product.oldPrice} </del>
                                        </h3>
                                        {
                                            product.countOnStock > 0
                                                ? <span className="product-available">In Stock</span>
                                                : <span className="product-available">Saled!</span>
                                        }

                                    </div>
                                    <p>{product.shortDescription}</p>
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
                                        <li><a href="" className="nav-link nav-text" style={{ textDecoration: 'none' }} ><i><Icon icon='fa:heart-o' /></i> add to wishlist</a></li>
                                    </ul>

                                    <ul className="product-links">
                                        <li>Category:</li>
                                        {
                                            product.categories.map(c =>
                                                <li><a href="#" className="nav-link nav-text" style={{ textDecoration: 'none' }} >{c}</a></li>
                                            )
                                        }
                                    </ul>

                                    <ul className="product-links">
                                        <li>Share:</li>
                                        <li><a style={{ textDecoration: 'none' }} ><i><Icon icon='fa:facebook' /></i></a></li>
                                        <li><a style={{ textDecoration: 'none' }} ><i><Icon icon='fa:twitter' /></i></a></li>
                                        <li><a style={{ textDecoration: 'none' }} ><i><Icon icon='fa:google-plus' /></i></a></li>
                                        <li><a style={{ textDecoration: 'none' }} ><i><Icon icon='fa:envelope' /></i></a></li>
                                    </ul>

                                    <ul className="product-links" style={{fontWeight: 600}}>
                                        <li>Site Code:</li>
                                        <li>{params.id}</li>
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
                                        {/* <li>
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
                                        </li> */}
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

                                                <table>

                                                    <thead>
                                                        <tr>
                                                            <th width="50%"></th>
                                                            <th width="50%"></th>
                                                        </tr>
                                                    </thead>

                                                    <tbody>
                                                        {
                                                            splitFeatures(product.features).map(f =>
                                                        <tr>
                                                            <td>{f.featureValue}</td>
                                                            <td>{f.featureName}</td>
                                                        </tr>
                                                        )
                                                        }
                                                    </tbody>
                                                </table>

                                                {/* <div className="col-md-6">
                                                    <p>
                                                        {
                                                            splitFeatures(product.features).map(f =>
                                                                <div>{f.featureValue}</div>
                                                            )
                                                        }
                                                    </p>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>
                                                        {
                                                            splitFeatures(product.features).map(f =>
                                                                <div>{f.featureName}</div>
                                                            )
                                                        }
                                                    </p>
                                                </div> */}
                                            </div>
                                        </div>

                                        {/* <div id="tab3" className="tab-pane">
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
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}
