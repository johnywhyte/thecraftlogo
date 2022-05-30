import 'bootstrap/dist/css/bootstrap.min.css';

function Nav(props) {

    const handleSubmit = (event) => {
        event.preventDefault();

        window.location.href = '/gallery';
    }

    return <nav className="navbar navbar-light navbar-expand-lg bg-light navbar-expand-lg justifty-content-between fixed-top">
        <div className='container'>
            <a
                className="navbar-brand"
                href="/"
                rel="noopener noreferrer"
            >
                <img src={props.logo} height={25} className="d-inline-block align-top" alt='brand-logo' />
            </a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">

                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link" style={{ fontWeight: '700', fontSize: '18px' }} href="/gallery">Gallery</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" style={{ fontWeight: '700', fontSize: '18px' }} href="/faqs">FAQs</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" style={{ fontWeight: '700', fontSize: '18px' }} href="/addons">Addons</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" style={{ fontWeight: '700', fontSize: '18px' }} href="/admin">Admin</a>
                    </li>
                </ul>

                <form onClick={handleSubmit} className="form-inline my-2 my-lg-0 ms-auto">
                    <button type="submit" className="btn btn-dark btn-lg " style={{ borderRadius: 50 }}>Order your Logo &raquo;</button>
                </form>

            </div>
        </div>
    </nav>;
}

export default Nav;