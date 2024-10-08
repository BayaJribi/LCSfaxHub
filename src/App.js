import './App.css';
import Header from './components/Header';
import FrontOffice from './pages/FrontOffice';
import BackOffice from './pages/BackOffice';
import Applications from './pages/Applications';
import Resources from './pages/Resources';
import Footer from './components/Footer';
import Home from './pages/Home';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ConferencesOutput from './pages/ConferencesOuput';
import AIESECShop from './pages/AIESECShop';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/knowledge-hub/front-office" element={<FrontOffice />} />
          <Route path="/knowledge-hub/back-office" element={<BackOffice />} />
          <Route path="/knowledge-hub/applications" element={<Applications />} />
          <Route path="/knowledge-hub/resources" element={<Resources />} />
          <Route path="/ConferencesOutput" element={<ConferencesOutput />} />
          <Route path="/AIESECShop" element={<AIESECShop />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
