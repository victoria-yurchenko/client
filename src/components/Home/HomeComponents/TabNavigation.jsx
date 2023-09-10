import React from 'react'

export default function TabNavigation({title}) {
    return (
        <div className="section-title">
            <h3 className="title">{title}</h3>
            <div className="section-nav">
                <ul className="section-tab-nav tab-nav">
                    {/* <li className="active nav-item"><a className='nav-link navbar-text' data-toggle="tab" href="#tab1">Laptops</a></li>
                    <li className="nav-item"><a className='nav-link navbar-text' data-toggle="tab" href="#tab1">Smartphones</a></li>
                    <li className="nav-item"><a className='nav-link navbar-text' data-toggle="tab" href="#tab1">Cameras</a></li>
                    <li className="nav-item"><a className='nav-link navbar-text' data-toggle="tab" href="#tab1">Accessories</a></li> */}
                </ul>
            </div>
        </div>
    )
}
