import { Link } from 'react-router-dom/cjs/react-router-dom';
import './App.css';

function Navbar() {
  return (
    <nav>
      <div className="logo">NikeX</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/sports">Sports</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
