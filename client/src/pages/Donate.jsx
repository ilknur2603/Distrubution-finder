import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../components/CardCheckOut";
import CardSaved from "../components/CardSaved";
import StripeCheckout from 'react-stripe-checkout';
import SignUpForm from "../components/SignUpForm";


export default function Donation() {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch("/config").then(async (r) => {
      const { publishableKey } = await r.json();

      setStripePromise(loadStripe(publishableKey));
    });
  }, []);

  useEffect(() => {
    fetch("/create-payment-intent", {
      method: "POST",
      body: JSON.stringify({}),
    }).then(async (r) => {
      const { clientSecret } = await r.json();

      setClientSecret(clientSecret);
      return;
    });
  }, []);

  return (
    <section class="py-10 bg-gray-50 sm:py-16 lg:py-24">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">How much would you like to donate?</h2>
        <div>
          <form className="">
            <div>
              <div className="m-2 block">
                <label htmlFor="donation" value="Donation amount" />
              </div>
              <input
                className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-cyan-600 caret-cyan-600"
                id="donation"
                type="number"
                name="price"
                placeholder="$50.00"
                required={true}
              />
            </div>
            <div className="mt-4">
                  <button type="submit" class="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-cyan-600 border border-transparent rounded-md focus:outline-none hover:bg-cyan-700 focus:bg-cyan-700">
                      Donate
                  </button>
            </div>
          </form>
        </div>
        <div>
          <CardSaved />
        </div>
      </div>
      {stripePromise && clientSecret && (
        <StripeCheckout stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </StripeCheckout>
      )}
    </div>
    </section>
  );
}
    
