import React from 'react';
import './Header.css';
import { ReactDOM } from 'react';
import { Icon } from '@iconify/react';

export default function Header() {


    return (
        <div>
            <nav className="navbar">
                <i className="material-icons menu-icon">
                    menu
                </i>

                <div class="dropdown" tabIndex="0">
                    <button class="dropdown-btn" aria-haspopup="menu">
                        <span>Framework</span>
                        <span class="arrow"></span>
                    </button>
                    <ul class="dropdown-content" role="menu">
                        <li style={{"--delay": "1"}}><a href="#">React</a></li>
                        <li style={{"--delay": "2"}}><a href="#">Angular</a></li>
                        {/* <li style="--delay: 3;"><a href="#">Vue</a></li>
                        <li style="--delay: 4;"><a href="#">Svelte</a></li> */}
                    </ul>
                </div>

                {/* <div className="logo">
                    <select>
                        <option value="all">All</option>
                        <option value="all">Mens</option>
                        <option value="all">Womens</option>
                        <option value="all">Winter</option>
                        <option value="all">Summer</option>
                    </select>
                </div> */}

                <div className="item search right" tabIndex="0">
                    <div className="search-group">
                        <input type="text" />
                        <i class="material-icons search-icon">
                            <Icon icon="uil:search" />
                        </i>
                    </div>
                </div>

                <a href="" className="item">
                    <div className="group">
                        <i className="material-icons" >
                            <Icon icon="codicon:account" />
                        </i>
                        <div className="detail">
                        </div>
                    </div>
                </a>

                <a href="" className="item">
                    <div className="group">
                        <i className="material-icons">
                            <Icon icon="icon-park-outline:shopping" />
                        </i>
                        <div className="detail">
                        </div>
                    </div>
                </a>
            </nav>
        </div>
    )
}
