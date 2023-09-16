import React from 'react'

export default function OrderAfterConfirm() {

  const handleSubmit = () => {
    window.location.replace(`http://localhost:3000/store`);
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
                  <h2>Your order is under confirmation</h2>
                  <h3>We will contact you as soon as possible!</h3>
                  <h4>Track your order: #{localStorage.getItem(`orderId`)}</h4>
                  <a
                    href="#"
                    type='submit'
                    className="primary-btn order-submit"
                    style={{ textDecoration: 'none', marginTop: '50px' }}
                    onClick={handleSubmit}
                  >
                    GOT IT!
                  </a>
                </div>
              </form>
          }
        </div>
      </div>
    </div>
  )
}
