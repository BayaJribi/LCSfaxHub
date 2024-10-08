import React from 'react';
import '../App.css'; // Import your CSS styles
import OGV from '../components/knowledge/FrontOffice/OGV';
import OGT from '../components/knowledge/FrontOffice/OGT';
import IGV from '../components/knowledge/FrontOffice/IGV';
import MKT from '../components/knowledge/FrontOffice/MKT';
import Banner from '../components/Banner';  // Import the Banner component

function FrontOffice() {
    return (
        <div className="secondary-Background-color">
            {/* Include the Banner component and pass "Front Office" as the page name */}
            <Banner PageName="Front Office" Category="Knowledge Hub >" /> {/* This is the correct way to pass a prop */}
            <div className='py-5'>

                {/* Your other components */}
                <OGV />
                <OGT />
                <IGV />
                <MKT />
            </div>
        </div>
    );
}

export default FrontOffice;
