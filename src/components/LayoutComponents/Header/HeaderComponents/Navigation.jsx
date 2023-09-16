import React, { useEffect, useLayoutEffect } from 'react';
import { useState } from 'react';
import CategoryDropdown from './CategoryDropdown';
import { NavDropdown } from 'react-bootstrap';
import NavigationItem from './NavigationItem';
import HeaderIcon from './HeaderIcon';

export default function Navigation({ categoriesList, clicked }) {

    const [isClicked, setIsClicked] = useState(false);
    const [responsive, setResponsive] = useState('')

    useLayoutEffect(() => {
        if (clicked)
            setResponsive('active');
        else
            setResponsive('remove');
    }, [clicked]);

    const handleCardPage = () => {
        window.location.replace(`http://localhost:3000/card`);
    };

    const handleAccountPage = () => {
        window.location.replace(`http://localhost:3000/myaccount`);
    };

    const handleLoginPage = () => {
        window.location.replace(`http://localhost:3000/login`);
    };

    const handleWishlist = () => {
        window.location.replace(`http://localhost:3000/wishlist`);
    };

    return (
        <nav id="navigation">
            <div className="container">
                <div id="responsive-nav" className={responsive}>
                    <ul className="main-nav nav navbar">
                        <NavigationItem
                            categoryName='Home'
                            linkToPage='/'
                        />
                        <NavigationItem
                            categoryName='Hot Deals'
                            linkToPage='#'

                        />
                        <li className='nav-item' style={{ marginLeft: '38px' }}>
                            <CategoryDropdown />
                        </li>
                        {
                            !(localStorage.getItem('UserLoggedId') > 0)
                                ?
                                <li className='nav-item ' style={{ marginLeft: '60px' }}>
                                    <a className='nav-link navbar-text'
                                        onClick={handleLoginPage}
                                        style={{ fontWeight: '500' }}>
                                        <HeaderIcon
                                            icon='fa:user-o'
                                            title='Login'
                                            qti={0}
                                        />
                                    </a>
                                </li>
                                :
                                <>
                                    <li className='nav-item ' style={{ marginLeft: '40px' }}>
                                        <a className='nav-link navbar-text'
                                            onClick={handleAccountPage}
                                            style={{ fontWeight: '500' }}>
                                            <HeaderIcon
                                                icon='fa:user-o'
                                                title='My Account'
                                                qti={0}
                                            />
                                        </a>
                                    </li>
                                    <li className='nav-item'>
                                        <a className='nav-link navbar-text' href="#"
                                        onClick={handleWishlist}
                                            style={{ fontWeight: '500' }}>
                                            <HeaderIcon
                                                icon='fa:heart-o'
                                                title='Wishlist'
                                            />
                                        </a>
                                    </li>
                                    <li className='nav-item'>
                                        <a className='nav-link navbar-text'
                                            onClick={handleCardPage}
                                            style={{ fontWeight: '500' }}>
                                            <HeaderIcon
                                                icon='fa:shopping-cart'
                                                title='Cart'
                                            />
                                        </a>
                                    </li>
                                </>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}
