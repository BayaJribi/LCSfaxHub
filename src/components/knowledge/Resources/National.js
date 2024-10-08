import React from 'react';
import '../../../App.css'; // Import your CSS styles
import Element from '../../Element';
import Ressources from '../../../data/Resources.json'; // Adjust the path based on your folder structure

function National() {
    // Filter the data to only include elements with the category 'Nat'
    const filteredData = Ressources.filter(element => element.category === 'Nat');

    return (
        <div className="container-fluid py-4 px-5 secondary-Background-color">
            <div className="text-center mx-auto mb-5">
                <h1 className="display-5 mb-0">National Ressources</h1>
                <hr className="w-25 mx-auto bg-primary" />
            </div>
            <div className="row g-5">
                {filteredData.map((element, index) => (
                    <Element
                        key={index}
                        pdfUrl={element.Url}
                        pdfImage={element.pdfImage} // Ensure this is set in the JSON file
                        title={element.title}
                        category={element.category}
                    />
                ))}
            </div>
        </div>
    );
}

export default National;
