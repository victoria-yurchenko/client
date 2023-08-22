import React from 'react';
import { useState } from 'react';
import CategoryDropdown from './CategoryDropdown';
import { NavDropdown } from 'react-bootstrap';
import NavigationItem from './NavigationItem';
import HeaderIcon from './HeaderIcon';

export default function Navigation({ categoriesList }) {

    const [isClicked, setIsClicked] = useState(false);

    return (
        <nav id="navigation">
            <div className="container">
                <div id="responsive-nav">
                    <ul className="main-nav nav navbar">
                        <NavigationItem
                            categoryName='Home'
                            linkToPage='/'
                        />
                        <NavigationItem
                            categoryName='Hot Deals'
                            linkToPage='#'
                        />
                        <li className='nav-item'>

                            <CategoryDropdown />

                            {/* <a className='nav-link navbar-text' onClick={() => setIsClicked(!isClicked)}
                                style={{ fontWeight: '500' }}
                            >Categories</a> */}

                        </li>

                        <li className='nav-item '>
                            <a className='nav-link navbar-text ' href="#"
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
                                style={{ fontWeight: '500' }}>
                                <HeaderIcon
                                    icon='fa:heart-o'
                                    title='Wishlist'
                                />
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link navbar-text' href="#"
                                style={{ fontWeight: '500' }}>
                                <HeaderIcon
                                    icon='fa:shopping-cart'
                                    title='Cart'
                                />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
