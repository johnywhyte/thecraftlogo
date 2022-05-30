import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Nav from '../components/nav';
import Footer from '../components/footer';
import appLogo from '../assets/images/logo.png';
import '../assets/style/App.css';


function Order() {
    const [orderDetails, setOrderDetails] = useState();

    useEffect(() => {
        setOrderDetails(JSON.parse(sessionStorage.getItem('logoOrder')));
    }, [])

    const [logo, setLogo] = useState();
    const [tag, setTag] = useState();
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();
    const [confirm, setConfirm] = useState();
    const [errorMessage, setErrorMessage] = useState();
    const [searchParams, setSearchParams] = useSearchParams();

    const handleSubmit = (event) => {
        event.preventDefault();

        if (email === confirm) {
            sessionStorage.setItem('logoOrder', JSON.stringify({
                logo: searchParams.get("name") || logo,
                tag: tag,
                phone: phone,
                email: email,
            }));

            document.location.href = '/addons';

        } else {
            setErrorMessage('Email confirmation incorrect');
        }
    }

    return <div className='App'>
        <header className="App-header">
            <Nav logo={appLogo} />
        </header>

        <section className='mt-5 mb-5'>
            <div className='container'>
                <br />
                <div className='row justify-content-md-center'>
                    <div className='col-md-5'>
                        <div className='' style={{ padding: '20px', borderRaius: '9px', boxShadow: "0px 0px 40px rgba(239, 240, 241, 0.7)" }}>
                            <h1 style={{ fontWeight: '700', fontSize: '36px', lineHeight: '41.4px' }} className="text-center">Input your details</h1>
                            <h2 style={{ fontWeight: '500', fontSize: '18px', lineHeight: '21.09px' }} className="text-center">Check our FAQ</h2>
                            <form onSubmit={handleSubmit}>

                                {errorMessage && <div className='alert alert-danger mb-3'><div className='container'>{errorMessage}</div></div>}
                                {
                                    searchParams.get("edit") && orderDetails ? <>

                                        <InputElement text="Logo name" value={orderDetails.logo} todo={setLogo} />
                                        <InputElement text="Logo tagline" todo={setTag} value={orderDetails.tag} />
                                        <InputElement text="Phone no." todo={setPhone} value={orderDetails.phone} />
                                        <InputElement text="Email" todo={setEmail} value={orderDetails.email} />
                                        <InputElement text="Confirm email" todo={setConfirm} />

                                    </> : <>
                                        <InputElement text="Logo name" value={searchParams.get("name")} todo={setLogo} />
                                        <InputElement text="Logo tagline" todo={setTag} />
                                        <InputElement text="Phone no." todo={setPhone} />
                                        <InputElement text="Email" todo={setEmail} />
                                        <InputElement text="Confirm email" todo={setConfirm} />
                                    </>
                                }

                                <center>
                                    <button style={{ padding: "13px", borderRadius: '100px' }} className="btn btn-lg btn-dark">Proceed &raquo;</button>
                                </center>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Footer />
    </div>;
}

function InputElement(props) {
    return <div className="form-group">
        <label style={{ fontWeight: '700', fontSize: '18px', lineHeight: '20.7px', padding: '10px 0px' }}>{props.text}</label>
        <input
            type="text"
            className="form-control mb-3"
            placeholder=""
            value={props.value}
            style={{
                backgroundColor: '#F5F8FA', padding: '10px', border: 0,
            }}
            onChange={(e) => props.todo(e.target.value)}
            autoComplete="false"
            autoCorrect='false'
            required />
    </div>;
}

export default Order;