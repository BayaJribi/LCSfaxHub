import React from 'react';
import '../../App.css';  // Your styles
import EBTeamSingular from './EBTeamSingular';
import EBData from '../../data/EB.json';  // Your JSON file

function EBTeam() {
    // Extract LCP (assuming LCP is the first member in the JSON array)
    const lcp = EBData[0];

    // Filter out the LCP from the rest of the team
    const teamMembers = EBData.slice(1);

    return (
        <div className="container-fluid py-6 px-5">
            {/* LCP Section */}
            <div className="text-center mx-auto mb-5" >
                <h1 className="display-3 mb-0">Executive Board </h1>
                <h1 className="display-6 mb-0">for the term 24-25 </h1>
                <hr className="w-25 mx-auto bg-primary" />
            </div>
            <div className="row g-5 justify-content-center">
                    <EBTeamSingular
                        name={lcp.name}
                        title={lcp.title}
                        image={`/images/${lcp.image}`}  // Adjusted image path
                    />
            </div>

            {/* LCVP Section */}
            <div className="row g-5 mt-2">
                {teamMembers.map((member, index) => (
                    <EBTeamSingular
                        key={index}
                        name={member.name}
                        title={member.title}
                        image={`/images/${member.image}`}  // Adjusted image path
                    />
                ))}
            </div>
        </div>
    );
}

export default EBTeam;
