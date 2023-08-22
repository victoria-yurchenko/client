import React from 'react';
import Search from './HeaderComponents/Search';
import Logo from './HeaderComponents/Logo';
import Menu from './HeaderComponents/Menu';
import HeaderIcon from './HeaderComponents/HeaderIcon';
import Navigation from './HeaderComponents/Navigation';

export default function Header() {


    return (
        <>
            <div>
                <header>
                    <div id="header">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-3">
                                    <Logo />
                                </div>
                                <div class="col-md-6 col-sm-10 col-xs-10">
                                    <Search />
                                </div>
                                <div class="col-md-3 col-sm-2 col-xs-2 clearfix">
                                    <div class="header-ctn" >
                                        <Menu />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
            <Navigation/>
        </>
    )
}
