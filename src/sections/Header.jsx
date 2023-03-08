import logo_h from '../assets/logo-h.svg';
import '../css/header.css'

function Header() {
    return (
        <header className="">
            <div className="container">
                <div id="logo">
                    <a href="/" className="">
                        <img src={logo_h} alt="Resume Maker Logo"/>
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header;