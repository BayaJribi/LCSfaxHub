import './App.css';
import FrontOffice from './pages/FrontOffice';
import BackOffice from './pages/BackOffice';
// import Applications from './pages/Applications';
import Resources from './pages/Resources';
import Home from './pages/Home';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ConferencesOutput from './pages/ConferencesOuput';
import AIESECShop from './pages/AIESECShop';
import Login from './pages/Login';
import Register from './pages/Register';
import PrivateRoute from './components/PrivateRoute'; // Import PrivateRoute
import { AuthProvider } from './context/AuthContext'; // Wrap app with AuthProvider

function App() {
  return (
    <AuthProvider> {/* Ensure that the entire app is wrapped in the AuthProvider */}
      <Router>
        <div className="App">
          <Routes>
            {/* Protect Home using PrivateRoute */}
            <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/knowledge-hub/front-office" element={<PrivateRoute><FrontOffice /></PrivateRoute>} />
            <Route path="/knowledge-hub/back-office" element={<PrivateRoute><BackOffice /></PrivateRoute>} />
            <Route path="/knowledge-hub/resources" element={<PrivateRoute><Resources /></PrivateRoute>} />
            <Route path="/ConferencesOutput" element={<PrivateRoute><ConferencesOutput /></PrivateRoute>} />
            <Route path="/AIESECShop" element={<PrivateRoute><AIESECShop /></PrivateRoute>} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
