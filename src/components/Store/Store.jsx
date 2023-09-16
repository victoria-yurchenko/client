import React from 'react';
import './../../App.css'
import { Icon } from '@iconify/react';
import ProductCart from '../HelperComponents/ProductCart';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Store({ data }) {

    const [currentUser, setCurrentUser] = useState({});
    const [products, setProducts] = useState(null);
    const params = useParams();

    useEffect(() => {
        let productsTemp = {
            productsDBO: [],
            categories: [...data.categories]
        };

        if (data !== undefined) {
            if (params.category !== undefined && params.query !== undefined) {
                data.productsDBO.map(p => {
                    if (p.productName.toLowerCase().includes(params.query.toLowerCase()) && p.category == params.category)
                        productsTemp.productsDBO.push(p);
                });
            }
            else if (params.queryonly !== undefined) {
                data.productsDBO.map(p => {
                    if (p.productName.toLowerCase().includes(params.query.toLowerCase()))
                        productsTemp.productsDBO.push(p);
                });
            }
            else if (params.categoryonly !== undefined) {
                data.productsDBO.map(p => {
                    if (p.category == params.category) {
                        productsTemp.productsDBO.push(p);
                        console.log(productsTemp.productsDBO)
                    }
                });
            }
            else
                productsTemp.productsDBO = [...data.productsDBO];
            console.log(productsTemp)
            setProducts(productsTemp);
        }

        if (localStorage.getItem('UserLoggedId') > 0) {
            fetch(`http://localhost:5089/api/users/getuser?userId=${localStorage.getItem('UserLoggedId')}`)
                .then(responce => responce.json().then(data => setCurrentUser(data)))
                .catch(error => console.log(error));
        }
    }, []);

    const handleAddNew = () => {
        window.location.replace(`http://localhost:3000/addnew`);
    };


    const handleFilterByCategory = () => {
        let productsTemp = {
            productsDBO: [],
            categories: [...data.categories]
        };
        let checkedLength = 0;
        const checkboxes = document.getElementsByClassName('checked-checkbox');
        for (let i = 0; i < checkboxes.length; i++) {
            const category = checkboxes[i].parentElement.children[1].children[1].innerHTML;
            if (checkboxes[i].checked) {
                console.log(checkedLength);
                checkedLength++;
                data.productsDBO.map(p => {
                    if (p.category == category) {
                        productsTemp.productsDBO.push(p);
                    }
                });
                setProducts(productsTemp);
            }
        }
        if (checkedLength == 0)
            setProducts(data);
    };

    const handleFilterByPrice = () => {
        const minPrice = document.getElementById('price-min').value;
        const maxPrice = document.getElementById('price-max').value;

        if (minPrice === '' && maxPrice === '')
            setProducts(data);
        else if (maxPrice === '') {
            let productsTemp = {
                productsDBO: [],
                categories: [...data.categories]
            };
            data.productsDBO.map(p => {
                if (p.newPrice >= minPrice) {
                    productsTemp.productsDBO.push(p);
                }
            });
            setProducts(productsTemp);
        }
        else if (minPrice === '') {
            let productsTemp = {
                productsDBO: [],
                categories: [...data.categories]
            };
            data.productsDBO.map(p => {
                if (p.newPrice <= maxPrice) {
                    productsTemp.productsDBO.push(p);
                }
            });
            setProducts(productsTemp);
        }
        else {
            let productsTemp = {
                productsDBO: [],
                categories: [...data.categories]
            };
            data.productsDBO.map(p => {
                if (p.newPrice >= minPrice && p.newPrice <= maxPrice) {
                    productsTemp.productsDBO.push(p);
                }
            });
            setProducts(productsTemp);
        }
    };

    const handleAddHotDeal = () => {
        window.location.replace(`http://localhost:3000/addhotdeal`);
    };

    return (
        <>
            {
                products == null
                    ?
                    <></>
                    :
                    <div className="section">
                        <div className="container">
                            <div className="row">
                                <div id="aside" className="col-md-3">
                                    <div className="aside">
                                        <h3 className="aside-title">Categories</h3>
                                        <div className="checkbox-filter">
                                            {
                                                products.categories.map((c, index) =>
                                                    <div key={index} className="input-checkbox" index={index} onChange={handleFilterByCategory}>
                                                        <input type="checkbox" id={index} className='checked-checkbox' />
                                                        <label htmlFor={index}>
                                                            <span></span>
                                                            <div>{c}</div>
                                                            <small>
                                                                ({data.productsDBO.filter(p => p.category == c).length})
                                                            </small>
                                                        </label>
                                                    </div>
                                                )
                                            }

                                        </div>
                                    </div>

                                    <div className="aside" style={{ marginBottom: '20px' }}>
                                        <h3 className="aside-title">Price</h3>
                                        <div className="price-filter">
                                            <div id="price-slider"></div>
                                            <div className="input-number price-min">
                                                <input id="price-min" type="number" onChange={handleFilterByPrice} />
                                                <span className="qty-up">+</span>
                                                <span className="qty-down">-</span>
                                            </div>
                                            <span>-</span>
                                            <div className="input-number price-max">
                                                <input id="price-max" type="number" onChange={handleFilterByPrice} />
                                                <span className="qty-up">+</span>
                                                <span className="qty-down">-</span>
                                            </div>
                                        </div>
                                        {
                                            currentUser.roleId === 1
                                                ?
                                                <>
                                                    <div>
                                                        <a
                                                            href="#"
                                                            type='submit'
                                                            className="primary-btn order-submit"
                                                            style={{ textDecoration: 'none', marginTop: '50px', borderRadius: '5px' }}
                                                            onClick={handleAddNew}
                                                        >
                                                            <span style={{ marginRight: '10px' }}>Add New</span>
                                                            <i><Icon icon='fa:plus' /></i>
                                                        </a>
                                                    </div>
                                                    <div>
                                                        <a
                                                            href="#"
                                                            type='submit'
                                                            className="primary-btn order-submit"
                                                            style={{ textDecoration: 'none', marginTop: '50px', borderRadius: '5px' }}
                                                            onClick={handleAddHotDeal}
                                                        >
                                                            <span style={{ marginRight: '10px' }}>Add Hot Deal</span>
                                                            <i><Icon icon='fa:plus' /></i>
                                                        </a>
                                                    </div>
                                                </>
                                                : <></>
                                        }
                                    </div>



                                    {/* <div className="aside">
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
                                    </div> */}
                                </div>

                                <div id="store" className="col-md-9">
                                    {/* <div className="store-filter clearfix">
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
                                    </div> */}

                                    <div className="row">
                                        {
                                            products.productsDBO.map(item =>
                                                <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                                    {
                                                        <ProductCart
                                                            image={`${item.image}`}
                                                            isNew={item.isNew}
                                                            isSale={item.isSale}
                                                            sale={item.sale}
                                                            price={item.price}
                                                            category={item.category}
                                                            productName={item.productName}
                                                            productId={item.productId}
                                                            newPrice={item.newPrice}
                                                            oldPrice={item.oldPrice}
                                                            isAdminSession={currentUser.roleId === 1 ? true : false}
                                                            isInWishlistByDefault={false}
                                                        />
                                                    }
                                                </div>
                                            )
                                        }
                                    </div>

                                    {/* <div className="store-filter clearfix">
                                        <span className="store-qty">Showing 20-100 products</span>
                                        <ul className="store-pagination">
                                            <li className="active">1</li>
                                            <li><a href="#">2</a></li>
                                            <li><a href="#">3</a></li>
                                            <li><a href="#">4</a></li>
                                            <li><a href="#"><i className="fa fa-angle-right"></i></a></li>
                                        </ul>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </>
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