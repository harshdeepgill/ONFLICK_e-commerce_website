// PaymentForm.js



import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import styled from 'styled-components';
const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [paymentError, setPaymentError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const result = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (result.error) {
      setPaymentError(result.error.message);
    } else {
      // Handle the successful payment, e.g., send data to your server or redirect to a success page.
      console.log(result.paymentMethod);
    }
  };

  return (
    <DIV>
      <h2>Payment Page</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Card Details
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '16px',
                },
              },
            }}
          />
        </label>
        <button type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
      {paymentError && <div className="error">{paymentError}</div>}
    </DIV>
  );
};

export default PaymentForm;


const DIV = styled.div`

`