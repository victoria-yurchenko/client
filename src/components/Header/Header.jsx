import React from 'react';
import './Header.css';
import { ReactDOM } from 'react';
import { Icon } from '@iconify/react';
import Catalogue from '../Catalogue/Catalogue';
import Searchbar from '../Searchbar/Searchbar';
import Account from '../Account/Account';
import Shopping from '../Shopping/Shopping';

export default function Header() {


    return (
        <div>
            <nav className="navbar">
                <Catalogue />
                <Searchbar />
                <Account />
                <Shopping />
            </nav>
        </div>
    )
}
