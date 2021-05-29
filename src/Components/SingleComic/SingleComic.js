import React from 'react';

const ComicCard = ({ comic }) => {
  return (
    <div className='comic-card'>
      <img className='comic-cover' src={comic.book_image} alt={`${comic.title} poster`}/>
      <h2 className='title'>{comic.title}</h2>
    </div>
  )
}

export default ComicCard
