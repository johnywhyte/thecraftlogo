// social
import linkedIn from '../assets/images/social/linkedin.png';
import twitter from '../assets/images/social/twitter.png';
import facebook from '../assets/images/social/facebook.png';

function Footer() {
    return <>
        <footer className='bg-dark text-light' style={{ padding: '25px' }}>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-md-4'>
                        <h1 style={{ fontWeight: '700', fontSize: '24px', lineHeight: '46px' }}>THE CRAFT LOGO</h1>
                        <h4 style={{ fontWeight: '700', fontSize: '18px', lineHeight: '28px', color: 'rgba(255, 255, 255, 0.5)' }}>This is Art, This is Craft</h4>
                    </div>
                    <div className='col-md'>
                        <div className='row'>
                            <div className='col-md mb-1'>
                                <a href="/" style={{ padding: '10px', textDecoration: 'none', color: "#fff", fontWeight: '700', fontSize: '18px', lineHeight: '20px' }}>Home</a>
                            </div>
                            <div className='col-md mb-1'>
                                <a href="/gallery" style={{ padding: '10px', textDecoration: 'none', color: "#fff", fontWeight: '700', fontSize: '18px', lineHeight: '20px' }}>Gallery</a>
                            </div>
                            {/* <div className='col-md mb-1'>
                                <a href="" style={{ padding: '10px', textDecoration: 'none', color: "#fff", fontWeight: '700', fontSize: '18px', lineHeight: '20px' }}>About</a>
                            </div> */}
                            <div className='col-md mb-1'>
                                <a href="" style={{ padding: '10px', textDecoration: 'none', color: "#fff", fontWeight: '700', fontSize: '18px', lineHeight: '20px' }}>Contact</a>
                                <p>support@thecraftlogo.com</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-2'>
                        <div className='row'>
                            <div className='col'>
                                <img src={twitter} className="img-fluid" />
                            </div>
                            <div className='col'>
                                <img src={facebook} className="img-fluid" />
                            </div>
                            <div className='col'>
                                <img src={linkedIn} className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>;
}

export default Footer;