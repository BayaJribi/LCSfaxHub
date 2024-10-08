import React from 'react';
import '../App.css'; // Import your CSS styles
import EST from '../components/knowledge/Applications/EST';
import MM from '../components/knowledge/Applications/MM';
import OCT from '../components/knowledge/Applications/OCT';
import Banner from '../components/Banner';
function Applications() {
    return (
        <div className="secondary-Background-color">
            <Banner PageName="Applications" Category="Knowledge Hub > " /> {/* This is the correct way to pass a prop */}
            <div className='py-5'>

                <OCT />
                <MM />
                <EST />

            </div>
        </div>
    );
}
export default Applications;