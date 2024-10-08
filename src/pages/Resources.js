import React from 'react';
import '../App.css'; // Import your CSS styles
import Banner from '../components/Banner';
import KnowledgeContainer from '../components/knowledge/KnowledgeContainer';
function Resources() {
    return (
        <div className="secondary-Background-color">
            <Banner PageName="Ressources" Category="Knowledge Hub > " /> {/* This is the correct way to pass a prop */}
            <div className="py-5">


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
    );
}
export default Resources;