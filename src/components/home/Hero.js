import React from 'react';
import '../../App.css';  // Your styles

function Hero() {
    return (
        <div className="container-fluid p-0">
            <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="w-100" src="/images/LC_Hero_1.jpg" alt="LC Hero" />
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div className="p-3">
                                <h5 className="text-white text-uppercase">Welcome</h5>
                                <h1 className="display-1 text-white mb-md-4">To LC Sfax Hub</h1>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="w-100" src="/images/LC_Hero_1.jpg" alt="LC Hero" />
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div className="p-3">
                                <h5 className="text-white text-uppercase">Scroll down</h5>
                                <h1 className="display-1 text-white mb-md-4">To dive into Knowledge</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Hero;
