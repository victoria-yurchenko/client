import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export default function Logo () {

    const [logo, setLogo] = useState('');

    const url = '';
    
    useEffect(() => {

        
    }, []);

    return (
        <div className="header-logo">
            <a href="#" className="logo">
                <img src="./../../../../images/logo.png" alt="" />
            </a>
        </div>
    )
}
