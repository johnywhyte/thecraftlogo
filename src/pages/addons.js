import Nav from '../components/nav';
import Footer from '../components/footer';
import '../assets/style/App.css';
import logo from '../assets/images/logo.png';
import sample1 from '../assets/images/usage/sample1.png';
import sample2 from '../assets/images/usage/sample2.png';
import CircularBtn from '../components/circularBtn';

function Addons() {
    return <div className='App'>
        <header className="App-header">
            <Nav logo={logo} />
        </header>

        <section className='mt-5 mb-5' style={{minHeight: '75vh'}}>
            <div className='container'>
                <br />
                <div className='row justify-content-md-center'>
                    <div className='col-md-8'>
                        <h1 style={{ fontWeight: '700', fontSize: '36px', lineHeight: '41.4px' }} className="text-center">Input your details</h1>
                        <h2 style={{ fontWeight: '500', fontSize: '18px', lineHeight: '21.09px' }} className="text-center">Check our FAQ</h2>
                        <div className='' style={{ padding: '20px', borderRaius: '9px', boxShadow: "0px 0px 40px rgba(239, 240, 241, 0.7)" }}>
                            <div className='row align-items-center'>
                                <div className='col-md-2'>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label class="form-check-label" for="flexCheckDefault">
                                        </label>
                                    </div>
                                </div>
                                <div className='col-md-5'>
                                    <img src={sample2} className="img-fluid" />
                                </div>
                                <div className='col-md-5'>
                                    <img src={sample1} className="img-fluid" />
                                </div>
                            </div>
                        </div>
                        <p className='text-center' style={{ fontWeight: '700', fontSize: '15px', lineHeight: '46px', color: 'rgba(0, 0, 0, 0.5)'}}>This is optional, you can proceed to review the order</p>
                        <CircularBtn text="Review your order" link="/review-order" />
                    </div>
                </div>
            </div>
        </section>

        <Footer />
    </div>;
}


export default Addons;