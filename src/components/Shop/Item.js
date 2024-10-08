import React from 'react';
import '../../App.css'; // Import your CSS styles

function Item({ imageUrl, title }) {
    return (
        <div
            className="d-flex justify-content-center align-items-center mb-4 secondary-Background-color"
            style={{ width: '100%', height: '300px', margin: '2.5%', overflow: 'hidden' }}
        >
            <img
                src={imageUrl} // Use the imageUrl prop
                alt={title} // Use the title prop for alt text
                style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }} // Use maxWidth and maxHeight to contain the image
            />
        </div>
    );
}

export default Item;
