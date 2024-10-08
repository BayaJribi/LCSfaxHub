import React from 'react';
import '../../App.css';  // Your styles

function History() {
    return (
        <div className="container-fluid secondary-Background-color p-0">
            <div className="row g-0">
                {/* Left side section */}
                <div className="col-lg-6 py-6 px-5">
                    <h1 className="display-5 mb-4">Welcome To <span className="main-text-color">LC Sfax</span></h1>
                    <p className="mb-4"> Founded in 1987,the Local Committee AIESEC in Sfax (LC Sfax) is a branch of AIESEC in Tunisia.
                        Established with the aim of fostering leadership development and cultural exchange among youth, LC Sfax has played a pivotal role
                        in empowering young leaders within the community. As a part of the AIESEC network, LC Sfax continues to inspire and equip future leaders, making a significant impact
                        both locally and globally.
                        .</p>
                    <h4 className="main-text-color mb-4">The AIESEC Way</h4>
                    <p className="mb-4"> The AIESEC Way embodies a unique approach that prioritizes leadership development, cultural 
                        understanding, and global connections. Rooted in the belief that youth can drive positive change, AIESEC 
                        fosters an environment where individuals can explore their potential and engage with diverse perspectives. 
                        Through experiential learning and practical opportunities, AIESEC empowers young leaders to take initiative 
                        and contribute meaningfully to their communities. This approach emphasizes collaboration, empathy, and the 
                        importance of creating a better world through shared experiences and understanding among culture.</p>
                </div>

                {/* Right side section */}
                <div className="col-lg-6">
                    <div className="h-100 d-flex flex-wrap justify-content-center align-items-center main-Background-color p-5">
                        {/* Image 1 */}
                        <div className="d-flex justify-content-center mb-4 secondary-Background-color" style={{ width: '40%', margin: '2.5%',borderRadius: '20px'}}>
                            <img
                                src="images/Why.png"
                                alt="why"
                                style={{ width: '100%', height: 'auto', objectFit: 'cover'}}
                            />
                        </div>

                        {/* Image 2 */}
                        <div className="d-flex justify-content-center mb-4 secondary-Background-color" style={{ width: '40%', margin: '2.5%' ,borderRadius: '20px'}}>
                            <img
                                src="images/Who.png"
                                alt="who"
                                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                            />
                        </div>

                        {/* Image 3 */}
                        <div className="d-flex justify-content-center mb-4 secondary-Background-color" style={{ width: '85%', margin: '2.5%',borderRadius: '20px' }}>
                            <img
                                src="images/How.png"
                                alt="what"
                                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                            />
                        </div>

                        {/* Image 4 */}
                        {/* <div className="d-flex justify-content-center mb-4" style={{ width: '45%', margin: '2.5%' }}>
                            <img
                                src="path_to_image_4.jpg"
                                alt="Image 4 Description"
                                style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '20px' }}
                            />
                        </div> */}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default History;
