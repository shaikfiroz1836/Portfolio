import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="Navbar navbar-dark bg-info navbar-expand-lg" title='Portfolio'>
        <Link to="/" className="navbar-brand">Portfolio</Link>
        <div className="ml-auto">
          <ul className="navbar-nav">
            <li><Link className="navbar-brand" to="/Home">Home</Link></li>
            <li><Link className="navbar-brand" to="/About">About</Link></li>
            <li><Link className="navbar-brand" to="/Education">Education</Link></li>
            <li><Link className="navbar-brand" to="/Project">Projects</Link></li>
            <li><Link className="navbar-brand" to="/Contact">Contact</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
