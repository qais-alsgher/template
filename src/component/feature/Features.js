import React from 'react';
import './features.css';
import Title from '../title/Title';

function Features() {
  return (
    <div className='fetuere'>
        <Title>Features</Title>
        <div className='container'>
            <div className='box'>
                <div className='image-holder'>
                    <img src='https://elzerowebschool.github.io/HTML_And_CSS_Template_Three/imgs/features-01.jpg' alt='image' />
                    </div>
                    <h2>Quality</h2>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, nisl eget ultricies tincidunt, nunc elit lacinia nunc, eget aliquam massa nisl eget dolor. </p>
                    <a href='#'>MORE</a> 
                  </div>
                    <div className='box'>
                <div className='image-holder'>
                    <img src='https://elzerowebschool.github.io/HTML_And_CSS_Template_Three/imgs/features-01.jpg' alt='image' />
                    </div>
                    <h2>Quality</h2>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, nisl eget ultricies tincidunt, nunc elit lacinia nunc, eget aliquam massa nisl eget dolor. </p>
                    <a href='#'>MORE</a> 
                    </div>
                    <div className='box'>
                <div className='image-holder'>
                    <img src='https://elzerowebschool.github.io/HTML_And_CSS_Template_Three/imgs/features-01.jpg' alt='image' />
                    </div>
                    <h2>Quality</h2>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, nisl eget ultricies tincidunt, nunc elit lacinia nunc, eget aliquam massa nisl eget dolor. </p>
                    <a href='#'>MORE</a> 
                    </div>
                    </div>
    </div>
  )
}

export default Features;