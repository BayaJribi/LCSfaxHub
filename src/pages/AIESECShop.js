
import '../App.css'; // Import your CSS styles
import Banner from '../components/Banner';
import KeyChains from '../components/Shop/KeyChains';
import Stickers from '../components/Shop/Stickers';
function AIESECShop() {
    return (
        <div className="secondary-Background-color">
            <Banner PageName="AIESEC Shop" Category="" /> {/* This is the correct way to pass a prop */}
            <div className='py-5'>
        <Stickers/>
        <KeyChains/>
            </div>
        </div>
    );
}
export default AIESECShop;