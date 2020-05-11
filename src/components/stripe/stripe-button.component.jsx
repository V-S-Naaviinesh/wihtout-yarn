import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const pulishableKey = 'pk_test_YKBGXRgHmMmGFfPfck03L3ve0032aM9OKk';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return(
        <StripeCheckout
        label='Pay Now'
        name= 'Pakaian Sdn.Bhd'
        billingAddress
        shippingAddress
        image='https://sendeyo.com/up/d/f3eb2117da'
        currency='MYR'
        description={`Your total is RM${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={pulishableKey}

        />
    )
}
export default StripeCheckoutButton;