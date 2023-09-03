import React from 'react';
import './../../App.css';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ProductCart({
    image,
    isNew,
    sale,
    category,
    productName,
    price,
    isAdminSession,
    productId
}) {

    // const [selectedProductId, setSelectedProductId] = useState(0);

    const handleOnChange = () => {
        window.location.replace(`http://localhost:3000/changeproduct/${productId}`);
    };

    const handleView = () => {
        window.location.replace(`http://localhost:3000/product/${productId}`);
    };

    const handleOnDelete = () => {
        window.location.replace(`http://localhost:3000/product/delete/${productId}`);
    };

    const handleAddToCard = () => {
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
        fetch('http://localhost:5089/api/maestro/addtocard', options)
            .then(response => console.log(response))
            .catch(error => console.log(error));
     }   
     else console.log(0)
    }

    return (
        <div className="product m-1">
            <div className="product-img">
                <img src={image} alt="product" />
                <div className="product-label">
                    {
                        sale != 0
                            ? <span className="sale">-{sale}%</span>
                            : <></>
                    }
                    {
                        isNew
                            ? <span className="new">NEW</span>
                            : <></>
                    }
                    {
                        isNew //isAdmin here
                            ?
                            <a className="new btn" style={{ marginLeft: '10px', border: '2px solid #D10024', borderRadius: 1, backgroundColor: '#FFF' }} >
                                <label style={{ cursor: 'pointer' }} onClick={handleOnChange}><Icon icon={'fa:cog'} style={{ marginRight: '10px' }} />Change</label>

                            </a>
                            : <></>
                    }
                    {
                        isNew //isAdmin here
                            ?
                            <a className="new btn" style={{ marginLeft: '10px', border: '2px solid #D10024', borderRadius: 1, backgroundColor: '#FFF' }} >
                                <label style={{ cursor: 'pointer' }} onClick={handleOnDelete}><Icon icon={'fa:trash'} style={{ marginRight: '10px' }} />Delete</label>

                            </a>
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
                        {productName}
                    </a>
                </h3>
                {
                    sale != 0
                        ? <h4 className="product-price">${price - price * sale / 100} <del className="product-old-price">${price}</del></h4>
                        : <h4 className="product-price">${price}</h4>

                }
                <div className="product-btns">
                    <button className="add-to-wishlist"><i><Icon icon='fa:heart-o' /></i><span className="tooltipp">add to wishlist</span></button>
                    <button className="quick-view" onClick={handleView}><i><Icon icon='fa:eye' /></i><span className="tooltipp">view</span></button>
                </div>
            </div>
            <div className="add-to-cart">
                <button className="add-to-cart-btn" onClick={handleAddToCard}><i><Icon icon='fa:shopping-cart' /></i> add to cart</button>
            </div>
        </div>
    )
}
