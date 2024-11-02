import React from 'react';
import '../App.css'; // Import your CSS styles
import Banner from '../components/Banner';
import KnowledgeContainer from '../components/knowledge/KnowledgeContainer';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Resources() {
    return (
        <>
            <Header />
            <div className="secondary-Background-color">
                <Banner PageName="Ressources" Category="Knowledge Hub > " /> {/* This is the correct way to pass a prop */}
                <div className="py-5">
                <KnowledgeContainer
                        folderId="1wH6px3NEZ_Z8q6uAZxsr5K64AHLutjs3"
                        categoryName="Local"
                        displayTitle="Local Ressources"
                    />
                    <KnowledgeContainer
                        folderId="1Cx8QriTKDGO9BXEnC6J0Nbu76pRPatE5"
                        categoryName="National"
                        displayTitle="National Ressources"
                    />
                    <KnowledgeContainer
                        folderId="1salSFWxmTETScHtG7BI6_hMX68y6Oxl-"
                        categoryName="AI"
                        displayTitle="AIESEC International"
                    />
                </div>
            </div>
            <Footer />
        </>
    );
}
export default Resources;