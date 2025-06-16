import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import SetupForm from "./SetupForm"

const publicKey = import.meta.env.VITE_STRIPE_PUBLIC_KEY
// Make sure to call `loadStripe` outside of a component's render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(publicKey as string);


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