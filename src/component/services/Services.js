import React from 'react';
import './services.css';
import Title from '../title/Title';
import {FaUserSecret,FaCode,FaMapMarkedAlt} from 'react-icons/fa';
function Services() {
  return (
    <div className='services'>
      <Title>Services</Title>
        <div className='container'>
            <div className='box'>
              <a href='#'><FaUserSecret/></a>
              <h3>Security</h3>
              <div className='info'>
                <a href='#'>Details</a>
              </div>
             </div>
             <div className='box'>
              <a href='#'><FaCode/></a>
              <h3>Coding</h3>
              <div className='info'> 
                <a href='#'>Details</a>
              </div>
             </div>
             <div className='box'>
              <a href='#'><FaMapMarkedAlt/></a>
              <h3>Location</h3>
              <div className='info'>
                <a href='#'>Details</a>
              </div>
             </div>
             <div className='box'>
              <a href='#'><FaUserSecret/></a>
              <h3>Security</h3>
              <div className='info'>
                <a href='#'>Details</a>
              </div>
             </div>
             <div className='box'>
              <a href='#'><FaCode/></a>
              <h3>Coding</h3>
              <div className='info'>
                <a href='#'>Details</a>
              </div>
             </div>
             <div className='box'>
              <a href='#'><FaMapMarkedAlt/></a>
              <h3>Location</h3>
              <div className='info'>
                <a href='#'>Details</a>
              </div>
             </div>
         </div>
    </div>
  )
}

export default Services;