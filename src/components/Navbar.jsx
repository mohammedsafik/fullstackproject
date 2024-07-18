// NavBar.js
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing

import './NavBar.css'; // Import CSS file for styling

const NavBar = () => {
  return (
   
    <div className="navbar"  >
      <h1>Calories Tracker</h1>
      <Link to='/cal' className="btn btn-secondary">Calculator</Link>
      <Link to='/Login' className="btn btn-secondary">LogOut</Link>
      
    </div>
   
  );
};

export default NavBar;
