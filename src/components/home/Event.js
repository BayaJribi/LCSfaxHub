import React from 'react';
import '../../App.css';  // Your styles

function Event({ date, month, year, author, category, title, image }) {
    return (
        <div className="col-lg-4">
            <div className="blog-item">
                <div className="position-relative overflow-hidden">
                    {/* Apply medium-image class */}
                    <img className=" medium-image" src={`/images/${image}`} alt={title} />
                </div>
                <div className="bg-white d-flex">
                    <div className="flex-shrink-0 d-flex flex-column justify-content-center text-center main-Background-color text-white px-4">
                        <span>{date}</span>
                        <h5 className="text-uppercase m-0">{month}</h5>
                        <span>{year}</span>
                    </div>
                    <div className="d-flex flex-column justify-content-center py-3 px-4">
                        <div className="d-flex mb-2">
                            <small className="text-uppercase me-3"><i className="bi bi-person me-2"></i>{author}</small>
                            <small className="text-uppercase me-3"><i className="bi bi-bookmarks me-2"></i>{category}</small>
                        </div>
                        <a className="h4" href="/">{title}</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Event;
