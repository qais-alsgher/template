import React from 'react';
import './title.css';
function Title({children}) {
  return (
   <h2 className='m-title'>
    {children}
   </h2>
  )
}

export default Title;
