import React from 'react';
import './../../App.css'
import { Icon } from '@iconify/react';
import ProductCart from '../ProductCart';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Store({data}) {

    

    return (
        <div className="section">
            <div className="container">
                <div className="row">
                    <div id="aside" className="col-md-3">
                        <div className="aside">
                            <h3 className="aside-title">Categories</h3>
                            <div className="checkbox-filter">
                                {
                                    data.categories.map((c, index) => 
                                        <div className="input-checkbox" index={index}>
                                            <input type="checkbox" id={index} />
                                            <label htmlFor={index}>
                                                <span></span>
                                                {c}
                                                <small>(120)</small>
                                            </label>
                                        </div>    
                                    )
                                }

                                {/* <div className="input-checkbox">
                                    <input type="checkbox" id="category-1" />
                                    <label htmlFor="category-1">
                                        <span></span>
                                        Laptops
                                        <small>(120)</small>
                                    </label>
                                </div> */}

                                {/* <div className="input-checkbox">
                                    <input type="checkbox" id="category-1" />
                                    <label htmlFor="category-1">
                                        <span></span>
                                        Laptops
                                        <small>(120)</small>
                                    </label>
                                </div>

                                <div className="input-checkbox">
                                    <input type="checkbox" id="category-2" />
                                    <label htmlFor="category-2">
                                        <span></span>
                                        Smartphones
                                        <small>(740)</small>
                                    </label>
                                </div>

                                <div className="input-checkbox">
                                    <input type="checkbox" id="category-3" />
                                    <label htmlFor="category-3">
                                        <span></span>
                                        Cameras
                                        <small>(1450)</small>
                                    </label>
                                </div>

                                <div className="input-checkbox">
                                    <input type="checkbox" id="category-4" />
                                    <label htmlFor="category-4">
                                        <span></span>
                                        Accessories
                                        <small>(578)</small>
                                    </label>
                                </div>

                                <div className="input-checkbox">
                                    <input type="checkbox" id="category-5" />
                                    <label htmlFor="category-5">
                                        <span></span>
                                        Laptops
                                        <small>(120)</small>
                                    </label>
                                </div>

                                <div className="input-checkbox">
                                    <input type="checkbox" id="category-6" />
                                    <label htmlFor="category-6">
                                        <span></span>
                                        Smartphones
                                        <small>(740)</small>
                                    </label>
                                </div> */}

                            </div>
                        </div>

                        <div className="aside">
                            <h3 className="aside-title">Price</h3>
                            <div className="price-filter">
                                <div id="price-slider"></div>
                                <div className="input-number price-min">
                                    <input id="price-min" type="number" />
                                    <span className="qty-up">+</span>
                                    <span className="qty-down">-</span>
                                </div>
                                <span>-</span>
                                <div className="input-number price-max">
                                    <input id="price-max" type="number" />
                                    <span className="qty-up">+</span>
                                    <span className="qty-down">-</span>
                                </div>
                            </div>
                        </div>

                        <div className="aside">
                            <h3 className="aside-title">Top selling</h3>
                            <div className="product-widget">
                                <div className="product-img">
                                    <img src="https://media.istockphoto.com/id/1124394341/photo/colorful-piano-key-board.jpg?s=612x612&w=0&k=20&c=C2ld3WdyXxJYcUoE4qne1DvC9PDsz_1mC5SgS7_W4ks=" alt="" />
                                </div>
                                <div className="product-body">
                                    <p className="product-category">Category</p>
                                    <h3 className="product-name"><a href="#">product name goes here</a></h3>
                                    <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                                </div>
                            </div>

                            <div className="product-widget">
                                <div className="product-img">
                                    <img src="https://media.istockphoto.com/id/1124394341/photo/colorful-piano-key-board.jpg?s=612x612&w=0&k=20&c=C2ld3WdyXxJYcUoE4qne1DvC9PDsz_1mC5SgS7_W4ks=" alt="" />
                                </div>
                                <div className="product-body">
                                    <p className="product-category">Category</p>
                                    <h3 className="product-name"><a href="#">product name goes here</a></h3>
                                    <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                                </div>
                            </div>

                            <div className="product-widget">
                                <div className="product-img">
                                    <img src="https://media.istockphoto.com/id/1124394341/photo/colorful-piano-key-board.jpg?s=612x612&w=0&k=20&c=C2ld3WdyXxJYcUoE4qne1DvC9PDsz_1mC5SgS7_W4ks=" alt="" />
                                </div>
                                <div className="product-body">
                                    <p className="product-category">Category</p>
                                    <h3 className="product-name"><a href="#">product name goes here</a></h3>
                                    <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="store" className="col-md-9">
                        <div className="store-filter clearfix">
                            <div className="store-sort">
                                <label>
                                    Sort By:
                                    <select className="input-select">
                                        <option value="0">Popular</option>
                                        <option value="1">Position</option>
                                    </select>
                                </label>

                                <label>
                                    Show:
                                    <select className="input-select">
                                        <option value="0">20</option>
                                        <option value="1">50</option>
                                    </select>
                                </label>
                            </div>
                            <ul className="store-grid">
                                <li className="active"><i><Icon icon="fa:th" /></i></li>
                                <li><a href="#"><i><Icon icon="fa:th-list" /></i></a></li>
                            </ul>
                        </div>

                        <div className="row">
                            {
                                data.productsDBO.map(item => {
                                    console.log(item)
                                    return <div className="col-md-4 col-xs-6">
                                        <ProductCart
                                            image={item.image}
                                            isNew={item.isNew}
                                            isSale={item.isSale}
                                            sale={item.sale}
                                            price={item.price}
                                            category={item.category}
                                            productName={item.productName}
                                        />
                                    </div>
                                })
                            }
                        </div>

                        <div className="store-filter clearfix">
                            <span className="store-qty">Showing 20-100 products</span>
                            <ul className="store-pagination">
                                <li className="active">1</li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#">4</a></li>
                                <li><a href="#"><i className="fa fa-angle-right"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
