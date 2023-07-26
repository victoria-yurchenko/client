import React, { useEffect, useState } from 'react';
import './Catalogue.css';

export default function Catalogue() {

    const catalogue = ['line1', 'line2', 'line3', 'line4'];

    return (
        <div>
            <div className="dropdown" tabIndex="0">
                <button className="dropdown-btn" aria-haspopup="menu">
                    <span>Catalogue</span>
                    <span className="arrow"></span>
                </button>
                <ul className="dropdown-content" role="menu">
                    {catalogue.map((item, key) => <li key={key} ><a href="#">{item}</a></li>)}
                </ul>
            </div>
        </div>
    )
}
