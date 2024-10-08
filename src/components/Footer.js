import React from 'react';
import '../App.css';

function Footer() {
    return (
        <div>
            {/* Links and Contact Section */}
            <div className="container-fluid bg-dark text-secondary  p-5">
                <div className="row g-5">
                    {/* Quick Links */}
                    <div className="col-lg-6 col-md-6 text-center">
                        <h3 className="text-white text-center mb-4">Quick Links</h3>
                        <div className="d-flex justify-content-center flex-wrap">
                            <a className="text-secondary mx-2" href="#">Home</a>
                            <a className="text-secondary mx-2" href="#">Knowledge Hub</a>
                            <a className="text-secondary mx-2" href="#">Conferences Output</a>
                            <a className="text-secondary mx-2" href="#">AIESEC Shop</a>
                            <a className="text-secondary mx-2" href="#">Contact</a>
                        </div>
                    </div>



                    {/* Get In Touch */}
                    <div className="col-lg-4 col-md-6">
                        {/* <h3 className="text-white mb-4">Get In Touch</h3> */}
                        <p className="mb-2 text-justify">This site is for internal use only.
                            If you want to learn more about our products and services, refer to our website: aiesec.org.tn .
                            <br />
                            If you have any inputs to improve or fix the HUB, please send an email to <a className="text-secondary" href="mailto:baya.jribi@aiesec.net">baya.jribi@aiesec.net</a></p>
                    </div>

                </div>
            </div>

            {/* Footer Bottom Section */}
            <div className="container-fluid bg-dark text-secondary text-center border-top py-4 px-5" style={{ borderColor: 'rgba(255, 255, 255, .1)' }}>
                <p className="m-0">&copy; <a className="text-secondary border-bottom" href="#">LC Sfax Hub 2024 </a>. Developed by <a className="text-secondary border-bottom" href="https://www.linkedin.com/in/baya-jribi/" target="_blank">Baya Jribi    </a></p>
            </div>
        </div>
    );
}

export default Footer;
