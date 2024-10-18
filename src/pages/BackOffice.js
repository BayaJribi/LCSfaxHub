import React from 'react';
import '../App.css'; // Import your CSS styles
import Banner from '../components/Banner';  // Import the Banner component
import KnowledgeContainer from '../components/knowledge/KnowledgeContainer'; // Import the reusable component
import Footer from '../components/Footer';
import Header from '../components/Header';

function BackOffice() {
    return (
        <>
            <Header />
            <div className="secondary-Background-color">
                <Banner PageName="Back Office" Category="Knowledge Hub > " /> {/* This is the correct way to pass a prop */}
                <div className='py-5'>
                    <KnowledgeContainer
                        folderId="1XyRshkJ57mqZFfexkCGbmTGKYiDHLGiv"
                        categoryName="FnL"
                        displayTitle="Finance & Legalities"
                    />
                    <KnowledgeContainer
                        folderId="1cBBOFw1FA-risTFAju3LrtoRqYKSgOhs"
                        categoryName="TM"
                        displayTitle="Talent Management"
                    />
                    <KnowledgeContainer
                        folderId="1P3EyG7JJArlJiAsgrF8qt2tQeIpTJLU-"
                        categoryName="BD"
                        displayTitle="Business Development & Engage With AIESEC"
                    />
                    <KnowledgeContainer
                        folderId="1k68AMQANiEho3cKGCwoBV9cPos9YP8e-"
                        categoryName="IM"
                        displayTitle="Information Management"
                    />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default BackOffice;
