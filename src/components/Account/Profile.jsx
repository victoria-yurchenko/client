import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

export default function Profile() {
    
    const fillProfile = (user) => {
        document.getElementById('email-id').value = user.email;
        document.getElementById('first-name-id').value = user.firstName;
        document.getElementById('last-name-id').value = user.lastName;
        document.getElementById('address-id').value = user.address;
        document.getElementById('city-id').value = user.city;
        document.getElementById('phone-id').value = user.phone;
        document.getElementById('zip-code-id').value = user.zipCode;
    };

    useEffect(() => {
        fetch('http://localhost:5089/api/users/getuser?' + new URLSearchParams({
            userId: localStorage.getItem('UserLoggedId')
        }))
            .then(responce => responce.json().then(data => {
                console.log(data);
                fillProfile(data);
            }))
            .catch(error => console.log(error));
    }, []);

    const handleSubmit = () => {

        const email = document.getElementById('email-id').value;
        const firstName = document.getElementById('first-name-id').value;
        const lastName = document.getElementById('last-name-id').value;
        const address = document.getElementById('address-id').value;
        const city = document.getElementById('city-id').value;
        const phone = document.getElementById('phone-id').value;
        const zipCode = document.getElementById('zip-code-id').value;

        const error = document.createElement('div');

        if (!firstName || !lastName || !email || !address || !city || !zipCode || !phone) {
            error.innerHTML = 'All fields are required';
            document.getElementById('validation-error-text').appendChild(error);
        }
        else {
            const toUpdate = {
                userId:  localStorage.getItem('UserLoggedId'),
                toUpdate: {
                    password: '',
                    email: email,
                    firstName: firstName,
                    lastName: lastName,
                    address: address,
                    city: city,
                    phone: phone,
                    zipCode: zipCode
                }
            };

            const options = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json; charset=utf-8' },
                body: JSON.stringify(toUpdate)
            };
            fetch('http://localhost:5089/api/users/updateuser', options)
                .then(response => {
                    console.log(response.status);
                    if (response.status === 200) {
                        window.location.replace(`http://localhost:3000/myaccount`);
                    }
                    else {
                        error.innerHTML = 'Something went wrong';
                        document.getElementById('validation-error-text').appendChild(error);
                    }
                })
                .catch(error => console.log(error));

        }
    };

    return (
        <div className="container" style={{ marginTop: '50px' }}>
            <div className="row">
                <div className="col-md-7">
                    <div className="billing-details">
                        <div id='form-controls'>
                            <input
                                type="email"
                                className="input"
                                placeholder="Email"
                                style={{ marginBottom: '10px' }}
                                id='email-id'
                                disabled
                            />
                            <input
                                type="text"
                                className="input"
                                placeholder="First Name"
                                style={{ marginBottom: '10px' }}
                                id='first-name-id'
                            />
                            <input
                                type="text"
                                className="input"
                                placeholder="Last Name"
                                style={{ marginBottom: '10px' }}
                                id='last-name-id'
                            />
                            <input
                                type="text"
                                className="input"
                                placeholder="Address"
                                style={{ marginBottom: '10px' }}
                                id='address-id'
                            />
                            <input
                                type="text"
                                className="input"
                                placeholder="City"
                                style={{ marginBottom: '10px' }}
                                id='city-id'
                            />
                            <input
                                type="text"
                                className="input"
                                placeholder="Phone"
                                style={{ marginBottom: '10px' }}
                                id='phone-id'
                            />
                            <input
                                type="text"
                                className="input"
                                placeholder="Zip Code"
                                style={{ marginBottom: '10px' }}
                                id='zip-code-id'
                            />
                        </div>
                    </div>
                </div>
                <div className="col-md-5 order-details">
                    <a
                        href="#"
                        type='submit'
                        className="primary-btn order-submit"
                        style={{ textDecoration: 'none' }}
                        onClick={handleSubmit}
                    >
                        Save Changes
                    </a>
                    <a
                        href="#"
                        type='submit'
                        className="primary-btn order-submit"
                        style={{ textDecoration: 'none', backgroundColor: 'white', color: 'black' }}
                        onClick={handleSubmit}
                    >
                        Change Password
                    </a>
                </div>
                <div className='col-7' id='validation-error-text'>

                </div>

            </div>
        </div>
    )
}
