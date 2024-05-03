import React from 'react';
import "./Navbar.css"

// Navbar component
function Navbar() {
  return (
    <div>
    <h1 style={{ textAlign: 'center', marginTop: '10px' }}>Navbar using component</h1>
      <nav className="navbar">
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>

    </div>

  );
}

export default Navbar;