import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import SetupForm from "./SetupForm"

// Make sure to call `loadStripe` outside of a component's render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51R7GaAKTt4KB6Gxykv1ZJ3j8VqeEcLx1lpbfrb8XmzpRhzi7ljw0EpMBSR56ChCrQFIXS9nsPKUn9L0x7vXJH90R00EkcJodyl');


export default function PaymnentScreen({ clientSecret }: {
  clientSecret: string
}) {
  const options = {
    // passing the SetupIntent's client secret
    clientSecret: clientSecret,
    // Fully customizable with appearance API.
    appearance: {/*...*/},
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <SetupForm />
    </Elements>
  );
}