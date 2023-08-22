import React from 'react';
import { Icon } from '@iconify/react';
import './../App.css';

export default function CollectionCard({productName, imageUrl, catalogueLink}) {
    return (
        <div className="shop" >
            <div className="shop-img">
                <img height='200' width='200' src={imageUrl} alt="Product" />
            </div>
            <div className="shop-body">
                <h3>{productName}<br />Collection</h3>
                <a href={catalogueLink} className="cta-btn" style={{textDecoration: 'none'}}>Shop now <i><Icon icon="fa:arrow-circle-right" /></i></a>
            </div>
        </div>
    )
}
