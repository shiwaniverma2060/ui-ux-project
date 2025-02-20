import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar sticky-top">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/Home" className="navbar-link">
            Home
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/Blogs" className="navbar-link">
            Blogs
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/DogBreed" className="navbar-link">
            Dog Breeds & Personality
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/DogTrain" className="navbar-link">
            Dog Training
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/Vet" className="navbar-link">
            Vet
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/Contact" className="navbar-link">
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
