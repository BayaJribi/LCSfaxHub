import React from 'react';
import '../App.css'; // Import your CSS styles
import Banner from '../components/Banner';
// import Output from '../components/Conferences/Outputs';
import Footer from '../components/Footer';
import Header from '../components/Header';
import KnowledgeContainer from '../components/knowledge/KnowledgeContainer';
function ConferencesOutput() {
    return (
        <>
            <Header />
            <div className="secondary-Background-color">
                <Banner PageName="Conferences Output" Category="" /> {/* This is the correct way to pass a prop */}
                <div className='py-5'>
                    {/* <Output /> */}
                    <KnowledgeContainer
                        folderId="1FJkR84L2RZHfKuOE0Aa72QQ5L42i4ES1"
                        categoryName="Local"
                        displayTitle="Local Conferences Output"
                    />
                    <KnowledgeContainer
                        folderId="14cE1ElaQd6-wxv4NrhTRCGopS94qkeey"
                        categoryName="National"
                        displayTitle="National Conferences Output"
                    />
                </div>
            </div>
            <Footer />
        </>
    );
}
export default ConferencesOutput;