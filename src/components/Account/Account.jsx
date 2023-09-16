
import { Icon } from '@iconify/react'
import React from 'react'

export default function Account({ user }) {

    const handleHoverEnter = (event) => {
        event.target.style.backgroundColor = '#f7f7f7';
    };

    const handleHoverLeave = (event) => {
        event.target.style.backgroundColor = '#e0e0e0';
    };

    const handleSignOut = () => {
        localStorage.setItem('UserLoggedId', null);
        window.location.replace(`http://localhost:3000/`);
    };

    const handleOrders = () => {
        window.location.replace(`http://localhost:3000/orders`);
    };

    const handleDeleteAccount = () => {
        window.location.replace(`http://localhost:3000/deleteaccount`);
    };

    const handleWishlist = () => {
        window.location.replace(`http://localhost:3000/wishlist`);
    };

    const handlePreviousOrders = () => {
        window.location.replace(`http://localhost:3000/history`);
    };

    const handleCard = () => {
        window.location.replace(`http://localhost:3000/card`);
    };

    const handleTrackOrder = () => {
        window.location.replace(`http://localhost:3000/ordertrack`);
    };

    return (
        <div className="container" >
            <div className="row" style={{ backgroundColor: '#e0e0e0', height: '4vh', borderRadius: '5px', marginTop: '20px', cursor: 'pointer' }} onClick={handleOrders}>
                <div className="col-11">
                    <a style={{ textDecoration: 'none', color: 'black' }}>
                        <i><Icon icon="fa:truck" style={{ marginRight: '10px' }} /></i>
                        <span>Orders</span>
                    </a>
                </div>
                <div className="col-1">
                    <i><Icon icon="fa:arrow-right" style={{ marginRight: '10px' }} /></i>
                </div>
            </div>
            <div className="row" style={{ backgroundColor: '#e0e0e0', height: '4vh', borderRadius: '5px', marginTop: '10px', cursor: 'pointer' }} onClick={handleCard}>
                <div className="col-11">
                    <a style={{ textDecoration: 'none', color: 'black' }}>
                        <i><Icon icon="fa:shopping-cart" style={{ marginRight: '10px' }} /></i>
                        <span>Card</span>
                    </a>
                </div>
                <div className="col-1">
                    <i><Icon icon="fa:arrow-right" style={{ marginRight: '10px' }} /></i>
                </div>
            </div>
            <div className="row" style={{ backgroundColor: '#e0e0e0', height: '4vh', borderRadius: '5px', marginTop: '10px', cursor: 'pointer' }}>
                <div className="col-11">
                    <a style={{ textDecoration: 'none', color: 'black' }} onClick={handlePreviousOrders}>
                        <i><Icon icon="fa:history" style={{ marginRight: '10px' }} /></i>
                        <span>Previous Orders</span>
                    </a>
                </div>
                <div className="col-1">
                    <i><Icon icon="fa:arrow-right" style={{ marginRight: '10px' }} /></i>
                </div>
            </div>
            <div className="row" style={{ backgroundColor: '#e0e0e0', height: '4vh', borderRadius: '5px', marginTop: '10px', cursor: 'pointer' }}>
                <div className="col-11">
                    <a style={{ textDecoration: 'none', color: 'black' }}
                        onClick={handleTrackOrder}
                    >
                        <i><Icon icon="fa:bolt" style={{ marginRight: '10px' }} /></i>
                        <span>Track Order</span>
                    </a>
                </div>
                <div className="col-1">
                    <i><Icon icon="fa:arrow-right" style={{ marginRight: '10px' }} /></i>
                </div>
            </div>
            <div className="row" style={{ backgroundColor: '#e0e0e0', height: '4vh', borderRadius: '5px', marginTop: '10px', cursor: 'pointer' }} onClick={handleWishlist}>
                <div className="col-11">
                    <a style={{ textDecoration: 'none', color: 'black' }} >
                        <i><Icon icon="fa:heart-o" style={{ marginRight: '10px' }} /></i>
                        <span>Wishlist</span>
                    </a>
                </div>
                <div className="col-1">
                    <i><Icon icon="fa:arrow-right" style={{ marginRight: '10px' }} /></i>
                </div>
            </div>
            <div className="row" style={{ backgroundColor: '#e0e0e0', height: '4vh', borderRadius: '5px', marginTop: '10px', cursor: 'pointer' }}>
                <div className="col-11">
                    <a style={{ textDecoration: 'none', color: 'black' }} >
                        <i><Icon icon="fa:cog" style={{ marginRight: '10px' }} /></i>
                        <span>Profile</span>
                    </a>
                </div>
                <div className="col-1">
                    <i><Icon icon="fa:arrow-right" style={{ marginRight: '10px' }} /></i>
                </div>
            </div>
            <div className="row" style={{ backgroundColor: '#e0e0e0', height: '4vh', borderRadius: '5px', marginTop: '10px', cursor: 'pointer' }} onClick={handleDeleteAccount}>
                <div className="col-11">
                    <a style={{ textDecoration: 'none', color: 'black' }} >
                        <i><Icon icon="fa:trash" style={{ marginRight: '10px' }} /></i>
                        <span>Delete Account</span>
                    </a>
                </div>
                <div className="col-1">
                    <i><Icon icon="fa:arrow-right" style={{ marginRight: '10px' }} /></i>
                </div>
            </div>
            <div className="row" style={{ backgroundColor: '#e0e0e0', height: '4vh', borderRadius: '5px', marginTop: '10px', cursor: 'pointer' }} onClick={handleSignOut}>
                <div className="col-11">
                    <a style={{ textDecoration: 'none', color: 'black' }} >
                        <i><Icon icon="fa:sign-out" style={{ marginRight: '10px' }} /></i>
                        <span>Sign Out</span>
                    </a>
                </div>
                <div className="col-1">
                    <i><Icon icon="fa:arrow-right" style={{ marginRight: '10px' }} /></i>
                </div>
            </div>
        </div>
    )
}
