import React from 'react'
import { useState } from 'react'

export default function NavigationItem({ categoryName, linkToPage, isActive }) {

    return (
        <>
            {
                isActive
                    ?
                    <li className="active nav-item navbar-text" s>
                        <a className='nav-link' href={linkToPage}
                            style={{ fontWeight: '500', color: 'black' }}
                        >{categoryName}</a>
                    </li>
                    :
                    <li className="nav-item navbar-text">
                        <a className='nav-link' href={linkToPage}
                            style={{ fontWeight:  '500', color: 'black' }}
                        >{categoryName}</a>
                    </li>
            }

        </>
    )
}
