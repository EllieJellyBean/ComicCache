import React from 'react';

const ComicCard = ({ comic }) => {
  return (
    <div className='comic-card'>
      <h2 className='title'>{comic.title}</h2>
    </div>
  )
}

export default ComicCard
