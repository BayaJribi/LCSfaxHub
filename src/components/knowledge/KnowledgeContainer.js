import React, { useEffect, useState } from 'react';
import '../../App.css'; // Import your CSS styles
import Element from '../Element'; // Import Element component

function KnowledgeContainer({ folderId, categoryName, displayTitle}) {
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

                const formattedData = data.map(file => ({
                    pdfUrl: file.webViewLink, // URL to open the PDF
                    title: file.name.replace('.pdf', ''), // Assuming the title is the file name without the extension
                    pdfImage:'', // Assuming no preview image
                    category: categoryName, // Use the passed category name
                }));

                setApplications(formattedData);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchApplications();
    }, [folderId, categoryName]); // Re-run the effect if folderId or categoryName changes

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
        <div className="container-fluid py-4 px-5 secondary-Background-color">
            <div className="text-center mx-auto mb-5">
                <h1 className="display-5 mb-0">{displayTitle}</h1>
                <hr className="w-25 mx-auto bg-primary" />
            </div>
            <div className="row g-5">
                {applications.map((element, index) => (
                    <Element
                        key={index}
                        pdfUrl={element.pdfUrl}
                        pdfImage={element.pdfImage}
                        title={element.title}
                        category={element.category}
                    />
                ))}
            </div>
        </div>
    );
}

export default KnowledgeContainer;
