import React from 'react';
import './../App.css';
import { Icon } from '@iconify/react';

export default function ProductCart({ image, isNew, isSale, sale, category, productName, price }) {

    return (
        <div class="product m-1">
            <div class="product-img">
                <img src={image} alt="product" />
                <div class="product-label">
                    {
                        isSale
                            ? <span class="sale">-{sale}%</span>
                            : <span style={{ display: 'none' }}></span>
                    }
                    {
                        isNew
                            ? <span class="new">NEW</span>
                            : <span style={{ display: 'none' }}></span>
                    }
                </div>
            </div>
            <div class="product-body">
                <p class="product-category">{category}</p>
                <h3 class="product-name"><a href="#">{productName}</a></h3>
                {
                    isSale
                        ? <h4 class="product-price">${price - price * sale / 100} <del class="product-old-price">${price}</del></h4>
                        : <h4 class="product-price">${price}</h4>

                }
                <div class="product-btns">
                    <button class="add-to-wishlist"><i><Icon icon='fa:heart-o'/></i><span class="tooltipp">add to wishlist</span></button>
                    <button class="add-to-compare"><i><Icon icon='fa:exchange'/></i><span class="tooltipp">add to compare</span></button>
                    <button class="quick-view"><i><Icon icon='fa:eye'/></i><span class="tooltipp">quick view</span></button>
                </div>
            </div>
            <div class="add-to-cart">
                <button class="add-to-cart-btn"><i><Icon icon='fa:shopping-cart'/></i> add to cart</button>
            </div>
        </div>
    )
}
