import React from 'react';
import '../../../App.css'; // Import your CSS styles
import Element from '../../Element';
import frontOfficeData from '../../../data/BackOffice.json'; // Adjust the path based on your folder structure

function IM() {
    // Filter the data to only include elements with the category 'BD'
    const filteredData = frontOfficeData.filter(element => element.category === 'IM');

    return (
        <div className="container-fluid py-4 px-5 mb-5 secondary-Background-color">
            <div className="text-center mx-auto mb-5">
                <h1 className="display-5 mb-0">Information Management</h1>
                <hr className="w-25 mx-auto bg-primary" />
            </div>
            <div className="row g-5">
                {filteredData.map((element, index) => (
                    <Element
                        key={index}
                        pdfUrl={element.pdfUrl}
                        pdfImage={element.pdfImage} // Ensure this is set in the JSON file
                        title={element.title}
                        category={element.category}
                    />
                ))}
            </div>
        </div>
    );
}

export default IM;
