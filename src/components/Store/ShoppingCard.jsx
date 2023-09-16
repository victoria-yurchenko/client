import { Icon, InlineIcon } from '@iconify/react';
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
                data.map(item => total += item.product.newPrice);
                setTotalPrice(total);
            }))
            .catch(error => console.log(error));
    }, []);

    const handlePlaceOrder = () => {
        window.location.replace(`http://localhost:3000/checkout`);
    };

    const handleSubmit = () => {
        window.location.replace(`http://localhost:3000/store`);
    };

    const handleRemoveFromCard = (productId) => {
        console.log(productId);
        console.log(localStorage.getItem('UserLoggedId'));
        const addToCard = {
            userId: localStorage.getItem('UserLoggedId'),
            productId: productId
        }
        console.log(addToCard);
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
            body: JSON.stringify(addToCard)
        };
        fetch('http://localhost:5089/api/maestro/removefromcard', options)
            .then(response => console.log(response))
            .catch(error => console.log(error));
        window.location.reload();
    };

    return (
        <div className="container">
            {
                products == null || products.length == 0
                    ?
                    <>
                        <h4 style={{ marginTop: '50px' }}>Your card is empty, it is time to fix this!</h4>
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
                    <>

                        <div className="order-summary">
                            <div className="order-col">
                                <div></div>
                                <div></div>
                            </div>
                            <div className="order-products">
                                {
                                    products.map(p =>
                                        <div className="row" style={{ margin: '30px' }}>
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th width="5%"></th>
                                                        <th width="5%"></th>
                                                        <th width="85%"></th>
                                                        <th width="5%"></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <i style={{ cursor: 'pointer' }} onClick={() => {handleRemoveFromCard (p.product.id)}}><Icon icon="fa:minus" /></i>
                                                        </td>
                                                        <td>
                                                            <img src={`data:image/jpeg;base64,${p.image}`} height={100} alt='product image' />
                                                        </td>
                                                        <td>
                                                            <label>{p.product.name}</label>
                                                        </td>
                                                        <td>
                                                            <label>${p.product.newPrice}</label>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    )
                                }
                            </div>
                            {/* <div className="order-col">
                                <div>Shiping</div>
                                <div><strong>FREE</strong></div>
                            </div> */}
                            <div className="order-col" style={{ marginTop: '100px' }}>
                                <div><strong>TOTAL</strong></div>
                                <div><strong className="order-total">${totalPrice}</strong></div>
                            </div>
                        </div>
                        <hr style={{ marginTop: '25px', marginBottom: '50px' }} />
                        <a href="#" onClick={handlePlaceOrder} className="primary-btn order-submit" style={{ outline: 'none', textDecoration: 'none' }}>Place order</a>
                    </>
            }
        </div>
    )
}
