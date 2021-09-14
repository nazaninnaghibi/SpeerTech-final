import React from 'react';
import concertImg from '../img/concert.jpg';
import './payment.scss';


 const Payment = () => {
    return (
        <>
        <div class="wrapper">
        <div class="checkout_wrapper">
          <div class="product_info">
            <img src={concertImg} alt="concert"/>
            <div class="content">
              <h3>Billie Eilish <br/>Tickets</h3>
              <p>$1000</p>
            </div>
          </div>
          <div class="checkout_form">
            <p>Payment Section</p>
            <div class="details">
              <div class="section">
                <input type="text" placeholder="Card Number"/>
              </div>
              <div class="section">
                <input type="text" placeholder="Cardholder Name"/>
              </div>
              <div class="section last_section">
                <div class="item">
                  <input type="text" placeholder="Expiry Date"/>
                </div>
                <div class="item">
                  <input type="text" placeholder="CVV"/>
                </div>
              </div>
              
              <div class="btn">
                <a href="#">Pay</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    )
}

export default Payment;