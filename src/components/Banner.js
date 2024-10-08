import React from 'react';
import '../App.css';

function Banner({ PageName, Category }) {
    return (
        <div className="container-fluid main-Background-color p-5">
            <div className="row">
                <div className="col-12 text-center">
                    <h1 className="display-4 text-white">{PageName}</h1>
                    {/* Use --secondary color for <a> tags */}
                    <a href="/" style={{ color: 'var(--secondary)' }}>Home {'> '}</a>
                    <a href="#" style={{ color: 'var(--secondary)' }}>{Category}{PageName}</a>
                </div>
            </div>
        </div>
    );
}

export default Banner;
