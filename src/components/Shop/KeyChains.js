import React from 'react';
import '../../App.css'; // Import your CSS styles
import Item from './Item'; // Import your Item component
import ShopItems from '../../data/ShopItems.json'; // Adjust the path based on your folder structure

function KeyChains() {
    // Filter the data to only include elements with the category 'KeyChain'
    const filteredData = ShopItems.filter(element => element.category === 'KeyChain');

    return (
        <div className="container-fluid py-4 px-5 mb-5 secondary-Background-color">
            <div className="text-center mx-auto mb-5">
                <h1 className="display-5 mb-0">Key Chains</h1>
                <hr className="w-25 mx-auto bg-primary" />
            </div>
            <div className="row">
                {/* Loop through filteredData and display the Item component */}
                {filteredData.map((item, index) => (
                    <div className="col-md-3" key={index}>
                        <Item
                            imageUrl={`images/AIESECShop/${item.Url}`} // Assuming your images are stored in this path
                            title={item.title}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default KeyChains;
