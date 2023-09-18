import React from 'react';
import './../../App.css';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ProductCart({
    image,
    isNew,
    newPrice,
    category,
    productName,
    rate,
    oldPrice,
    isAdminSession,
    productId,
    isInWishlistByDefault
}) {

    const [isRemove, setIsRemove] = useState(false);
    const [isLogged, setIsLogged] = useState(false);
    const [isInWishlist, setIsInWishlist] = useState(false);
    const [isPageLoaded, setIsPageLoaded] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('UserLoggedId') > 0) { // the user is logged
            setIsLogged(true);
            const product = {
                userId: localStorage.getItem('UserLoggedId'),
                productId: productId
            }
            const options = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json; charset=utf-8' },
                body: JSON.stringify(product),
            };
            if (!isPageLoaded) {
                fetch('http://localhost:5089/api/maestro/isincard', options)
                    .then(responce => responce.json().then(data => {
                        setIsRemove(data);
                    }))
                    .catch(error => console.log(error));
                setIsPageLoaded(false);
            }
        }
    }, []);
    // const [selectedProductId, setSelectedProductId] = useState(0);

    const handleOnChange = () => {
        window.location.replace(`http://localhost:3000/changeproduct/${productId}`);
    };

    const handleView = () => {
        window.location.replace(`http://localhost:3000/product/${productId}`);
    };

    const handleAddToWishlist = () => {
        const addToCard = {
            userId: localStorage.getItem('UserLoggedId'),
            productId: productId
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
            productId: productId
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
        if (isInWishlistByDefault)
            window.location.reload();
    };

    const handleOnDelete = () => {
        window.location.replace(`http://localhost:3000/product/delete/${productId}`);
    };

    const handleAddToCard = () => {

        const addToCard = {
            userId: localStorage.getItem('UserLoggedId'),
            productId: productId
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
                productId: productId
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

    const handleLoginToBuy = () => {
        window.location.replace(`http://localhost:3000/login`);
    };

    return (
        <div className="product m-1" >
            <div className="product-img">
                <img src={`data:image/jpeg;base64,${image}`} alt="product" />
                <div className="product-label">
                    {
                        newPrice < oldPrice
                            ? <span className="sale">-{oldPrice - newPrice} $</span>
                            : <></>
                    }
                    {
                        isNew
                            ? <span className="new">NEW</span>
                            : <></>
                    }
                    {
                        isAdminSession
                            ?
                            <div>
                                <a className="new btn" style={{ marginLeft: '10px', border: '2px solid #D10024', borderRadius: 4, backgroundColor: '#FFF', marginTop: '20px' }} >
                                    <label style={{ cursor: 'pointer' }} onClick={handleOnChange}><Icon icon={'fa:cog'} style={{ marginRight: '10px' }} />Change</label>
                                </a>
                            </div>
                            : <></>
                    }
                    {
                        isAdminSession
                            ?
                            <div>
                                <a className="new btn" style={{ marginLeft: '10px', border: '2px solid #D10024', borderRadius: 4, backgroundColor: '#FFF', marginTop: '0px' }} >
                                    <label style={{ cursor: 'pointer' }} onClick={handleOnDelete}><Icon icon={'fa:trash'} style={{ marginRight: '10px' }} />Delete</label>
                                </a>
                            </div>
                            : <></>
                    }

                </div>
            </div>
            <div className="product-body">
                <p className="product-category">{category}</p>
                <h3 className="product-name">'
                    <a href="#"
                        style={{
                            textDecoration: 'none',
                            color: 'black'
                        }}
                    >
                        {
                            productName.length > 18
                                ? productName.substring(0, 18) + '...'
                                : productName
                        }
                    </a>
                </h3>
                {
                    newPrice < oldPrice
                        ? <h4 className="product-price">${newPrice} <del className="product-old-price">${oldPrice}</del></h4>
                        : <h4 className="product-price">${newPrice}</h4>

                }
                <div class="product-rating">
                    {
                        rate === 0 
                            ? <></>
                            :
                        rate === 1
                            ? 
                            <>
                                <i><Icon color="#D10024" style={{ margin: '4px' }} icon='fa:star' /></i>
                                <i><Icon color="#D10024" style={{ margin: '4px' }} icon='fa:star-o' /></i>
                                <i><Icon color="#D10024" style={{ margin: '4px' }} icon='fa:star-o' /></i>
                                <i><Icon color="#D10024" style={{ margin: '4px' }} icon='fa:star-o' /></i>
                                <i><Icon color="#D10024" style={{ margin: '4px' }} icon='fa:star-o' /></i>
                            </>
                            :
                        rate === 2
                            ?
                            <>
                                <i><Icon color="#D10024" style={{ margin: '4px' }} icon='fa:star' /></i>
                                <i><Icon color="#D10024" style={{ margin: '4px' }} icon='fa:star' /></i>
                                <i><Icon color="#D10024" style={{ margin: '4px' }} icon='fa:star-o' /></i>
                                <i><Icon color="#D10024" style={{ margin: '4px' }} icon='fa:star-o' /></i>
                                <i><Icon color="#D10024" style={{ margin: '4px' }} icon='fa:star-o' /></i>
                            </>
                            :
                        rate === 3
                            ?
                            <>
                                <i><Icon color="#D10024" style={{ margin: '4px' }} icon='fa:star' /></i>
                                <i><Icon color="#D10024" style={{ margin: '4px' }} icon='fa:star' /></i>
                                <i><Icon color="#D10024" style={{ margin: '4px' }} icon='fa:star' /></i>
                                <i><Icon color="#D10024" style={{ margin: '4px' }} icon='fa:star-o' /></i>
                                <i><Icon color="#D10024" style={{ margin: '4px' }} icon='fa:star-o' /></i>
                            </>
                            :
                        rate === 4
                            ?
                            <>
                                <i><Icon color="#D10024" style={{ margin: '4px' }} icon='fa:star' /></i>
                                <i><Icon color="#D10024" style={{ margin: '4px' }} icon='fa:star' /></i>
                                <i><Icon color="#D10024" style={{ margin: '4px' }} icon='fa:star' /></i>
                                <i><Icon color="#D10024" style={{ margin: '4px' }} icon='fa:star' /></i>
                                <i><Icon color="#D10024" style={{ margin: '4px' }} icon='fa:star-o' /></i>
                            </>
                            :
                            <>
                                <i><Icon color="#D10024" style={{ margin: '4px' }} icon='fa:star' /></i>
                                <i><Icon color="#D10024" style={{ margin: '4px' }} icon='fa:star' /></i>
                                <i><Icon color="#D10024" style={{ margin: '4px' }} icon='fa:star' /></i>
                                <i><Icon color="#D10024" style={{ margin: '4px' }} icon='fa:star' /></i>
                                <i><Icon color="#D10024" style={{ margin: '4px' }} icon='fa:star' /></i>
                            </>
                    }
                </div>
                <div className="product-btns">
                    {
                        isLogged
                            ?
                            <span className="product-btns">
                                {
                                    !isInWishlist && !isInWishlistByDefault
                                        ? <button className="add-to-wishlist" onClick={handleAddToWishlist}><i><Icon icon='fa:heart-o' /></i><span className="tooltipp">add to wishlist</span></button>
                                        : <button className="add-to-wishlist" onClick={handleRemoveFromWishlist}><i><Icon icon="basil:heart-solid" width="28" height="28" /> </i><span className="tooltipp">remove</span></button>
                                }
                            </span>
                            : <></>
                    }
                    <button className="quick-view" onClick={handleView}><i><Icon icon='fa:eye' /></i><span className="tooltipp">view</span></button>
                </div>
            </div>
            {
                isLogged
                    ?
                    <div className="add-to-cart">
                        {
                            !isRemove
                                ? <button className="add-to-cart-btn" onClick={handleAddToCard}><i><Icon icon='fa:shopping-cart' /></i> add to cart</button>
                                : <button className="add-to-cart-btn" onClick={handleRemoveFromCard}><i><Icon icon='fa:trash' /></i> remove</button>
                        }
                    </div>
                    :
                    <>
                        <div className="add-to-cart">
                            <button className="add-to-cart-btn" onClick={handleLoginToBuy}>Login to buy</button>
                        </div>
                    </>
            }
        </div>
    )
}
