import React from 'react';
import { Link } from 'react-router-dom';

function Teams() {
  return (
    <div>
      {/* Title label */}
      <label className='page-title'>Teams</label>

      {/* Add link */}
      <Link to="/teams/add" className='float-right lnk-add'>Add</Link>
    </div>
  );
}

export default Teams;