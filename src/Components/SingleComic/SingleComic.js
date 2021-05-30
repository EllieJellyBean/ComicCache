import React from 'react';
import './SingleComic.css';

const SingleComic = ({ comic }) => {
  const { title, book_image } = comic;

  return (
    <div className='comic-card'>
      <img className='comic-image' src={book_image} alt={`${title} poster`}/>
      <h2 className='title'>{title}</h2>
    </div>
  )
}

export default SingleComic;
