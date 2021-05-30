import React from 'react';
import { Link } from 'react-router-dom';
import './SingleComic.css';

const SingleComic = ({ comic, addToList }) => {
  const { title, book_image, rank } = comic;

  return (
    <div className='comic-card'>
    <Link id={comic.rank} to={`/comic-details/${comic.rank}`} >
      <img className='comic-image' src={book_image} alt={`${title} poster`}/>
      <h2 className='title'>{title}</h2>
    </Link>
      <button id={rank} onClick={addToList}>
      Add to reading list
      </button>
    </div>
  )
}

export default SingleComic;
