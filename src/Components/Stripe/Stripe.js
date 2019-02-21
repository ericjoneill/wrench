import React from 'react'
// import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

// import STRIPE_PUBLISHABLE from './constants/stripe';
// import PAYMENT_SERVER_URL from './constants/server';

const CURRENCY = 'USD';


const successPayment = data => { 
  alert('Payment Successful');
};

const errorPayment = data => {
  alert('Payment Error');
};

// const onToken = (amount, description) => token =>
//   axios.post(PAYMENT_SERVER_URL,
//     {
//       description,
//       source: token.id,
//       currency: CURRENCY,
//       amount: fromEuroToCent(amount)
//     })
//     .then(successPayment)
//     .catch(errorPayment);

const Checkout = ({ name, description, amount }) =>
  <StripeCheckout
    name='Krause E-Commerce'
    image=""
    description='Purchase everything in your cart.'
    amount={amount}
    // token={onToken(amount, description)}
    currency={CURRENCY}
    stripeKey={'pk_test_dJjVRLdf6PHtU9uso90p74cF'}
  />

export default Checkout;