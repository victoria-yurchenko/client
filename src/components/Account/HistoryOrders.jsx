import { Icon } from '@iconify/react';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import OrderCard from '../HelperComponents/OrderCard';

export default function HistoryOrders() {

    const [orders, setOrders] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5089/api/maestro/orders?' + new URLSearchParams({
            userId: localStorage.getItem('UserLoggedId')
        }))
            .then(responce => responce.json().then(data => {
                setOrders(data.filter(o => o.orderStatus != "InProcess"));
                console.log(data);

            }))
            .catch(error => console.log(error));
    }, []);

    const handleSubmit = () => {
        window.location.replace(`http://localhost:3000/store`);
    };

    return (
        <div className="container" >
            {
                orders == null || orders.length == 0
                    ?
                    <>
                        <h4 style={{ marginTop: '50px' }}>You do not have any completed order, it is time to fix this!</h4>
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
                    orders.map((o, index) =>
                        <div style={{ marginTop: '50px' }}>
                            <label style={{ marginLeft: '80px' }}>Order: </label>
                            <label style={{ fontWeight: 600, marginLeft: '20px' }}># {o.orderId}</label>
                            <label style={{ marginLeft: '20px' }}> / </label>
                            <label style={{ fontWeight: 600, marginLeft: '20px' }}> {o.orderStatus}</label>
                            <hr />
                            <OrderCard order={o} />
                            <hr />
                            <label style={{ marginLeft: '80px' }}>Total: </label>
                            <label style={{ fontWeight: 600, marginLeft: '20px' }}>$ {o.totalPrice}</label>
                        </div>
                    )
            }
        </div>
    )
}
