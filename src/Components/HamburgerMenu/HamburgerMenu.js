import React from 'react';
import './HamburgerMenu.css';
import { Link } from 'react-router-dom';

const HamburgerMenu = () => {
  const linkStyle = {textDecoration: 'none', color: 'black'};
  return (
    <nav>
      <h1>comic cache</h1>
      <Link to={'/reading-list'} style={linkStyle}>
        <ul>reading list</ul>
      </Link>
      <Link to='/featured-comic' style={linkStyle}>
        <ul>featuredComic</ul>
      </Link>
      <Link to='/' style={linkStyle}>
        <ul>home</ul>
      </Link>
    </nav>
  )
}



export default HamburgerMenu;
