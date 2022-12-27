import React from 'react';
import './landing.css';
import { HiChevronDoubleDown } from "react-icons/hi";
function Landing() {
    return (

        <div className='landing'>
            <div className='container'>
                <div className='text'>
                    <h1>Welcome, To Elzero World</h1>
                    <p>Here Iam gonna share everything about my life. Books Iam reading, Games Iam Playing, Stories and Events </p>
                </div>
                <div className='image'>
                    <img src='https://elzerowebschool.github.io/HTML_And_CSS_Template_Three/imgs/landing-image.png' alt='logo' />
                </div>
            </div>
            <a href='#'><HiChevronDoubleDown /></a>
        </div>
    )
}

export default Landing;
