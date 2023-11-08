import React from 'react';
import { Link } from 'react-router-dom';

function Users() {
  return (
    <div>
      {/* Title label */}
      <label className='page-title'>Users</label>

      {/* Add link */}
      <Link to='/users/add' className='float-right lnk-add'>Add</Link>
    </div>
  );
}

export default Users;