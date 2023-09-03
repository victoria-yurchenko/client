import React, { useState } from 'react';
import Search from './HeaderComponents/Search';
import Logo from './HeaderComponents/Logo';
import Menu from './HeaderComponents/Menu';
import HeaderIcon from './HeaderComponents/HeaderIcon';
import Navigation from './HeaderComponents/Navigation';

export default function Header() {

    const [clicked, setClicked] = useState(false);

    const onClicked = (value) => {
        setClicked(value);
    };

    return (
        <>
            <div>
                <header>
                    <div id="header">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3">
                                    <Logo />
                                </div>
                                <div className="col-md-6 col-sm-10 col-xs-10">
                                    <Search />
                                </div>
                                <div className="col-md-3 col-sm-2 col-xs-2 clearfix">
                                    <div className="header-ctn" >
                                        <Menu onClicked={onClicked} clicked={clicked} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
            <Navigation clicked={clicked} />
        </>
    )
}
