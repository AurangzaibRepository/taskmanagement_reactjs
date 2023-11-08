import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div id="dv-menu">
        <ul>
            <li>
                <Link to="/projects">Projects</Link>
            </li>
            <li>
                <Link to="/teams">Teams</Link>
            </li>
            <li>
                <Link to="/tasks">Tasks</Link>
            </li>
            <li>
                <Link to="/users">Users</Link>
            </li>
            <li>
                <Link to="/categories">Categories</Link>
            </li>
        </ul>
    </div>
  );
}

export default Menu;