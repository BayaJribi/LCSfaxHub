import { Link, useLocation } from 'react-router-dom'; // Import useLocation from react-router-dom
import '../App.css';

function Header() {
  const location = useLocation(); // Get the current location

  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
      <Link to="/" className="navbar-brand p-0">
        <h1 className="m-0 text-uppercase">LC Sfax Hub</h1>
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
              <Link to="/knowledge-hub/applications" className={`custom-dropdown-item dropdown-item ${location.pathname === '/knowledge-hub/applications' ? 'active' : ''}`}>
                Applications
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
          <Link to="/Contact" className={`nav-item nav-link ${location.pathname === '/Contact' ? 'active' : ''}`}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
