import React from 'react';
import './Navigation.css';

export default function Navigation() {
    return (
        <nav id="navigation">
            <div className="container">
                <div id="responsive-nav">
                    <ul className="main-nav nav navbar">
                        <li className="active nav-item">
                            <a className='nav-link' href="#"
                                style={{ fontWeight: '500' }}
                            >Home</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link navbar-text' href="#"
                                style={{ fontWeight: '500' }}
                            > Hot Deals</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link navbar-text' href="#"
                                style={{ fontWeight: '500' }}
                            >Categories</a></li>
                        <li className='nav-item '>
                            <a className='nav-link navbar-text' href="#"
                                style={{ fontWeight: '500' }}
                            >Guitars</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link navbar-text' href="#"
                                style={{ fontWeight: '500' }}
                            >Pianos</a></li>
                        <li className='nav-item'>
                            <a className='nav-link navbar-text' href="#"
                                style={{ fontWeight: '500' }}
                            >Microphones</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link navbar-text' href="#"
                                style={{ fontWeight: '500' }}
                            >Accessories</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
