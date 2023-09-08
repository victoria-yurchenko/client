import { Icon } from '@iconify/react'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function DeleteAccount() {

    const handleSubmit = () => {
        const options = {
            method: 'DELETE',
        };
        fetch(`http://localhost:5089/api/maestro/${localStorage.getItem('UserLoggedId')}`, options)
            .then(response => console.log(response))
            .catch(error => console.log(error));
        localStorage.setItem('UserLoggedId', null);
        window.location.replace(`http://localhost:3000/`);
    };

    const handleCancel = () => {
        window.location.replace(`http://localhost:3000/myaccount`);
    };

    return (
        <div className="section">
            <div className="container">
                <div className="row">
                    {
                        localStorage.getItem('UserLoggedId') == null
                            ? <></>
                            :
                            <form className='form-group'>
                                <div className="col-12">
                                    <h2>Are you sure you want to delete your account?</h2>
                                    <a
                                        href="#"
                                        type='submit'
                                        className="primary-btn order-submit"
                                        style={{ textDecoration: 'none', marginTop: '50px' }}
                                        onClick={handleSubmit}
                                    >
                                        Delete
                                    </a>
                                    <a
                                        href="#"
                                        type='submit'
                                        className="primary-btn order-submit"
                                        style={{
                                            textDecoration: 'none',
                                            marginTop: '50px',
                                            backgroundColor: 'transparent',
                                            color: 'black',
                                            border: '1px solid #D10024',
                                            marginLeft: '30px'
                                        }}
                                        onClick={handleCancel}
                                    >
                                        Cancel
                                    </a>
                                </div>
                            </form>
                    }
                </div>
            </div>
        </div>
    )
}
