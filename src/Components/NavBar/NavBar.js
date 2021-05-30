import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <h1>comic cache</h1>
      <Link to={'/reading-list'}>
        <ul>reading list</ul>
      </Link>
      <ul>home</ul>
    </nav>

  )
}



export default NavBar;