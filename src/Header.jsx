import React from 'react';
import './header.css';
import { IoChatbubbles} from "react-icons/io5";

function Header() {
  return (
    
    <div className='header'>
        <div className='container' >
        <a href='#'>Header</a>
        <ul>
        <li><a href='#'>Articles</a></li>
        <li><a href='#'>Gallery</a></li>
        <li><a href='#'>Features</a></li>
        <li>
          <a href='#'>Other Links</a>
           {/* maga menu */}
            <div className="maga-menu">
                <div className="image">
                  <img src='https://elzerowebschool.github.io/HTML_And_CSS_Template_Three/imgs/megamenu.png' alt='image-magamenu'/>
                </div>
                <ul className='links'>
                  <li><a href='#'><IoChatbubbles className='maga-logo'/>Testimanials</a></li>
                  <li><a href='#'><IoChatbubbles className='maga-logo'/>Testimanials</a></li>
                  <li><a href='#'><IoChatbubbles className='maga-logo'/>Testimanials</a></li>
                  <li><a href='#'><IoChatbubbles className='maga-logo'/>Testimanials</a></li>
                  <li><a href='#'><IoChatbubbles className='maga-logo'/>Testimanials</a></li>
                </ul>
                <ul className="links">
                  <li><a href='#'><IoChatbubbles className='maga-logo'/>Testimanials</a></li>
                  <li><a href='#'><IoChatbubbles className='maga-logo'/>Testimanials</a></li>
                  <li><a href='#'><IoChatbubbles className='maga-logo'/>Testimanials</a></li>
                  <li><a href='#'><IoChatbubbles className='maga-logo'/>Testimanials</a></li>
                  <li><a href='#'><IoChatbubbles className='maga-logo'/>Testimanials</a></li>
                </ul>
            </div>
          </li>
        </ul>
        </div>
    </div>
  )
}

export default Header;
