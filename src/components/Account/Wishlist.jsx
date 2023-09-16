import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import ProductCart from '../HelperComponents/ProductCart';

export default function Wishlist() {

    const [products, setProducts] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5089/api/maestro/getwishlist?' + new URLSearchParams({
            userId: localStorage.getItem('UserLoggedId')
        }))
            .then(responce => responce.json().then(data => {
                setCurrentUser(localStorage.getItem('UserLoggedId'));
                setProducts(data);
                console.log(data);

            }))
            .catch(error => console.log(error));
    }, []);

    const handleSubmit = () => {
        window.location.replace(`http://localhost:3000/store`);
    };

    return (
        <div className="container">
            {
                products == null || products.length == 0
                    ?
                    <>
                        <h4 style={{ marginTop: '50px' }}>You do not have any product in your wishlist, it is time to fix this!</h4>
                        <a
                            href="#"
                            type='submit'
                            className="primary-btn order-submit"
                            style={{ textDecoration: 'none', marginTop: '50px' }}
                            onClick={handleSubmit}
                        >
                            Shop Now
                        </a>
                    </>
                    :
                    <div className="row">
                        {
                            products.map(item =>
                                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                    {
                                        <ProductCart
                                            image={`${item.image}`}
                                            isNew={item.isNew}
                                            isSale={item.isSale}
                                            sale={item.sale}
                                            price={item.price}
                                            category={item.category}
                                            productName={item.productName}
                                            productId={item.productId}
                                            newPrice={item.newPrice}
                                            oldPrice={item.oldPrice}
                                            isAdminSession={currentUser.roleId === 1 ? true : false}
                                            isInWishlistByDefault={true}
                                        />
                                    }
                                </div>
                            )
                        }
                    </div>
            }
        </div>
    )
}
