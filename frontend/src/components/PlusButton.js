import React from 'react';
import { Link } from 'react-router-dom';

const PlusButton = () => {
  return (
    <div className='PlusButton-Container'>
      <div className='PlusButton'>
        <p><Link to='/new' style={{ textDecoration: 'none' }}>+</Link></p>
      </div>
    </div>
  )
}

export default PlusButton