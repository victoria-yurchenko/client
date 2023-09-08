import { Icon } from '@iconify/react';
import React, { useEffect, useState } from 'react'

export default function ShoppingCard() {

    const [products, setProducts] = useState(null);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        console.log(products)
        fetch('http://localhost:5089/api/maestro/card?' + new URLSearchParams({
            userId: localStorage.getItem('UserLoggedId')
        }))
            .then(responce => responce.json().then(data => {
                console.log(data);
                setProducts(data);
                console.log(localStorage.getItem('UserLoggedId'))
                let total = 0;
                data.map(item => total += item.newPrice);
                setTotalPrice(total);
            }))
            .catch(error => console.log(error));
    }, []);

    const handlePlaceOrder = () => {
        window.location.replace(`http://localhost:3000/checkout`);
    };

    return (
        <div className="container">
            {
                products == null
                    ? <></>
                    :
                    <>

                        <div className="order-summary">
                            <div className="order-col">
                                <div><strong>PRODUCT</strong></div>
                                <div><strong>TOTAL</strong></div>
                            </div>
                            <div className="order-products">

                                {
                                    products.map(p =>
                                        // <div className="row" key={p.id}
                                        //     style={{ backgroundColor: '#e0e0e0', height: '4vh', borderRadius: '5px', marginTop: '20px', fontWeight: 600 }}
                                        // >
                                        //     <div className="col-2">
                                        //         image
                                        //     </div>
                                        //     <div className="col-8">
                                        //         {p.name}
                                        //     </div>
                                        //     <div className="col-1">
                                        //         {p.newPrice}
                                        //     </div>
                                        //     <div className="col-1">
                                        //         <i><Icon icon="fa:trash" style={{ marginRight: '10px' }} /></i>
                                        //     </div>
                                        // </div>
                                        <div className="order-col">
                                            <div>1x {p.name}</div>
                                            <div>${p.newPrice}</div>
                                        </div>
                                    )
                                }

                            </div>
                            <div className="order-col">
                                <div>Shiping</div>
                                <div><strong>FREE</strong></div>
                            </div>
                            <div className="order-col">
                                <div><strong>TOTAL</strong></div>
                                <div><strong className="order-total">${totalPrice}</strong></div>
                            </div>
                        </div>
                        <hr style={{ marginTop: '25px', marginBottom: '50px' }} />
                        <a href="#" onClick={handlePlaceOrder} className="primary-btn order-submit" style={{ outline: 'none' }}>Place order</a>
                    </>
            }
        </div>
    )
}
