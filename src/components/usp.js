// icons
import heart from '../assets/icons/heart.png';
import flash from '../assets/icons/flash.png';
import security from '../assets/icons/security.png';
import truck from '../assets/icons/truck.png';
import shopping from '../assets/icons/shopping.png';
import filter from '../assets/icons/filter.png';

function Usp() {

    const usps = [
        {
            icon: heart,
            title: 'Uniqueness',
            text: 'Your signature logo is uniquely crafted to your specification and this makes it unique to just you and tailored to your need and business purpose.'
        },
        {
            icon: flash,
            title: 'Easy to Use',
            text: 'Your signature logo can be use across all forms of branding and design like your social media post, sovenirs, website logo, letter header, business card, etc'
        },
        {
            icon: filter,
            title: 'Professionalism',
            text: 'Your signature logo can be use across all forms of branding and design like your social media post, sovenirs, website logo, letter header, business card, etc'
        },
        {
            icon: security,
            title: 'Secure',
            text: 'All payment is collected through encypted payment gateway so you have nothing to worry about',
        },
        {
            icon: truck,
            title: 'Fast Delivery',
            text: 'In 3 working days your signature logo order will be delivered to you email'
        },
        {
            icon: shopping,
            title: '24/7 Shopping',
            text: 'You can order your signature  logo online anytime of the day.'
        }
    ];

    return (
        <section>
            <div className='container'>
                <center><h1 style={{ fontWeight: '700', fontSize: '48px', lineHeight: '96px' }}>Why Signature Logo?</h1></center>
                <div className='row mt-5'>
                    {
                        usps.map((value) => {
                            return <div className='col-md-4 mb-3'>
                                <div className='card' style={{ borderRadius: '25px', padding: '10px' }}>
                                    <div className='card-body'>
                                        <img src={value.icon} className="img-fluid mb-3" />
                                        <h1 style={{ fontWeight: '700', fontSize: '18px', lineHeight: '24px' }}>{value.title}</h1>
                                        <p style={{ fontWeight: '400', fontSize: '18px', lineHeight: '40px' }}>{value.text}</p>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </section>
    );
}
export default Usp;