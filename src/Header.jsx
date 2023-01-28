import 'bootstrap/dist/css/bootstrap.min.css';
import logo_h from './assets/logo-h.svg';

function Header() {
    return (
        <header className="p-3 text-bg-dark">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a href="#" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                    <img src={logo_h}/>
                    </a>

                <ul className="nav col-12 col-lg-auto mx-lg-auto mb-2 justify-content-center mb-md-0">
                    <li><a href="#" className="nav-link px-2 text-secondary">Home</a></li>
                    <li><a href="#" className="nav-link px-2 text-white">How it Works</a></li>
                    <li><a href="#" className="nav-link px-2 text-white">FAQs</a></li>
                    <li><a href="#" className="nav-link px-2 text-white">About Developers</a></li>
                </ul>


                <div className="text-end">
                    <button type="button" className="btn btn-lg btn-outline-light">Donate to Support the Developers</button>
                </div>
                </div>
            </div>
        </header>
    )
}

export default Header;