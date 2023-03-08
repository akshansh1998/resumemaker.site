// import 'bootstrap/dist/css/bootstrap.min.css';
import logo_h from './assets/logo-h.svg';

function Footer() {
    return (
        <div className="bg-light pt-5">
            <footer className="container py-2">
                <div className="row">
                    <div className="col-12 col-md">
                        <img src={logo_h} alt="Resume Maker" />
                        <small className="d-block mb-3 text-muted">&copy; 2019</small>
                    </div>

                    <div className="col-6 col-md">
                        <h5>How to Use</h5>
                        <ul className="text-small pl-3">
                            <li><a className="text-muted" href="#">Choose Template</a></li>
                            <li><a className="text-muted" href="#">Enter Details</a></li>
                            <li><a className="text-muted" href="#">Click Download/Print</a></li>
                            <li><a className="text-muted" href="#">Press Ctrl + P </a></li>
                            <li><a className="text-muted" href="#">Either Print </a></li>
                            <li><a className="text-muted" href="#">Or Choose Save as PDF </a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5>Features</h5>
                        <ul className="pl-3 text-small">
                            <li><a className="text-muted" href="#">Simple Steps</a></li>
                            <li><a className="text-muted" href="#">No Signup Required</a></li>
                            <li><a className="text-muted" href="#">No Data is Stored</a></li>
                            <li><a className="text-muted" href="#">Everyone can Use</a></li>
                            <li><a className="text-muted" href="#">Safe and Secure</a></li>
                            <li><a className="text-muted" href="#">Print & Download</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5>Other Links</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="text-muted" href="/changelog.php">Changelog</a></li>
                            <li><a className="text-muted" href="/privacy-policy.php">Privacy Policy</a></li>
                            <li><a className="text-muted" href="/about.php">About</a></li>
                            <li><a className="text-muted" href="/contact.php">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5>About</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="text-muted" href="#">Team</a></li>
                            <li><a className="text-muted" href="#">Locations</a></li>
                            <li><a className="text-muted" href="#">Privacy</a></li>
                            <li><a className="text-muted" href="#">Terms</a></li>
                        </ul>
                    </div>
                </div>

                <p className="text-center py-3 border-top mt-5 mb-2">&copy; <a className="font-weight-bolder" href="#">ORM - Online Resume Maker</a> | Created with ❤ by <a className="font-weight-bolder" href=" https://drabdigital.com">DrabDigital </a> </p>


            </footer>

        </div>
    )
}

export default Footer;