
import { Icon } from '@iconify/react'
import React from 'react'

export default function Account({ user }) {

    const handleHoverEnter = (event) => {
        event.target.style.backgroundColor = '#f7f7f7';
    }

    const handleHoverLeave = (event) => {
        event.target.style.backgroundColor = '#e0e0e0';
    }

    return (
        <div className="container" >
            <div className="row" style={{ backgroundColor: '#e0e0e0', height: '4vh', borderRadius: '5px', marginTop: '20px' }}
            >
                <div className="col-11"
                >
                    <a href='#' style={{ textDecoration: 'none', color: 'black' }}

                    >
                        <i><Icon icon="fa:shopping-cart" style={{ marginRight: '10px' }} /></i>
                        <span>Card</span>
                    </a>
                </div>
                <div className="col-1">
                    <i><Icon icon="fa:arrow-right" style={{ marginRight: '10px' }} /></i>
                </div>
            </div>
            <div className="row" style={{ backgroundColor: '#e0e0e0', height: '4vh', borderRadius: '5px', marginTop: '10px' }}
            >
                <div className="col-11">
                    <a href='#' style={{ textDecoration: 'none', color: 'black' }}>
                        <i><Icon icon="fa:history" style={{ marginRight: '10px' }} /></i>
                        <span>Previous Orders</span>
                    </a>
                </div>
                <div className="col-1">
                    <i><Icon icon="fa:arrow-right" style={{ marginRight: '10px' }} /></i>
                </div>
            </div>
            <div className="row" style={{ backgroundColor: '#e0e0e0', height: '4vh', borderRadius: '5px', marginTop: '10px' }}>
                <div className="col-11">
                    <a href='#' style={{ textDecoration: 'none', color: 'black' }} >
                        <i><Icon icon="fa:heart-o" style={{ marginRight: '10px' }} /></i>
                        <span>Wishlist</span>
                    </a>
                </div>
                <div className="col-1">
                    <i><Icon icon="fa:arrow-right" style={{ marginRight: '10px' }} /></i>
                </div>
            </div>
            <div className="row" style={{ backgroundColor: '#e0e0e0', height: '4vh', borderRadius: '5px', marginTop: '10px' }}>
                <div className="col-11">
                    <a href='#' style={{ textDecoration: 'none', color: 'black' }} >
                        <i><Icon icon="fa:cog" style={{ marginRight: '10px' }} /></i>
                        <span>Profile</span>
                    </a>
                </div>
                <div className="col-1">
                    <i><Icon icon="fa:arrow-right" style={{ marginRight: '10px' }} /></i>
                </div>
            </div>
            <div className="row" style={{ backgroundColor: '#e0e0e0', height: '4vh', borderRadius: '5px', marginTop: '10px' }}>
                <div className="col-11">
                    <a href='#' style={{ textDecoration: 'none', color: 'black' }} >
                        <i><Icon icon="fa:trash" style={{ marginRight: '10px' }} /></i>
                        <span>Delete Account</span>
                    </a>
                </div>
                <div className="col-1">
                    <i><Icon icon="fa:arrow-right" style={{ marginRight: '10px' }} /></i>
                </div>
            </div>
            <div className="row" style={{ backgroundColor: '#e0e0e0', height: '4vh', borderRadius: '5px', marginTop: '10px' }}>
                <div className="col-11">
                    <a href='#' style={{ textDecoration: 'none', color: 'black' }} >
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
