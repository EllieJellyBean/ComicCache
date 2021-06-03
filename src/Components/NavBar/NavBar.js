import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const linkStyle = {textDecoration: 'none', color: 'black'};
  return (
    <nav>
      <img className='icon' src='newicon.png' />
      <div className='link-container'>
        <Link to='/' style={linkStyle}>
          <i class="fas fa-home fa-1x"></i><p>HOME</p>
        </Link>
        <Link to={'/reading-list'} style={linkStyle}>
        <i class="fas fa-book-open fa-1x"></i><p className='reading-list-header'>READING LIST</p>
        </Link>
      </div>
    </nav>
  )
}

export default NavBar;