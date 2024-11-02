import React, { useEffect, useState } from 'react';
import '../../App.css';
import Element from '../Element';

function KnowledgeContainer({ folderId, categoryName, displayTitle }) {
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchApplications = async () => {
            try {
                const response = await fetch(`/.netlify/functions/getFiles?folderId=${folderId}`);
                if (!response.ok) throw new Error('Failed to load files');
                
                const data = await response.json();
                const formattedData = data.map(file => ({
                    pdfUrl: file.webViewLink,
                    title: file.name.replace('.pdf', ''),
                    pdfImage: '', 
                    category: categoryName,
                }));
                
                setApplications(formattedData);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchApplications();
    }, [folderId, categoryName]);

    if (loading) return (
        <div className="spinner-container">
            <div className="spinner"></div>
            <p>Loading data, please wait...</p>
        </div>
    );

    if (error) return <div>Error: {error}</div>;

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
