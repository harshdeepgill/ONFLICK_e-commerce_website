import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./Pages/PaymentPage";

const stripePromise = loadStripe("your-publishable-stripe-key");

function App() {
  return (
    <div className="App">
      <Elements stripe={stripePromise}>
        <PaymentForm />
      </Elements>
    </div>
  );
}

export default App;
