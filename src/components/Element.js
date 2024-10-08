// src/components/Element.js
import React from 'react';
import '../App.css'; // Import your CSS styles

function Element({ pdfUrl, pdfImage, title, category, Owner, Image }) {
    const openPdf = () => {
        window.open(pdfUrl, '_blank'); // Opens PDF in a new tab
    };


    return (
        <div className="col-xl-4 col-lg-12 col-md-6">
            <div className="blog-item">

                {Image && (
                    <div className="position-relative overflow-hidden">
                        <img className="img-fluid" src={`/images/${Image}`} alt={title} />
                    </div>
                )}

                <div className="main-Background-color d-flex">
                    <div className="d-flex flex-column justify-content-center py-3 px-4">
                        <div className="d-flex mb-2">
                            {/* Only display the Owner if it exists */}
                            {Owner && (
                                <small className="text-uppercase me-3 secondary-text-color">
                                    <i className="bi bi-person me-2"></i>{Owner}
                                </small>
                            )}
                            <small className="text-uppercase me-3 secondary-text-color">
                                <i className="bi bi-bookmarks me-2"></i>{category}
                            </small>
                        </div>
                        <a className="secondary-text-color h4" href={pdfUrl} onClick={(e) => { e.preventDefault(); openPdf(); }}>
                            {title}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Element;
