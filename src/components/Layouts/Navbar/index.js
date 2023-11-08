import React from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu.js';
import './style.css';

function Navbar() {
  return (
    <div id='dv-navbar'>
      <div>
        {/* Title link */}
        <Link to='/' id='navbar-title'>Task Management</Link>

        {/* Menu component */}
        <Menu />
      </div>
    </div>
  );
}

export default Navbar;