import { useState, useEffect } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useNavigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

import CheckoutForm from '../components/checkoutform';
import Nav from '../components/nav';
import Footer from '../components/footer';
import '../assets/style/App.css';
import logo from '../assets/images/logo.png';
import { baseUrl } from '../App';

const PUBLIC_KEY = "pk_test_51Kv1hhGrAkA0etTmJUMq9sMFXMQbLKpyr0FaJnqDDhP75jFC5xn3RsWk3yKrA1wAdMgqR6PD3lj5iLDqloeQQUiO00OpnsEM5n"

const stripePromise = loadStripe(PUBLIC_KEY);

function Stripe() {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true);
    const [secret, setSecret] = useState('')
    const [error, setError] = useState('')


    // const response = fetch('http://127.0.0.1:3001/secret').then(async (response) => {
    //     const CLIENT_SECRET = await response.json();
    // });
    const logoOrder = JSON.parse(sessionStorage.getItem('logoOrder')) ?? null;
    const isChecked = sessionStorage.getItem('logoExtra')

    const handleInitiateTransaction = async ()=>{
            try{
                const {error: backendError, data:{clientSecret}} = await fetch(`${baseUrl}/order_payment`,{
                        method:'POST',
                        headers:{
                            'Content-type':'application/json',
                        },
                        body:JSON.stringify({
                            name: logoOrder && `${logoOrder.logo} - (Font ${sessionStorage.getItem('selectedFont')})` ,
                            tagline: logoOrder && logoOrder.tag,
                            email: logoOrder && logoOrder.email,
                            amount: isChecked? 65 : 50,
                            phone: logoOrder && logoOrder.phone,
                            email_confirmation: logoOrder && logoOrder.email
                        })
                    }).then(res=>res.json())
                    clientSecret && setSecret(clientSecret)
            }catch(error){
                setError(error.message)
            }

    }

    const options = {
        // passing the client secret obtained in step 2
        clientSecret: secret,
        // Fully customizable with appearance API.
        appearance: {/*...*/ },
    };

    useEffect(()=>{
        handleInitiateTransaction()
    },[])

    if(!secret && !error){
        return <h3 style={{marginTop:32,textAlign:'center'}}>
            Loading, please wait... <Spinner animation="border" /></h3>
    }



    return <div className='App'>
        <header className="App-header">
            <Nav logo={logo} />
        </header>

        <section className='mt-5 mb-5' style={{ minHeight: '75vh' }}>
            <div className='container'>
                <br />
                {error && <div className='alert alert-danger mb-3'><div className='container'>{error}</div></div>}

                <div className='row justify-content-md-center'>
                    <div className='col-md-5'>
                        <div className='mt-5' style={{ padding: '20px', borderRaius: '9px', boxShadow: "0px 0px 40px rgba(239, 240, 241, 0.7)" }}>
                            <h1 style={{ fontWeight: '700', fontSize: '36px', lineHeight: '96.4px' }} className="text-center">Make Payment</h1>

                            <Elements stripe={stripePromise} options={options}>
                                <CheckoutForm />
                            </Elements>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Footer />
    </div>;
}

export default Stripe;