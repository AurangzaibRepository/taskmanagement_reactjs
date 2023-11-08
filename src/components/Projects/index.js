import React from 'react';
import { Link } from 'react-router-dom';

function Projects() {
  return (
    <div>
      {/* Title label */}
      <label className='page-title'>Projects</label>

      {/* Add link */}
      <Link to="/projects/add" className='float-right lnk-add'>Add</Link>
    </div>
  );
}

export default Projects;