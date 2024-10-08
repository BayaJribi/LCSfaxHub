// src/components/Applications.js
import React from 'react';
import '../App.css'; // Import your CSS styles
import ApplicationsContainer from '../components/knowledge/ApplicationsContainer';
import Banner from '../components/Banner';

function Applications() {
    return (
        <div className="secondary-Background-color">
            <Banner PageName="Applications" Category="Knowledge Hub > " /> {/* This is the correct way to pass a prop */}
            <div className='py-5'>
                <ApplicationsContainer 
                    folderId="1IQbBp7tXnmkkKaCwa9qiiskjqqRVaJ4E" 
                    categoryName="EST" 
                    title="EST Applications" 
                />
                <ApplicationsContainer 
                    folderId="1P93ZLoKVuUf2AV8Bar3gSJTuYbeuloru" 
                    categoryName="OC" 
                    title="OC Team Applications" 
                />
                <ApplicationsContainer 
                    folderId="1318Ze46LMvK6jr2iGvygqAABcDmUk4QK" 
                    categoryName="MM" 
                    title="MM Applications" 
                />
            </div>
        </div>
    );
}

export default Applications;
