import React from 'react';
import '../App.css'; // Import your CSS styles
import Banner from '../components/Banner';
import Output from '../components/Conferences/Outputs';
import Footer from '../components/Footer';
import Header from '../components/Header';
function ConferencesOutput() {
    return (
        <>
            <Header />
            <div className="secondary-Background-color">
                <Banner PageName="Conferences Output" Category="" /> {/* This is the correct way to pass a prop */}
                <div className='py-5'>
                    <Output />
                </div>
            </div>
            <Footer />
        </>
    );
}
export default ConferencesOutput;