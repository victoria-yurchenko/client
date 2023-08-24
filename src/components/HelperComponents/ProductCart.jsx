import React from 'react';
import './../../App.css';
import { Icon } from '@iconify/react';

export default function ProductCart({ image, isNew, sale, category, productName, price, isAdmitSession }) {

    return (
        <div class="product m-1">
            <div class="product-img">
                <img src={image} alt="product" />
                <div class="product-label">
                    {
                        sale != 0
                            ? <span class="sale">-{sale}%</span>
                            : <></>
                    }
                    {
                        isNew
                            ? <span class="new">NEW</span>
                            : <></>
                    }
                    {
                        isNew
                            ?
                            <a class="new btn" style={{ marginLeft: '10px', border: '2px solid #D10024', borderRadius: 1, backgroundColor: '#FFF' }} href='/changeproduct'>
                                <label style={{ cursor: 'pointer'}}><Icon icon={'fa:cog'} style={{ marginRight: '10px' }} />Change</label>
                            </a>
                            : <></>
                    }

                </div>
            </div>
            <div class="product-body">
                <p class="product-category">{category}</p>
                <h3 class="product-name">'
                    <a href="#"
                        style={{
                            textDecoration: 'none',
                            color: 'black'
                        }}
                    >
                        {productName}
                    </a>
                </h3>
                {
                    sale != 0
                        ? <h4 class="product-price">${price - price * sale / 100} <del class="product-old-price">${price}</del></h4>
                        : <h4 class="product-price">${price}</h4>

                }
                <div class="product-btns">
                    <button class="add-to-wishlist"><i><Icon icon='fa:heart-o' /></i><span class="tooltipp">add to wishlist</span></button>
                    <button class="add-to-compare"><i><Icon icon='fa:exchange' /></i><span class="tooltipp">add to compare</span></button>
                    <button class="quick-view"><i><Icon icon='fa:eye' /></i><span class="tooltipp">quick view</span></button>
                </div>
            </div>
            <div class="add-to-cart">
                <button class="add-to-cart-btn"><i><Icon icon='fa:shopping-cart' /></i> add to cart</button>
            </div>
        </div>
    )
}
