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
    const [isRemove, setIsRemove] = useState(false);
    const [rate, setRate] = useState(5);
    const [reviews, setReviews] = useState([]);
    const [averageRate, setAverageRate] = useState(5);
    const [isInWishlist, setIsInWishlist] = useState(false);
    const [stars, setStars] = useState([0, 0, 0, 0, 0]);

    useEffect(() => {
        fetch(`http://localhost:5089/api/maestro/${params.id}`)
            .then(responce => responce.json().then(data => {
                console.log(data);
                setProduct(data);
                setReviews(data.reviews);
                let temp = [];
                data.reviews.map(r => temp.push(r.rate));
                console.log(temp);
                fillReviewProgressBars(temp);
                const sum = data.reviews.reduce((partialSum, a) => partialSum + a.rate, 0);
                const avg = (parseFloat(sum) / parseFloat(data.reviews.length));
                setAverageRate(avg);
            }))
            .catch(error => console.log(error));
    }, [products]);

    const fillReviewProgressBars = (rate) => {
        let fiveStartsSum = 0;
        let fourStartsSum = 0;
        let threeStartsSum = 0;
        let twoStartsSum = 0;
        let oneStarSum = 0;

        for (let i = 0; i < rate.length; i++) {
            switch (rate[i]) {
                case 5:
                    fiveStartsSum++;
                    break;
                case 4:
                    fourStartsSum++;
                    break;
                case 3:
                    threeStartsSum++;
                    break;
                case 2:
                    twoStartsSum++;
                    break;
                case 1:
                    oneStarSum++;
                    break;
                default:
                    break;
            }
        }

        setStars([fiveStartsSum, fourStartsSum, threeStartsSum, twoStartsSum, oneStarSum]);

        const divider = oneStarSum + twoStartsSum + threeStartsSum + fourStartsSum + fiveStartsSum;

        const oneStarPercent = (parseFloat(oneStarSum) / parseFloat(divider)) * parseFloat(100);
        const twoStartsPercent = (parseFloat(twoStartsSum) / parseFloat(divider)) * parseFloat(100);
        const threeStartsPercent = (parseFloat(threeStartsSum) / parseFloat(divider)) * parseFloat(100);
        const fourStartsPercent = (parseFloat(fourStartsSum) / parseFloat(divider)) * parseFloat(100);
        const fiveStartsPercent = (parseFloat(fiveStartsSum) / parseFloat(divider)) * parseFloat(100);

        document.getElementById('progress-1').style.width = `${oneStarPercent}%`;        
        document.getElementById('progress-2').style.width = `${twoStartsPercent}%`;        
        document.getElementById('progress-3').style.width = `${threeStartsPercent}%`;        
        document.getElementById('progress-4').style.width = `${fourStartsPercent}%`;        
        document.getElementById('progress-5').style.width = `${fiveStartsPercent}%`;        
    };

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

    const handleRatingStars = (event) => {
        const id = event.target.id === '' ? event.target.parentElement.id : event.target.id;

        if (id ==='star-1') 
            setRate(1);
        if (id ==='star-2')
            setRate(2);
        if (id ==='star-3')
            setRate(3);
        if (id ==='star-4')
            setRate(4);
        if (id ==='star-5')
            setRate(5);
    };

    const handleSubmitRating = (event) => {
        event.preventDefault();
        const reviewText = document.getElementById('rating-textarea').value;

        if (!reviewText)
            return;

        const review = {
            reviewText: reviewText,
            rate: rate,
            productId: params.id,
            userId: localStorage.getItem('UserLoggedId'),
            createdAt: new Date()
        };

        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
            body: JSON.stringify(review)
        };
        fetch('http://localhost:5089/api/maestro/addreview', options)
            .then(response => {
                console.log(response.status);
                if (response.status === 200) {
                    window.location.reload();
                }
                else {
                    // error.innerHTML = 'Entered passwords are incorrect';
                    // document.getElementById('validation-error-text').appendChild(error);
                }
            })
            .catch(error => console.log(error));
    };

    const handleAddToCard = (event) => {

        event.preventDefault();

        const addToCard = {
            userId: localStorage.getItem('UserLoggedId'),
            productId: product.productId
        }
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
            body: JSON.stringify(addToCard)
        };
        fetch('http://localhost:5089/api/maestro/addtocard', options)
            .then(response => console.log(response))
            .catch(error => console.log(error));
        setIsRemove(!isRemove);
    }

    const handleRemoveFromCard = () => {
        setIsRemove(!isRemove);
        if (localStorage.getItem('UserLoggedId') != null) { // the user is logged
            const addToCard = {
                userId: localStorage.getItem('UserLoggedId'),
                productId: product.productId
            }
            const options = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json; charset=utf-8' },
                body: JSON.stringify(addToCard)
            };
            fetch('http://localhost:5089/api/maestro/removefromcard', options)
                .then(response => console.log(response))
                .catch(error => console.log(error));
        }
    };

    const handleAddToWishlist = () => {
        const addToCard = {
            userId: localStorage.getItem('UserLoggedId'),
            productId: product.productId
        }
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
            body: JSON.stringify(addToCard)
        };
        fetch('http://localhost:5089/api/maestro/addtowishlist', options)
            .then(response => console.log(response))
            .catch(error => console.log(error));
        setIsInWishlist(!isInWishlist);
    };

    const handleRemoveFromWishlist = () => {
        const removeFromCard = {
            userId: localStorage.getItem('UserLoggedId'),
            productId: product.productId
        }
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
            body: JSON.stringify(removeFromCard)
        };
        fetch('http://localhost:5089/api/maestro/removefromwishlist', options)
           .then(response => console.log(response))
           .catch(error => console.log(error));
        setIsInWishlist(!isInWishlist);
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
                                    <img src={`data:image/jpeg;base64,${product.pictures[0]}`} alt="" height={300} />
                                </div>
                            </div>

                            <div className="col-md-5 ">
                                <div className="product-details">
                                    <h2 className="product-name">{product.productName}</h2>
                                    <div>
                                        <div className="product-rating">
                                        {
                                            Math.floor(averageRate) === 1
                                                ?
                                                <>
                                                    <i><Icon color="#D10024" icon='fa:star' /></i>
                                                    <i><Icon color="#D10024" icon='fa:star-o' /></i>
                                                    <i><Icon color="#D10024" icon='fa:star-o' /></i>
                                                    <i><Icon color="#D10024" icon='fa:star-o' /></i>
                                                    <i><Icon color="#D10024" icon='fa:star-o' /></i>
                                                </>
                                                :
                                            Math.floor(averageRate) === 2
                                                ?
                                                <>
                                                    <i><Icon color="#D10024" icon='fa:star' /></i>
                                                    <i><Icon color="#D10024" icon='fa:star' /></i>
                                                    <i><Icon color="#D10024" icon='fa:star-o' /></i>
                                                    <i><Icon color="#D10024" icon='fa:star-o' /></i>
                                                    <i><Icon color="#D10024" icon='fa:star-o' /></i>
                                                </>
                                                :
                                            Math.floor(averageRate) === 3
                                                ?
                                                <>
                                                    <i><Icon color="#D10024" icon='fa:star' /></i>
                                                    <i><Icon color="#D10024" icon='fa:star' /></i>
                                                    <i><Icon color="#D10024" icon='fa:star' /></i>
                                                    <i><Icon color="#D10024" icon='fa:star-o' /></i>
                                                    <i><Icon color="#D10024" icon='fa:star-o' /></i>
                                                </>
                                                :
                                            Math.floor(averageRate) === 4
                                                ?
                                                <>
                                                    <i><Icon color="#D10024" icon='fa:star' /></i>
                                                    <i><Icon color="#D10024" icon='fa:star' /></i>
                                                    <i><Icon color="#D10024" icon='fa:star' /></i>
                                                    <i><Icon color="#D10024" icon='fa:star' /></i>
                                                    <i><Icon color="#D10024" icon='fa:star-o' /></i>
                                                </>
                                                :
                                                <>
                                                    <i><Icon color="#D10024" icon='fa:star' /></i>
                                                    <i><Icon color="#D10024" icon='fa:star' /></i>
                                                    <i><Icon color="#D10024" icon='fa:star' /></i>
                                                    <i><Icon color="#D10024" icon='fa:star' /></i>
                                                    <i><Icon color="#D10024" icon='fa:star' /></i>
                                                </>
                                        }
                                        </div>
                                        <a className="review-link" style={{ textDecoration: 'none', color: 'black', cursor: 'pointer' }}>{reviews.length} Review(s)</a>
                                    </div>
                                    <div>
                                        <h3 className="product-price">${product.newPrice}
                                            {
                                                product.newPrice < product.oldPrice 
                                                ? <del className="product-old-price" style={{ marginLeft: '20px' }}>${product.oldPrice} </del>
                                                : <></>
                                            }
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
                                        {
                                            !isRemove
                                                ? 
                                                <>
                                                    {
                                                        product.countOnStock > 0
                                                        ? <button className="add-to-cart-btn" onClick={handleAddToCard}><i><Icon icon='fa:shopping-cart' /></i> add to cart</button>
                                                        : <button className="add-to-cart-btn"><i className="fa fa-shopping-cart" disabled><Icon icon='fa:shopping-cart' /></i> saled</button>
                                                    }
                                                </>
                                                : <button className="add-to-cart-btn" onClick={handleRemoveFromCard}><i><Icon icon='fa:trash' /></i> remove</button>
                                        }
                                        {
                                            
                                        }
                                    </div>

                                    <ul className="product-btns">
                                    {
                                        !isInWishlist
                                            ? <li><a href="#" style={{ textDecoration: 'none', color: 'inherit' }} onClick={handleAddToWishlist}><i><Icon icon='fa:heart-o' /></i> add to wishlist</a></li>
                                            : <li><a href="#" style={{ textDecoration: 'none', color: 'inherit' }} onClick={handleRemoveFromWishlist}><i><Icon icon='basil:heart-solid' height="20px"/></i> remove from wishlist</a></li>
                                    }
                                        
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

                                    <ul className="product-links" style={{ fontWeight: 600 }}>
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
                                                Reviews({reviews.length})
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
                                            </div>
                                        </div>

                                        <div id="tab3" className="tab-pane">
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <div id="rating">
                                                        <div className="rating-avg">
                                                            <span>{averageRate > 0 ? averageRate.toFixed(1) : 'Be First To Rate'}</span>
                                                            <div className="rating-stars">
                                                                {
                                                                    Math.floor(averageRate) === 1
                                                                        ?
                                                                        <>
                                                                            <i><Icon color="#D10024" icon='fa:star' /></i>
                                                                            <i><Icon icon='fa:star-o' /></i>
                                                                            <i><Icon icon='fa:star-o' /></i>
                                                                            <i><Icon icon='fa:star-o' /></i>
                                                                            <i><Icon icon='fa:star-o' /></i>
                                                                        </>
                                                                        :
                                                                    Math.floor(averageRate) === 2
                                                                        ?
                                                                        <>
                                                                            <i><Icon color="#D10024" icon='fa:star' /></i>
                                                                            <i><Icon color="#D10024" icon='fa:star' /></i>
                                                                            <i><Icon icon='fa:star-o' /></i>
                                                                            <i><Icon icon='fa:star-o' /></i>
                                                                            <i><Icon icon='fa:star-o' /></i>
                                                                        </>
                                                                        :
                                                                    Math.floor(averageRate) === 3
                                                                        ?
                                                                        <>
                                                                            <i><Icon color="#D10024" icon='fa:star' /></i>
                                                                            <i><Icon color="#D10024" icon='fa:star' /></i>
                                                                            <i><Icon color="#D10024" icon='fa:star' /></i>
                                                                            <i><Icon icon='fa:star-o' /></i>
                                                                            <i><Icon icon='fa:star-o' /></i>
                                                                        </>
                                                                        :
                                                                    Math.floor(averageRate) === 4
                                                                        ?
                                                                        <>
                                                                            <i><Icon color="#D10024" icon='fa:star' /></i>
                                                                            <i><Icon color="#D10024" icon='fa:star' /></i>
                                                                            <i><Icon color="#D10024" icon='fa:star' /></i>
                                                                            <i><Icon color="#D10024" icon='fa:star' /></i>
                                                                            <i><Icon icon='fa:star-o' /></i>
                                                                        </>
                                                                        :
                                                                        <>
                                                                            <i><Icon color="#D10024" icon='fa:star' /></i>
                                                                            <i><Icon color="#D10024" icon='fa:star' /></i>
                                                                            <i><Icon color="#D10024" icon='fa:star' /></i>
                                                                            <i><Icon color="#D10024" icon='fa:star' /></i>
                                                                            <i><Icon color="#D10024" icon='fa:star' /></i>
                                                                        </>
                                                                }
                                                            </div>
                                                        </div>
                                                        <ul className="rating">
                                                            <li>
                                                                <div className="rating-stars">
                                                                    <i><Icon color="#D10024" icon='fa:star' /></i>
                                                                    <i><Icon color="#D10024" icon='fa:star' /></i>
                                                                    <i><Icon color="#D10024" icon='fa:star' /></i>
                                                                    <i><Icon color="#D10024" icon='fa:star' /></i>
                                                                    <i><Icon color="#D10024" icon='fa:star' /></i>
                                                                </div>
                                                                <div className="rating-progress">
                                                                    <div id='progress-5' style={{ width: "80%" }}></div>
                                                                </div>
                                                                <span className="sum">{stars[0]}</span>
                                                            </li>
                                                            <li>
                                                                <div className="rating-stars">
                                                                    <i><Icon color="#D10024" icon='fa:star' /></i>
                                                                    <i><Icon color="#D10024" icon='fa:star' /></i>
                                                                    <i><Icon color="#D10024" icon='fa:star' /></i>
                                                                    <i><Icon color="#D10024" icon='fa:star' /></i>
                                                                    <i><Icon icon='fa:star-o' /></i>
                                                                </div>
                                                                <div className="rating-progress">
                                                                    <div id='progress-4' style={{ width: "60%" }} ></div>
                                                                </div>
                                                                <span className="sum">{stars[1]}</span>
                                                            </li>
                                                            <li>
                                                                <div className="rating-stars">
                                                                    <i><Icon color="#D10024" icon='fa:star' /></i>
                                                                    <i><Icon color="#D10024" icon='fa:star' /></i>
                                                                    <i><Icon color="#D10024" icon='fa:star' /></i>
                                                                    <i><Icon icon='fa:star-o' /></i>
                                                                    <i><Icon icon='fa:star-o' /></i>
                                                                </div>
                                                                <div className="rating-progress">
                                                                    <div id='progress-3' style={{ width: "60%" }} ></div>
                                                                </div>
                                                                <span className="sum">{stars[2]}</span>
                                                            </li>
                                                            <li>
                                                                <div className="rating-stars">
                                                                    <i><Icon color="#D10024" icon='fa:star' /></i>
                                                                    <i><Icon color="#D10024" icon='fa:star' /></i>
                                                                    <i><Icon icon='fa:star-o' /></i>
                                                                    <i><Icon icon='fa:star-o' /></i>
                                                                    <i><Icon icon='fa:star-o' /></i>
                                                                </div>
                                                                <div className="rating-progress">
                                                                    <div id='progress-2' style={{ width: "60%" }} ></div>
                                                                </div>
                                                                <span className="sum">{stars[3]}</span>
                                                            </li>
                                                            <li>
                                                                <div className="rating-stars">

                                                                    <i><Icon color="#D10024" icon='fa:star' /></i>
                                                                    <i><Icon icon='fa:star-o' /></i>
                                                                    <i><Icon icon='fa:star-o' /></i>
                                                                    <i><Icon icon='fa:star-o' /></i>
                                                                    <i><Icon icon='fa:star-o' /></i>
                                                                </div>
                                                                <div className="rating-progress">
                                                                    <div id='progress-1' style={{ width: "60%" }} ></div>
                                                                </div>
                                                                <span className="sum">{stars[4]}</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div id="reviews">
                                                        <ul className="reviews">
                                                            {
                                                                reviews.map(r => 
                                                                    <li>
                                                                        <div className="review-heading">
                                                                            <h5 className="name">{r.userName}</h5>
                                                                            <p className="date">{r.createdAt}</p>
                                                                            <div className="review-rating">
                                                                                {
                                                                                    r.rate === 1 
                                                                                        ?
                                                                                        <>
                                                                                            <i><Icon color="#D10024" icon='fa:star' /></i>
                                                                                            <i><Icon color="#D10024" icon='fa:star-o' /></i>
                                                                                            <i><Icon color="#D10024" icon='fa:star-o' /></i>
                                                                                            <i><Icon color="#D10024" icon='fa:star-o' /></i>
                                                                                            <i><Icon color="#D10024" icon='fa:star-o' /></i>
                                                                                        </>
                                                                                        :
                                                                                    r.rate === 2
                                                                                        ?
                                                                                        <>
                                                                                            <i><Icon color="#D10024" icon='fa:star' /></i>
                                                                                            <i><Icon color="#D10024" icon='fa:star' /></i>
                                                                                            <i><Icon color="#D10024" icon='fa:star-o' /></i>
                                                                                            <i><Icon color="#D10024" icon='fa:star-o' /></i>
                                                                                            <i><Icon color="#D10024" icon='fa:star-o' /></i>
                                                                                        </>
                                                                                        :
                                                                                    r.rate === 3
                                                                                        ?
                                                                                        <>
                                                                                            <i><Icon color="#D10024" icon='fa:star' /></i>
                                                                                            <i><Icon color="#D10024" icon='fa:star' /></i>
                                                                                            <i><Icon color="#D10024" icon='fa:star' /></i>
                                                                                            <i><Icon color="#D10024" icon='fa:star-o' /></i>
                                                                                            <i><Icon color="#D10024" icon='fa:star-o' /></i>
                                                                                        </>
                                                                                        :
                                                                                    r.rate === 4
                                                                                        ? 
                                                                                        <>
                                                                                            <i><Icon color="#D10024" icon='fa:star' /></i>
                                                                                            <i><Icon color="#D10024" icon='fa:star' /></i>
                                                                                            <i><Icon color="#D10024" icon='fa:star' /></i>
                                                                                            <i><Icon color="#D10024" icon='fa:star' /></i>
                                                                                            <i><Icon color="#D10024" icon='fa:star-o' /></i>
                                                                                        </>
                                                                                        :
                                                                                        <>
                                                                                            <i><Icon color="#D10024" icon='fa:star' /></i>
                                                                                            <i><Icon color="#D10024" icon='fa:star' /></i>
                                                                                            <i><Icon color="#D10024" icon='fa:star' /></i>
                                                                                            <i><Icon color="#D10024" icon='fa:star' /></i>
                                                                                            <i><Icon color="#D10024" icon='fa:star' /></i>
                                                                                        </>
                                                                                }
                                                                            </div>
                                                                        </div>
                                                                        <div className="review-body">
                                                                            <p>{r.reviewText}</p>
                                                                        </div>
                                                                    </li>    
                                                                )
                                                            }
                                                        </ul>
                                                        {/* <ul className="reviews-pagination">
                                                            <li className="active">1</li>
                                                            <li><a href="#">2</a></li>
                                                            <li><a href="#">3</a></li>
                                                            <li><a href="#">4</a></li>
                                                            <li><a href="#"><i className="fa fa-angle-right"></i></a></li>
                                                        </ul> */}
                                                    </div>
                                                </div>

                                                <div className="col-md-3">
                                                    <div id="review-form">
                                                        <form className="review-form">
                                                            <textarea id='rating-textarea' className="input" placeholder="Your Review"></textarea>
                                                            <div className="input-rating">
                                                                <span>Your Rating: </span>
                                                                <div className="stars" style={{ cursor: 'pointer', marginLeft: '10px' }} onClick={handleRatingStars}>
                                                                    {
                                                                        rate === 1
                                                                            ?
                                                                            <>
                                                                                <i  id='star-1'><Icon id='star-1' color="#D10024" icon='fa:star' /></i>
                                                                                <i  id='star-2'><Icon id='star-2' color="#D10024" icon='fa:star-o' /></i>
                                                                                <i  id="star-3"><Icon id="star-3" color="#D10024" icon='fa:star-o' /></i>
                                                                                <i  id="star-4"><Icon id="star-4" color="#D10024" icon='fa:star-o' /></i>
                                                                                <i  id="star-5"><Icon id="star-5" color="#D10024" icon='fa:star-o' /></i>
                                                                            </>
                                                                            : 
                                                                        rate === 2 
                                                                            ? 
                                                                            <>
                                                                                <i id='star-1'><Icon id='star-1' color="#D10024" icon='fa:star' /></i>
                                                                                <i id='star-2'><Icon id='star-2' color="#D10024" icon='fa:star' /></i>
                                                                                <i id="star-3"><Icon id="star-3" color="#D10024" icon='fa:star-o' /></i>
                                                                                <i id="star-4"><Icon id="star-4" color="#D10024" icon='fa:star-o' /></i>
                                                                                <i id="star-5"><Icon id="star-5" color="#D10024" icon='fa:star-o' /></i>
                                                                            </>
                                                                            :
                                                                        rate === 3
                                                                            ?
                                                                            <>
                                                                                <i id='star-1'><Icon id='star-1' color="#D10024" icon='fa:star' /></i>
                                                                                <i id='star-2'><Icon id='star-2' color="#D10024" icon='fa:star' /></i>
                                                                                <i id="star-3"><Icon id="star-3" color="#D10024" icon='fa:star' /></i>
                                                                                <i id="star-4"><Icon id="star-4" color="#D10024" icon='fa:star-o' /></i>
                                                                                <i id="star-5"><Icon id="star-5" color="#D10024" icon='fa:star-o' /></i>
                                                                            </>
                                                                            :
                                                                        rate === 4
                                                                            ?
                                                                            <>
                                                                                <i id='star-1'><Icon id='star-1' color="#D10024" icon='fa:star' /></i>
                                                                                <i id='star-2'><Icon id='star-2' color="#D10024" icon='fa:star' /></i>
                                                                                <i id="star-3"><Icon id="star-3" color="#D10024" icon='fa:star' /></i>
                                                                                <i id="star-4"><Icon id="star-4" color="#D10024" icon='fa:star' /></i>
                                                                                <i id="star-5"><Icon id="star-5" color="#D10024" icon='fa:star-o' /></i>
                                                                            </>
                                                                            :
                                                                            <>
                                                                                <i id='star-1'><Icon id='star-1' color="#D10024" icon='fa:star' /></i>
                                                                                <i id='star-2'><Icon id='star-2' color="#D10024" icon='fa:star' /></i>
                                                                                <i id="star-3"><Icon id="star-3" color="#D10024" icon='fa:star' /></i>
                                                                                <i id="star-4"><Icon id="star-4" color="#D10024" icon='fa:star' /></i>
                                                                                <i id="star-5"><Icon id="star-5" color="#D10024" icon='fa:star' /></i>
                                                                            </>
                                                                    }
                                                                </div>
                                                            </div>
                                                            <button className="primary-btn" onClick={handleSubmitRating}>Submit</button>
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