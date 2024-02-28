import React from 'react';
import logo from '../Images/Firoz.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-custom navbar-expand-lg" title='Portfolio'>
        <Link to="/" className="navbar-brand"><img height={100} width={100} src={logo} alt="Firoz logo" /></Link>
        <div className="ml-auto">
          <ul className="navbar-nav">
            <li><Link className="navbar-brand" to="/Home">Home</Link></li>
            <li><Link className="navbar-brand" to="/About">About Me</Link></li>
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
