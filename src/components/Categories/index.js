import React from 'react';
import { Link } from 'react-router-dom';

function Category() {
  return (
    <div>
      {/* Title label */}
      <label className='page-title'>Categories</label>

      {/* Add link */}
      <Link to='/categories/add' className='float-right lnk-add'>Add</Link>
    </div>
  );
}

export default Category;
