import React from 'react';
import '../App.css'; // Import your CSS styles
import Banner from '../components/Banner';  // Import the Banner component
import KnowledgeContainer from '../components/knowledge/KnowledgeContainer'; // Import the reusable component

function BackOffice() {
    return (
        <div className="secondary-Background-color">
            <Banner PageName="Back Office" Category="Knowledge Hub > " /> {/* This is the correct way to pass a prop */}
            <div className='py-5'>
                <KnowledgeContainer 
                    folderId="1u8jkrX57fNbPrpA50-xcOuHcAxTUL2by" 
                    categoryName="OGV" 
                    displayTitle="Outgoing Global Volenteer" 
                />
                <KnowledgeContainer 
                    folderId="1h6963Pd6iG_ct1QlkD3l0JmD-vGF3Lvb" 
                    categoryName="OGT" 
                    displayTitle="Outgoing Global Talent/Teaching" 
                />
                <KnowledgeContainer 
                    folderId="1Y09wpexRLjbxuRAedHkS4zZFO4-hy1Up" 
                    categoryName="IGV" 
                    displayTitle="Incoming Global Volenteer" 
                />
                <KnowledgeContainer 
                    folderId="1_ZUujDqjmqzGHTVJWltaD-Y4-PXl_bPT" 
                    categoryName="MKT" 
                    displayTitle="Marketing" 
                />
            </div>
        </div>
    );
}

export default BackOffice;
