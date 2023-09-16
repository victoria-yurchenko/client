import React, { useState } from 'react'

export default function Registration() {

  const [requestStatus, setRequestStatus] = useState(200);

  const validate = (sender, inputName, rule) => {
    const inputValue = document.getElementsByName(inputName)[0].value;
    console.log(rule.exec(inputValue));
    // if(rule.test(rule))
    // sender.appendChild(h6);
  }

  const handleLogin = (event) => {
    event.preventDefault();
    window.location.replace(`http://localhost:3000/login`);
  };

  const handleSubmit = (event) => {

    event.preventDefault();

    const _password = document.getElementById('password').value;
    const _firstName = document.getElementById('first-name').value;
    const _lastName = document.getElementById('last-name').value;
    const _email = document.getElementById('input-email').value;
    const _address = document.getElementById('address').value;
    const _city = document.getElementById('city').value;
    const _zipCode = document.getElementById('zip-code').value;
    const _phone = document.getElementById('tel').value;

    let isError = false;
    let error = document.createElement('div');

    if (_password.length < 7 ) {
      isError = true;
      error.innerHTML = 'Password must be at least 7 characters long';
      document.getElementById('validation-error-text').appendChild(error);
    }

    if (
      !_firstName ||
      !_lastName ||
      !_lastName ||
      !_email ||
      !_address ||
      !_city ||
      !_zipCode ||
      !_phone
    ) {
      error.innerHTML = 'All fields are required';
      document.getElementById('validation-error-text').appendChild(error);
    }

    if (!isError) {
      let user = {
        password: _password,
        email: _email,
        firstName: _firstName,
        lastName: _lastName,
        address: _address,
        city: _city,
        zipCode: _zipCode,
        phone: _phone
      };

      const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify(user)
      };
      fetch('http://localhost:5089/api/users/register', options)
        .then(response => {
          console.log(response.status);
          setRequestStatus(response.status);
        })
        .catch(error => console.log(error));

      window.location.replace(`http://localhost:3000/login`);
    }


  };

  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="billing-details">
              <div className="section-title">
                <h3 className="title">Billing address</h3>
              </div>
              <div className="form-group m-2">
                <input id='input-email' className="input" type="email" name="email" placeholder="Email" />
              </div>
              <div className="form-group m-2">
                <input id='password' className="input" type="password" name="password" placeholder="Password" />
                <p id='input-validation'></p>
              </div>
              <div className="form-group m-2">
                <input id='first-name' className="input" type="text" name="first-name" placeholder="First Name" />
              </div>
              <div className="form-group m-2">
                <input id='last-name' className="input" type="text" name="last-name" placeholder="Last Name" />
              </div>
              <div className="form-group m-2">
                <input id='address' className="input" type="text" name="address" placeholder="Address" />
              </div>
              <div className="form-group m-2">
                <input id='city' className="input" type="text" name="city" placeholder="City" />
              </div>
              <div className="form-group m-2">
                <input id='zip-code' className="input" type="text" name="zip-code" placeholder="ZIP Code" />
              </div>
              <div className="form-group m-2">
                <input id='tel' className="input" type="tel" name="tel" placeholder="Telephone" />
              </div>
              <div className="form-group m-2">
                <input className="input" type="submit" value='Register' onClick={handleSubmit}
                  style={{
                    textDecoration: 'none',
                    backgroundColor: '#D10024',
                    color: 'white'
                  }}
                />
              </div>
              <button className='input btn btn-sm'
                style={{ marginTop: '40px', color: 'black', border: '1px solid black', borderRadius: '5px' }}
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
          </div>
          <div className='col-5' id='validation-error-text'>

          </div>
        </div>
      </div>
    </div>

  )
}
