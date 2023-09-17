import React from 'react'
import { useEffect } from 'react';

export default function ChangePassword() {

    useEffect(() => {
        fetch('http://localhost:5089/api/users/getuser?' + new URLSearchParams({
            userId: localStorage.getItem('UserLoggedId')
        }))
            .then(responce => responce.json().then(data => {
                console.log(data);
            }))
            .catch(error => console.log(error));
    }, []);

    const handleSubmit = () => {

        const currentPassword = document.getElementById('current-password-id').value;
        const newPassword = document.getElementById('new-password-id').value;

        const error = document.createElement('div');

        if (!currentPassword || !newPassword) {
            error.innerHTML = 'All fields are required';
            document.getElementById('validation-error-text').appendChild(error);
        }
        else {
            const toUpdate = {
                userId: localStorage.getItem('UserLoggedId'),
                oldPassword: currentPassword,
                newPassword: newPassword
            };

            const options = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json; charset=utf-8' },
                body: JSON.stringify(toUpdate)
            };
            fetch('http://localhost:5089/api/users/changepassword', options)
                .then(response => {
                    console.log(response.status);
                    if (response.status === 200) {
                        window.location.replace(`http://localhost:3000/myaccount`);
                    }
                    else {
                        error.innerHTML = 'Entered passwords are incorrect';
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
                                type="text"
                                className="input"
                                placeholder="Enter current password"
                                style={{ marginBottom: '10px' }}
                                id='current-password-id'
                            />
                            <input
                                type="text"
                                className="input"
                                placeholder="Enter new password"
                                style={{ marginBottom: '10px' }}
                                id='new-password-id'
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
                        Change Password
                    </a>
                </div>
                <div className='col-7' id='validation-error-text'>

                </div>

            </div>
        </div>
    )
}
