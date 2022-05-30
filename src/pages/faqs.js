import Nav from '../components/nav';
import Footer from '../components/footer';
import '../assets/style/App.css';
import logo from '../assets/images/logo.png';
import sample1 from '../assets/images/usage/sample1.png';
import sample2 from '../assets/images/usage/sample2.png';
import CircularBtn from '../components/circularBtn';

function Faqs() {

    const faqs = [
        {
            question: 'What happens if i dont like my logo?',
            answer: 'You can request up to 3 request and we believe this will be sufficient enough to get the best design for your handcrafted calligraphic logo'
        },
        {
            question: 'Can I order for a physical business card?',
            answer: 'At this moment we can only provide you with a business card design template with you can further customize if needed and send it to the printer for final output.'
        },
        {
            question: 'How do I place my signature on my picture?',
            answer: 'This can be done by using any photo editing application. Open your picture with the application and insert your signature logo, shrink and position it where fited.'
        },
        {
            question: 'Can i use my brand name instead of my name?',
            answer: 'Our design is not only focused on your name signature, you can request for a brand logo, company logo, slogans, tag lines, content writing, etc.'
        },
    ];

    const faqs2 = [
        {
            question: 'Can I edit my logo?',
            answer: 'Yes you can because your logo will be share in different formats including .ai format '
        },
        {
            question: 'How long will it take to get my order',
            answer: 'Your order will arrive in your email within 3 working days. If you didn\'t receive it after 3 working days please contact us'
        },
        {
            question: 'How unique is my logo?',
            answer: 'Your logo is unique because it is handcrafted. It is not possible for an artist to write the same signature twice but the similarity percentage is approximately 98%'
        },
        {
            question: 'I want my order urgently',
            answer: 'With an extra amount you can get your logo within 24hour'
        },
    ];

    return <div className='App'>
        <header className="App-header">
            <Nav logo={logo} />
        </header>

        <section className='mt-5 mb-5' style={{ minHeight: '75vh' }}>
            <div className='container'>
                <br /><br />

                <h1 style={{ fontWeight: '700', fontSize: '48px', lineHeight: '57.6px' }}>Frequently Asked Questions</h1>
                <p style={{ fontWeight: '400', fontSize: '18px', lineHeight: '25px' }}>You can get answers to most of the asked questions here and we hope this will be sufficient enough to make you complete your order and rebrand yourself. </p>
                <div className='row mt-5'>

                    <div className='col-md-6'>
                        <h1 style={{ fontWeight: '700', fontSize: '24px', lineHeight: '27.6px' }} className="mb-4">Buying Product</h1>

                        {
                            faqs.map((faq, key) => {
                                return <>
                                    <p className='mt-5'><a data-toggle="collapse" href={`#collapseExample${key}`} role="button" aria-expanded="false" aria-controls={`collapseExample${key}`} style={{ fontWeight: '400', fontSize: '18px', lineHeight: '25px', textDecoration: 'none', color: '#000' }}>
                                        {faq.question}
                                        <hr />
                                    </a></p>
                                    <div className="collapse mb-5" id={`collapseExample${key}`}>
                                        <div className="text-justified">
                                            {faq.answer}
                                        </div>
                                    </div>
                                </>
                            })
                        }
                    </div>

                    <div className='col-md-6'>
                        <h1 style={{ fontWeight: '700', fontSize: '24px', lineHeight: '27.6px' }} className="mb-4">Installation</h1>

                        {
                            faqs2.map((faq, key) => {
                                return <>
                                    <p className='mt-5'><a data-toggle="collapse" href={`#collapseExample${key}-2`} role="button" aria-expanded="false" aria-controls={`collapseExample${key}-2`} style={{ fontWeight: '400', fontSize: '18px', lineHeight: '25px', textDecoration: 'none', color: '#000' }}>
                                        {faq.question}
                                        <hr />
                                    </a></p>
                                    <div className="collapse mb-5" id={`collapseExample${key}-2`}>
                                        <div className="text-justified">
                                            {faq.answer}
                                        </div>
                                    </div>
                                </>
                            })
                        }
                    </div>

                </div>
            </div>
        </section>

        <Footer />
    </div>;
}


export default Faqs;