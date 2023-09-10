import React, { useEffect, useState } from 'react';
import './../../../App.css';

export default function Checkout() {

    const [user, setUser] = useState(null);
    const [products, setProducts] = useState(null);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        fetch('http://localhost:5089/api/maestro/card?' + new URLSearchParams({
            userId: localStorage.getItem('UserLoggedId')
        }))
            .then(responce => responce.json().then(data => {
                // console.log(data);
                setProducts(data);
                let total = 0;
                data.map(item => total += item.newPrice);
                setTotalPrice(total);
            }))
            .catch(error => console.log(error));

        console.log(localStorage.getItem('UserLoggedId'))
        fetch('http://localhost:5089/api/users/getuser?' + new URLSearchParams({
            userId: localStorage.getItem('UserLoggedId')
        }))
            .then(responce => responce.json().then(data => {
                // console.log(data);
                setUser(data);
            }))
            .catch(error => console.log(error));
    }, []);

    const handleCheck = (event) => {
        const termsAndConditions = event.target;
        const submitButton = document.getElementById('submit-btn-id');
        if (termsAndConditions.checked) {
            submitButton.style.backgroundColor = '#D10024';
            submitButton.style.pointerEvents = '';
            submitButton.style.cursor = 'pointer';
        }
        else {
            submitButton.style.pointerEvents = 'none';
            submitButton.style.cursor = 'default';
            submitButton.style.backgroundColor = '#d10023a5';
        }
    };

    const handleSubmitOrder = () => {
        const differentAddress = document.getElementById('shiping-address');
        let address = null;
        // console.log(user)
        if (!differentAddress.checked) {
            address = {
                firstName: user.firstName,
                lastName: user.lastName,
                address: user.address,
                city: user.city,
                zipCode: user.zipCode,
                phone: user.phone
            };
        }
        else {
            address = {
                firstName: document.getElementById('f-name').value,
                lastName: document.getElementById('l-name').value,
                address: document.getElementById('ad-s').value,
                city: document.getElementById('c-y').value,
                zipCode: document.getElementById('z-code').value,
                phone: document.getElementById('t-phone').value
            };
        }

        const orderNotes = document.getElementById('order-notes-id').value;

        const orderDBO = {
            products: products,
            userId: user.userId,
            address: address,
            orderNotes: orderNotes
        };
        console.log(JSON.stringify(orderDBO))

        console.log(products)
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
            body: JSON.stringify(orderDBO)
        };
        fetch('http://localhost:5089/api/maestro/submitorder', options)
            .then(response => response.json()
                .then(data => {
                    console.log(data);
                    localStorage.setItem(`orderId`, data.id);
                    window.location.replace(`http://localhost:3000/orderafterconfirm`);
                })
            )
            .catch(error => console.log(error));
    };

    return (
        <div className="section">
            {
                products != null && user != null
                    ?
                    <div className="container">
                        <div className="row">

                            <div className="col-md-7">
                                <div className="billing-details">
                                    <div className="section-title" >
                                        <h3 className="title">Billing address</h3>
                                    </div>
                                    <div className="form-group m-2">
                                        <span className='link-secondary '>First Name:</span>
                                        <span className='link-dark ' disabled style={{ fontWeight: 600 }}> {user.firstName}</span>
                                    </div>
                                    <div className="form-group m-2">
                                        <span className='link-secondary '>Last Name:</span>
                                        <span className='link-dark ' disabled style={{ fontWeight: 600 }}> {user.lastName}</span>
                                    </div>
                                    <div className="form-group m-2">
                                        <span className='link-secondary '>Email:</span>
                                        <span className='link-dark ' disabled style={{ fontWeight: 600 }}> {user.email}</span>
                                    </div>
                                    <div className="form-group m-2">
                                        <span className='link-secondary '>Address:</span>
                                        <span className='link-dark ' disabled style={{ fontWeight: 600 }}> {user.address}</span>
                                    </div>
                                    <div className="form-group m-2">
                                        <span className='link-secondary '>City:</span>
                                        <span className='link-dark ' disabled style={{ fontWeight: 600 }}> {user.city}</span>
                                    </div>
                                    <div className="form-group m-2">
                                        <span className='link-secondary '>Zip Code:</span>
                                        <span className='link-dark ' disabled style={{ fontWeight: 600 }}> {user.zipCode}</span>
                                    </div>
                                    <div className="form-group m-2">
                                        <span className='link-secondary '>Phone Number:</span>
                                        <span className='link-dark ' disabled style={{ fontWeight: 600 }}> {user.phone}</span>
                                    </div>
                                </div>

                                <div className="shiping-details">
                                    <div className="section-title">
                                        <h3 className="title">Shiping address</h3>
                                    </div>
                                    <div className="input-checkbox">
                                        <input type="checkbox" id="shiping-address" />
                                        <label htmlFor="shiping-address">
                                            <span></span>
                                            Ship to a diffrent address?
                                        </label>
                                        <div className="caption">
                                            <div className="form-group m-2">
                                                <input id='f-name' className="input" type="text" name="first-name" placeholder="First Name" />
                                            </div>
                                            <div className="form-group m-2">
                                                <input id='l-name' className="input" type="text" name="last-name" placeholder="Last Name" />
                                            </div>
                                            <div className="form-group m-2">
                                                <input id='e-mail' className="input" type="email" name="email" placeholder="Email" />
                                            </div>
                                            <div className="form-group m-2">
                                                <input id='ad-s' className="input" type="text" name="address" placeholder="Address" />
                                            </div>
                                            <div className="form-group m-2">
                                                <input id='c-y' className="input" type="text" name="city" placeholder="City" />
                                            </div>
                                            <div className="form-group m-2">
                                                <input id='z-code' className="input" type="text" name="zip-code" placeholder="ZIP Code" />
                                            </div>
                                            <div className="form-group m-2">
                                                <input id='t-phone' className="input" type="tel" name="tel" placeholder="Telephone" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="order-notes">
                                    <textarea id='order-notes-id' className="input" placeholder="Order Notes"></textarea>
                                </div>
                            </div>

                            <div className="col-md-5 order-details" style={{ marginTop: '20px' }}>
                                <div className="section-title text-center">
                                    <h3 className="title">Your Order</h3>
                                </div>
                                <div className="order-summary">
                                    <div className="order-col">
                                        <div><strong>PRODUCT</strong></div>
                                        <div><strong>TOTAL</strong></div>
                                    </div>
                                    <div className="order-products">
                                        {
                                            products.map(p =>
                                                <div className="order-col">
                                                    <div>1x {p.name}</div>
                                                    <div>${p.newPrice}</div>
                                                </div>
                                            )
                                        }
                                    </div>
                                    <div className="order-col">
                                        <div>Shiping</div>
                                        <div><strong>FREE</strong></div>
                                    </div>
                                    <div className="order-col">
                                        <div><strong>TOTAL</strong></div>
                                        <div><strong className="order-total">${totalPrice}</strong></div>
                                    </div>
                                </div>
                                <div className="payment-method">
                                    <div className="input-radio">
                                        <input type="radio" name="payment" id="payment-1" />
                                        <label htmlFor="payment-1">
                                            <span></span>
                                            Direct Bank Transfer
                                        </label>
                                        <div className="caption">
                                            <p>Direct Bank Transfer info</p>
                                        </div>
                                    </div>
                                    <div className="input-radio">
                                        <input type="radio" name="payment" id="payment-2" />
                                        <label htmlFor="payment-2">
                                            <span></span>
                                            Cheque Payment
                                        </label>
                                        <div className="caption">
                                            <p>Cheque Paymnet info</p>
                                        </div>
                                    </div>
                                    <div className="input-radio">
                                        <input type="radio" name="payment" id="payment-3" />
                                        <label htmlFor="payment-3">
                                            <span></span>
                                            Paypal System
                                        </label>
                                        <div className="caption">
                                            <p>Paypal System info</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-checkbox">
                                    <input type="checkbox" id="terms" onChange={handleCheck} />
                                    <label htmlFor="terms">
                                        <span></span>
                                        I've read and accept the <a href="#">terms & conditions</a>
                                    </label>
                                </div>
                                <a href='#' className="primary-btn order-submit" id='submit-btn-id' style={{ backgroundColor: '#d10023a5' }} onClick={handleSubmitOrder}>submit order</a>
                            </div>
                        </div>
                    </div>
                    : <></>
            }
        </div>
    )
}
