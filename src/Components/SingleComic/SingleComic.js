import React from 'react';
import './SingleComic.css';

const SingleComic = ({ comic }) => {
  const { title, book_image, rank } = comic;

  return (
    <div className='comic-card' id={rank}>
      <img className='comic-image' src={book_image} alt={`${title} poster`}/>
      <h2 className='title'>{title}</h2>
    </div>
  )
}

export default SingleComic;
