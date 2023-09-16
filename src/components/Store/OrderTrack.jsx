import React from 'react'
import { useState } from 'react';

export default function OrderTrack() {

    const [status, setStatus] = useState('');

    const handleGetStatus = () => {

        const orderId = document.getElementById('order-number').value;

        fetch('http://localhost:5089/api/maestro/trackorder?' + new URLSearchParams({ orderId: orderId }))
            .then(responce => responce.json().then(data => {
                console.log(data);
                setStatus(`Your order is ${data.orderStatus}`);
            }))
            .catch(error => console.log(error));
    };

    return (
        <div className="container">
            <div className="col-3"></div>
            <div style={{ marginTop: '80px', fontWeight: 600 }}>
                <label style={{ marginBottom: '10px' }}>Enter the order number to see its status:</label>
                <input id='order-number' type="text" className="form-control" />
                <button style={{ marginTop: '40px', fontWeight: 600 }} type="submit" className="btn" onClick={handleGetStatus}>Get Status</button>
            </div>
            <div className="col-3"></div>
            <label id='status' style={{ marginTop: '50px' }}>{status}</label>
        </div>
    )
}
