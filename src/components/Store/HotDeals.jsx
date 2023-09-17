import React from 'react'
import HotDeal from '../Home/HomeComponents/HotDeal'
import { useEffect } from 'react'
import { useState } from 'react';
import ProductCart from '../HelperComponents/ProductCart';
import Banner from '../Home/HomeComponents/Banner';
import ShowCounter from '../HelperComponents/ShowCounter';

export default function HotDeals() {

    const [products, setProducts] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);
    const [deadline, setDeadline] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5089/api/maestro/gethotdeals')
            .then(responce => responce.json().then(data => {
                console.log(data);
                setCurrentUser(localStorage.getItem('UserLoggedId'));
                setProducts(data);
                setDeadline(new Date(Date.parse(data.finishesAt)));
                console.log(new Date(Date.parse(data.finishesAt)));
                console.log(deadline);
            }))
            .catch(error => console.log(error));
    }, []);


    return (
        <>
            {
                products == null
                    ? <></>
                    :
                    <>
                        { }
                        <Banner />
                        <div id="hot-deal" className="section" >
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="hot-deal">
                                            <ShowCounter 
                                                targetDate={deadline}
                                            />
                                            <h2 className="text-uppercase">hot deal this week</h2>
                                            <p>New Collection Up to 50% OFF</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="container">
                            {
                                products.products.map(item =>
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                        {
                                            <ProductCart
                                                image={`${item.image}`}
                                                isNew={false}
                                                productName={item.product.name}
                                                productId={item.product.productId}
                                                newPrice={item.product.newPrice}
                                                oldPrice={item.product.oldPrice}
                                                isAdminSession={currentUser.roleId === 1 ? true : false}
                                                isInWishlistByDefault={false}
                                            />
                                        }
                                    </div>
                                )
                            }
                        </div>
                    </>
            }
        </>
    )
}
