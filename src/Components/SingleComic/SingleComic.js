import React from 'react';
import { Link } from 'react-router-dom';
import './SingleComic.css';

const SingleComic = ({ comic, addToList, removeFromList, isInReadingList }) => {
  const { title, book_image, rank } = comic;

  if(!isInReadingList) {
    const linkStyle = {textDecoration: 'none', color: 'black'};
    return (
      <div className='comic-card'>
        <Link style={linkStyle}id={comic.rank} to={`/comic-details/${comic.rank}`} >
          <img className='comic-image' src={book_image} alt={`${title} poster`}/>
        </Link>
        <h2 className='comic-title'>{title}</h2>
        <div className='plus-icon-container'>
          <i className='fas fa-plus' id={rank} onClick={addToList}></i>
          <p className='reading-list'>add to reading list</p>
        </div>
      </div>
    )
  } else {
    return (
      <div className='comic-card'>
      <Link id={comic.rank} to={`/comic-details/${comic.rank}`} >
        <img className='comic-image' src={book_image} alt={`${title} poster`}/>
        <h2 className='comic-title'>{title}</h2>
      </Link>
        <div className='plus-icon-container'>
          <i className='fas fa-minus' id={rank} onClick={removeFromList}></i>
          <p className='reading-list'>remove from reading list</p>
        </div>  
      </div>
    )
  }
}

export default SingleComic;