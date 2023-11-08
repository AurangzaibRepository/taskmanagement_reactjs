import React from 'react';
import { Link } from 'react-router-dom';

function Tasks() {
  return (
    <div>
      {/* Title label */}
      <label className='page-title'>Tasks</label>

      {/* Add link */}
      <Link to='/tasks/add' className='float-right lnk-add'>Add</Link>
    </div>
  );
}

export default Tasks;