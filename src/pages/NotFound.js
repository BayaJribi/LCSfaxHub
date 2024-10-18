import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import { Link } from 'react-router-dom'; // Import Link for navigation

const NotFound = () => {
    return (
        <>
        <Header/>
        <div className="container text-center p-5 mt-5 mb-5">
            <h1 className="display-1">404</h1>
            <h2>Page Not Found</h2>
            <p>The page you are looking for does not exist.</p>
            {/* <Link to="/" className="btn btn-primary">Go to Home</Link> */}
        </div>
        <Footer/>
        </>
    );
};

export default NotFound;
