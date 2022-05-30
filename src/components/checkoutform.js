import { useState } from 'react';
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';

function CheckoutForm() {

    const stripe = useStripe();
    const elements = useElements();

    const [errorMessage, setErrorMessage] = useState(null);
    const [isCompleted, setIsCompleted] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (event) => {
        // We don't want to let default form submission happen here,
        // which would refresh the page.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }

        setLoading(true)

        const { error } = await stripe.confirmPayment({
            //`Elements` instance that was used to create the Payment Element
            elements,
            confirmParams: {
                // return_url: 'https://example.com/order/123/complete',
                return_url: 'https://craft-logo.herokuapp.com',
                
            },
            redirect: 'if_required'
        });


        if (error) {
            // This point will only be reached if there is an immediate error when
            // confirming the payment. Show error to your customer (for example, payment
            // details incomplete)
            setErrorMessage(error.message);
            setLoading(false)
        } else {
            setIsCompleted(true)
            setLoading(false)
            sessionStorage.removeItem('logoName')
            sessionStorage.removeItem('logoOrder')
            // Your customer will be redirected to your `return_url`. For some payment
            // methods like iDEAL, your customer will be redirected to an intermediate
            // site first to authorize the payment, then redirected to the `return_url`.
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Show messages to your customers */}
            {isCompleted && <div className='alert alert-success mb-3'>
                <div className='container'>
                    <h2>Payment Successful</h2>
                    <p>An order confirmaton email has been sent to your inbox</p>
                </div>
            </div>}

            {errorMessage && <div className='alert alert-danger mb-3'><div className='container'>{errorMessage}</div></div>}
            {!isCompleted &&
            <>
            <PaymentElement />
            <br />
            <center>
                <button disabled={!stripe} style={{ padding: "13px", borderRadius: '100px' }} className="btn btn-lg btn-dark">
                    {loading?'Loading...':'Confirm order'}
                </button>
            </center>
            </>
                }
        </form>
    );
};

export default CheckoutForm;