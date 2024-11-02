import { Link, useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate
import { useAuth } from '../context/AuthContext'; // Import useAuth from your AuthContext
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/Firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'; // Import specific icon

import '../App.css';

function Header() {
  const location = useLocation(); // Get the current location
  const { currentUser } = useAuth(); // Get the current user from context
  const navigate = useNavigate(); // Use navigate for redirection

  const handleLogout = async () => {
    try {
      await signOut(auth); // Sign out user from Firebase
      navigate('/login'); // Redirect to login page after logout
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
      <Link to="/" className="navbar-brand p-0">
        <h1 className="m-0 text-uppercase"><img alt="LC Logo" src='../images/Logo LC.png' width={55} />&nbsp;&nbsp; LC Sfax Hub</h1>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto py- me-n3">
          <Link to="/" className={`nav-item nav-link ${location.pathname === '/' ? 'active' : ''}`}>
            Home
          </Link>
          <div className="nav-item dropdown">
            <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
              Knowledge Hub
            </Link>
            <div className="dropdown-menu m-0">
              <Link to="/knowledge-hub/front-office" className={`custom-dropdown-item dropdown-item ${location.pathname === '/knowledge-hub/front-office' ? 'active' : ''}`}>
                Front Office
              </Link>
              <Link to="/knowledge-hub/back-office" className={`custom-dropdown-item dropdown-item ${location.pathname === '/knowledge-hub/back-office' ? 'active' : ''}`}>
                Back Office
              </Link>
              <Link to="/knowledge-hub/resources" className={`custom-dropdown-item dropdown-item ${location.pathname === '/knowledge-hub/resources' ? 'active' : ''}`}>
                Resources
              </Link>
            </div>
          </div>
          <Link to="/ConferencesOutput" className={`nav-item nav-link ${location.pathname === '/ConferencesOutput' ? 'active' : ''}`}>
            Conferences Output
          </Link>
          <Link to="/AIESECShop" className={`nav-item nav-link ${location.pathname === '/AIESECShop' ? 'active' : ''}`}>
            AIESEC Shop
          </Link>
          <div className='p-5'></div>
          {/* <Link to="/Contact" className={`nav-item nav-link ${location.pathname === '/Contact' ? 'active' : ''}`}>
            Contact
          </Link> */}

          {/* Conditionally render Logout if the user is logged in */}
          {currentUser ? (
            <a href="/login"className="btn btn-link nav-item nav-link" onClick={handleLogout}>
              <FontAwesomeIcon icon={faArrowRightFromBracket}  /> {/* Updated icon usage */}
            </a>
          ) : (
            <Link to="/login" className={`nav-item nav-link ${location.pathname === '/login' ? 'active' : ''}`}>
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
