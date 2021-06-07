import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = ({ linkStyle, featuredComicButton }) => {
  return (
    <nav>
      <img className='icon' src='newicon.png'  alt='Comic Cache red icon'/>
      <div className='link-container'>
        <Link to='/' style={linkStyle}>
          <div className='nav-icon-container'>
            <i className='fas fa-home fa-1x'></i>
            <p className='nav-text'>HOME</p>
          </div>
        </Link>
        <Link to={'/reading-list'} style={linkStyle}>
          <div className='nav-icon-container'>
            <i className='fas fa-book-open fa-1x'></i>
            <p className='reading-list-header'>READING LIST</p>
          </div>
        </Link>
        {featuredComicButton}
      </div>
    </nav>
  )
}

export default NavBar;
