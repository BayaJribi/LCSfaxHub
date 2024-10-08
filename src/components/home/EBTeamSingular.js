import React from 'react';
import '../../App.css';  // Your styles

function EBTeamSingular({ name, title, image }) {
    return (
        <div className="col-lg-3">
            <div className="team-item position-relative overflow-hidden">
                <img className="img-fluid w-100" src={image} alt={name} />
                <div 
                    className="team-text w-100 position-absolute text-center p-3" 
                    style={{
                        top: '80%',
                        backgroundColor: '#3C435B',  // Primary background color
                        transform: 'translateY(-50%)'
                    }}
                >
                    <h4 className="text-white">{name}</h4>
                    <p className="text-white text-uppercase mb-0">{title}</p>
                </div>
            </div>
        </div>
    );
}

export default EBTeamSingular;
