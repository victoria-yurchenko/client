import React, { useEffect } from 'react';
import { Icon } from '@iconify/react';
import { useState } from 'react';

export default function Menu({onClicked, clicked}) {

    const handleOnClick = (event) => {

        event.preventDefault();
        onClicked(!clicked);
        // let isClicked = !isClicked;
        // console.log(isClicked)

        // var nav = document.getElementById('#responsive-nav');

        // if (isClicked)
        //     nav.classList.add('active');
        // else
        //     nav.classList.add('remove');
    };

    return (

        <div className="menu-toggle">
            <a href='#' onClick={handleOnClick} style={{ textDecoration: 'none' }}>
                <i><Icon icon="fa:bars" /></i>
                <span>Menu</span>
            </a>
        </div>
    )
}
