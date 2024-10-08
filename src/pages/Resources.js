import React from 'react';
import '../App.css'; // Import your CSS styles
import National from '../components/knowledge/Resources/National';
import AI from '../components/knowledge/Resources/AI';
import Banner from '../components/Banner';
function Resources() {
    return (
        <div className="secondary-Background-color">
        <Banner PageName="Ressources" Category="Knowledge Hub > "/> {/* This is the correct way to pass a prop */}
        <div className="py-5">

        <National/>
        <AI/>
     
        
        </div>
        </div>
    );
}
export default Resources;