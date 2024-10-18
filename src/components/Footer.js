import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../App.css';

function Footer() {
    return (
        <div>
            {/* Links and Contact Section */}
            <div className="container-fluid bg-dark text-secondary p-5">
                <div className="row g-5">
                    {/* Quick Links */}
                    <div className="col-lg-6 col-md-6 text-center">
                        <h3 className="text-white text-center mb-4">Quick Links</h3>
                        <div className="d-flex justify-content-center flex-wrap">
                            <Link className="text-secondary mx-2" to="/">Home</Link>
                            <Link className="text-secondary mx-2" to="/knowledge-hub/front-office">Knowledge Hub</Link>
                            <Link className="text-secondary mx-2" to="/conferences-output">Conferences Output</Link>
                            <Link className="text-secondary mx-2" to="/aiesec-shop">AIESEC Shop</Link>
                            <Link className="text-secondary mx-2" to="/contact">Contact</Link>
                        </div>
                    </div>

                    {/* Get In Touch */}
                    <div className="col-lg-4 col-md-6">
                        <p className="mb-2 text-justify">This site is for internal use only.
                            If you want to learn more about our products and services, refer to our website: <a className="text-secondary" href="https://aiesec.org.tn" target="_blank" rel="noopener noreferrer">aiesec.org.tn</a>.
                            <br />
                            If you have any inputs to improve or fix the HUB, please send an email to <a className="text-secondary" href="mailto:baya.jribi@aiesec.net">baya.jribi@aiesec.net</a>
                        </p>
                    </div>
                </div>
            </div>

            {/* Footer Bottom Section */}
            <div className="container-fluid bg-dark text-secondary text-center border-top py-4 px-5" style={{ borderColor: 'rgba(255, 255, 255, .1)' }}>
                <p className="m-0">&copy; <Link className="text-secondary border-bottom" to="#">LC Sfax Hub 2024</Link>. Developed by <a className="text-secondary border-bottom" href="https://www.linkedin.com/in/baya-jribi/" target="_blank" rel="noopener noreferrer">Baya Jribi</a></p>
            </div>
        </div>
    );
}

export default Footer;
