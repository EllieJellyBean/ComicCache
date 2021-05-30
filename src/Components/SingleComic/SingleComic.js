import React from 'react';
import { Link } from 'react-router-dom';
import './SingleComic.css';

const SingleComic = ({ comic, addToList }) => {
  const { title, book_image, rank } = comic;

  return (
    <Link id={comic.rank} to={`/comic-details/${comic.rank}`} >
    <div className='comic-card'>
      <img className='comic-image' src={book_image} alt={`${title} poster`}/>
      <h2 className='title'>{title}</h2>
      <button id={rank} onClick={addToList}>
      Add to reading list
      </button>
    </div>
    </Link>
  )
}

export default SingleComic;
