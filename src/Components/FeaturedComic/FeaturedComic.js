import React from 'react';
import './FeaturedComic.css';

const FeaturedComic = ({ featuredComic }) => {
  const { book_image, title, author, description, buy_links } = featuredComic;

  return (
    <aside className='featured-comic'>
      <h3>top pick</h3>
      <img className='featured-image' src={book_image}/>
      <div className='info-container'>
        <p className='author'>{author}</p>
        <p className='title'>{title}</p>
      </div>
      <p className='description'>{description}</p>
      <button className='buy-it-button'>buy it!</button>
    </aside>
  )
}

export default FeaturedComic;