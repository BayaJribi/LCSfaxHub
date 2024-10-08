import React from 'react';
import '../App.css'; // Import your CSS styles
import BD from '../components/knowledge/BackOffice/BDEWA';
import TM from '../components/knowledge/BackOffice/TMMXP';
import FnL from '../components/knowledge/BackOffice/FnL';
import IM from '../components/knowledge/BackOffice/IM';
import Banner from '../components/Banner';  // Import the Banner component

function BackOffice() {
    return (
        <div className="secondary-Background-color">
        <Banner PageName="Back Office" Category="Knowledge Hub > "/> {/* This is the correct way to pass a prop */}
<div className='py-5'>

        <FnL/>
        <TM/>
        <BD/>
        <IM/>
        
</div>
        </div>
    );
}
export default BackOffice;