import React from 'react';

const FeaturedComic = ({ featuredComic }) => {
  const { book_image, title, author, description, buy_links } = featuredComic;
  console.log(featuredComic);
  return (
    <aside className='featured-comic'>
      <h3>top pick</h3>
      <img className='featured-image' src={book_image} />
      <div className='info-container'>
        <p className='author'>{author}</p>
        <p className='title'>{title}</p>
      </div>
    </aside>
  )
}

export default FeaturedComic