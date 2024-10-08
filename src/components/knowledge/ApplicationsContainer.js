// src/components/ApplicationsContainer.js
import React, { useEffect, useState } from 'react';
import '../../App.css'; // Import your CSS styles
import Element from '../Element';

function ApplicationsContainer({ folderId, categoryName, title }) {
    const [applications, setApplications] = useState([]); // State to hold applications data
    const [loading, setLoading] = useState(true); // State to manage loading status
    const [error, setError] = useState(null); // State to manage error status

    useEffect(() => {
        const fetchApplications = async () => {
            try {
                const response = await fetch(`/.netlify/functions/getFiles?folderId=${folderId}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();

                const formattedData = data.map(file => {
                    // Split the file name by "-" to extract the owner's name
                    const parts = file.name.split("-");
                    const owner = parts.length > 1 ? parts[parts.length - 1].replace('.pdf', '') : 'Unknown';

                    return {
                        pdfUrl: file.webViewLink,  // URL to open the PDF
                        title: parts.slice(0, -1).join("-"),  // Everything before the owner name
                        Owner: owner,  // Extracted owner name
                        pdfImage: '',  // Placeholder for PDF image
                        category: categoryName,  // The category passed as a prop
                    };
                });

                setApplications(formattedData);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchApplications();
    }, [folderId]); // Re-run the effect if folderId changes

    if (loading) {
        return (
            <div className="spinner-container">
                <div className="spinner"></div>
            </div>
        ); // Render loading spinner
    }

    if (error) {
        return <div>Error: {error}</div>; // Render error state
    }

    return (
        <div className="container-fluid py-4 px-5 mb-5 secondary-Background-color">
            <div className="text-center mx-auto mb-5">
                <h1 className="display-5 mb-0">{title}</h1>
                <hr className="w-25 mx-auto bg-primary" />
            </div>
            <div className="row g-5">
                {applications.map((element, index) => (
                    <Element
                        key={index}
                        pdfUrl={element.pdfUrl}
                        Owner={element.Owner}  // Displaying the owner
                        pdfImage={element.pdfImage}
                        title={element.title}
                        category={element.category}
                    />
                ))}
            </div>
        </div>
    );
}

export default ApplicationsContainer;
