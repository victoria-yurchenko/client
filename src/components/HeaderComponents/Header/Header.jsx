import React from 'react';
import './Header.css';
import Search from '../Search/Search';
import Logo from '../Logo/Logo';
import Account from '../Account/Account';
import Wishlist from '../Wishlist/Wishlist';
import Cart from '../Cart/Cart';
import Menu from '../Menu/Menu';

export default function Header() {


    return (
        <div>
            <header>
                <div id="header">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-3">
                                <Logo />
                            </div>
                            <div class="col-md-6">
                                <Search />
                            </div>
                            <div class="col-md-3 clearfix">
                                <div class="header-ctn">
                                    <Account />
                                    <Wishlist />
                                    <Cart />
                                    <Menu />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}
