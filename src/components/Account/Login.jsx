import React, { useEffect, useState } from 'react'

export default function Login() {

    const [status, setStatus] = useState(200);

    const handleRegisterPage = () => {
        window.location.replace(`http://localhost:3000/registration`);
    };

    useEffect(() => {
        // console.log(status)
        // if(status != 200) {
        //     const error = document.getElementById('error-message');
        //     error.style.color = 'red';
        //     error.style.fontWeight = '650';
        //     // error.innerHTML = 'The '
        // }
        // else {
        //     localStorage.setItem
        // }

    }, status);

    const handleLogin = (event) => {
        event.preventDefault();
        const login = document.getElementById('login').value;
        const password = document.getElementById('password').value;
        const user = {
            email: login,
            password: password
        };
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
            body: JSON.stringify(user)
        };
        fetch('http://localhost:5089/api/users/user', options)
            .then(response => {
                if (response.status == 200)
                    return response.json()
                        .then(data => {
                            console.log(data);
                            localStorage.setItem('UserLoggedId', data.id);
                        })
                        .catch(error => console.log(error));
                else
                    console.log("DATA INCORRECT");
            }
            )
            .catch(error => console.log(error));
    };

    return (
        <div className="section">
            <div className="container">
                <div className="row">
                    <div className="col-5">
                        <form className='form-group'>
                            <input
                                type="text"
                                className="input"
                                id='login'
                                placeholder="Login"
                                style={{ marginBottom: '10px' }}
                            />
                            <input
                                type="password"
                                className="input"
                                id='password'
                                placeholder="Password"
                                style={{ marginBottom: '10px' }}
                            />
                            <div id='error-message'></div>
                            <a
                                href="#"
                                type='submit'
                                className="btn form-control"
                                style={{
                                    textDecoration: 'none',
                                    backgroundColor: '#D10024',
                                    color: 'white'
                                }}
                                onClick={handleLogin}

                            >
                                Login
                            </a>
                            <a
                                type="submit"
                                className="input"
                                placeholder="Password"

                                style={{ marginTop: '40px', color: 'black', border: '1px solid black' }}
                                onClick={handleRegisterPage}
                                value='Register'
                            >
                            </a>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
