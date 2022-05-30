import Hero from '../components/hero';
import Nav from '../components/nav';
import UspSection from '../components/usp';
import FrameSection from '../components/designs'
import Footer from '../components/footer';

// assets

// style
import '../assets/style/App.css';

// images
import logo from '../assets/images/logo.png';
import section1 from '../assets/images/section1.png';
import signature from '../assets/images/usage/imgbtnright.png';
import sample1 from '../assets/images/usage/sample1.png';
import sample2 from '../assets/images/usage/sample2.png';
import sample3 from '../assets/images/usage/sample3.png';
import shirt1 from '../assets/images/usage/shirt1.png';
import shirt2 from '../assets/images/usage/imgtopright.png';
import footBanner from '../assets/images/banner-foot.png';
import CircularBtn from '../components/circularBtn';
export default function Index() {
    return (
        <div className="App">
            <header className="App-header">
                <Nav logo={logo} />
                <Hero />
            </header>
            <section style={{ padding: '100px 0px' }}>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-md-5'>
                            <img src={section1} className="img-fluid" alt="" />
                        </div>
                        <div className='col-md-7'>
                            <h1 style={{ fontWeight: '700', fontSize: '48px', lineHeight: '60px' }}>Rebrand Yourself, Your Profession, Your Business</h1>
                            <article style={{ fontWeight: '400', fontSize: '18px', lineHeight: '40px' }}>
                                <p>Rebranding is done by smart professionals who understand that design can make or break a company.</p>
                                <p>Our handcrafted calligraphic distinctive logo is precisely what you need right now. This will improve your image, brand, and business by showcasing your passion or any other significant feature.</p>
                                <p>In the minds of your followers, customers, competitors, and the general public, create a brand and a distinct identity.</p>
                                <p>A generic logo, such as one generated from an internet logo generator, will harm your business.</p>
                                <p>Now is the time to get your one-of-a-kind logo.</p>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
            <UspSection />
            <section className='mt-5'>
                <div className='container'>
                    <h1 style={{ fontWeight: '700', fontSize: '48px', lineHeight: '96px' }} className="text-center">Creating a logo #Superfast!!!</h1>
                    <h2 style={{ fontWeight: '700', fontSize: '24px', lineHeight: '29.3px' }} className="text-center">With 3 steps you can order your handcrafted calligraphic logo</h2>

                    <div className='row mt-3 mb-3'>
                        <div className='col-md-4'>
                            <h1 style={{ fontWeight: '700', fontSize: '48px', lineHeight: '96px' }}>1.</h1>
                            <p style={{ fontWeight: '700', fontSize: '18px', lineHeight: '20px' }}>Fill your logo details</p>
                        </div>
                        <div className='col-md-4'>
                            <h1 style={{ fontWeight: '700', fontSize: '48px', lineHeight: '96px' }}>2.</h1>
                            <p style={{ fontWeight: '700', fontSize: '18px', lineHeight: '20px' }}>Enter your email</p>
                        </div>
                        <div className='col-md-4'>
                            <h1 style={{ fontWeight: '700', fontSize: '48px', lineHeight: '96px' }}>3.</h1>
                            <p style={{ fontWeight: '700', fontSize: '18px', lineHeight: '20px' }}>Make payment and wait for your logo</p>
                        </div>
                    </div>

                    <CircularBtn text='Order one now' link='/order-logo' />
                </div>

            </section>

            <FrameSection />

            <section className='mt-5'>
                <div className='container'>
                    <h1 style={{ fontWeight: '700', fontSize: '48px', lineHeight: '96px' }}>Using Your Signature Logo</h1>
                   

                    <div className='row align-items-start'>
                    <article className="mb-5">
                                <p>Start you business without any hassel, just order you unique logo and start the journey.</p>
                                <p>You logo is applicable in so many ways.</p>
                                <p>Here are some mockups of what you can do with your crafted unique logo.</p>
                                <p>Your imagination is endless, let it reflect on your logo. . .</p>
                            </article>
                    <div className='col-md-8'>
                   
                            <div className='row '>
                                <div className='col-6'>
                                    <img src={sample2} className="img-fluid" />
                                </div>
                                <div className='col-6'>
                                    <img src={sample1} className="img-fluid" />
                                </div>
                            </div>
                            <img src={sample3} className="img-fluid mt-3" />
                            <img src={shirt1} className="img-fluid mt-3" />
                    </div>

                        <div className='col-md-4'>
                            <div className='row align-items-start'>
                                <div className='row mb-5'>
                                    <img src={shirt2} className="img-fluid" />
                                </div>
                                <div className='row mb-5'>
                                    <img src={signature} className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='mt-5'>
                <div className='container'>
                    <div className='hero' style={{ padding: '50px', width: '90%', margin: 'auto', borderRadius: '0px 0px 25px 25px' }}>
                        <div className='container text-center'>
                            <div className='row align-items-center text-light'>

                                <div className='col-md-9'>
                                    <h1 style={{ fontWeight: '700', fontSize: '48px', lineHeight: '57.6px' }}>
                                        Now you are here, it's time to order your logo
                                    </h1>

                                    <div className='row mt-5'>
                                        <div className='col-md'>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked />
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    3 Days Delivery
                                                </label>
                                            </div>
                                        </div>
                                        <div className='col-md'>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked />
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    Uniqueness
                                                </label>
                                            </div>
                                        </div>
                                        <div className='col-md'>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked />
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    3 Free Reviews
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-3'>
                                    <h1 style={{ fontWeight: '700', fontSize: '64px', lineHeight: '76.8px' }}>£50</h1>
                                    <CircularBtn text='View more designs' link='/gallery' />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='mt-5'>
                <div className='container'>
                    <img src={footBanner} className="img-fluid" />
                </div>
            </section>

            <Footer />
        </div>
    );
}