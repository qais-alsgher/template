import React from 'react';
import './galler.css';
import Title from '../title/Title';
import '../../App.css'

function Gallery() {
  return (
    <div className='gallery'>
        <Title>gallery</Title>
        <div className='container'>
            <div className='box'>
                <div className='image'>
                    <img src='https://elzerowebschool.github.io/HTML_And_CSS_Template_Three/imgs/gallery-02.png' alt='image' />
                </div>
            </div>
            <div className='box'>
                <div className='image'>
                    <img src='https://elzerowebschool.github.io/HTML_And_CSS_Template_Three/imgs/gallery-02.png' alt='image' />
                </div>
            </div>
            <div className='box'>
                <div className='image'>
                    <img src='https://elzerowebschool.github.io/HTML_And_CSS_Template_Three/imgs/gallery-02.png' alt='image' />
                </div>
            </div>
            <div className='box'>
                <div className='image'>
                    <img src='https://elzerowebschool.github.io/HTML_And_CSS_Template_Three/imgs/gallery-02.png' alt='image' />
                </div>
            </div>
            <div className='box'>
                <div className='image'>
                    <img src='https://elzerowebschool.github.io/HTML_And_CSS_Template_Three/imgs/gallery-02.png' alt='image' />
                </div>
            </div>
            <div className='box'>
                <div className='image'>
                    <img src='https://elzerowebschool.github.io/HTML_And_CSS_Template_Three/imgs/gallery-02.png' alt='image' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Gallery;