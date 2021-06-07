import React from 'react';
import './FeaturedComic.css';

const FeaturedComic = ({ featuredComic }) => {
  const { book_image, title, author, description, buy_links } = featuredComic;

  const handleClick = () => {
    window.open(buy_links.url)
  }

  return (
    <aside className='featured-comic'>
      <div className='left-container'>
        <h3 className='top-pick'>#1 <br>
        </br>THIS<br></br>WEEK</h3>
        <div className='info-container'>
          <p className='author'>{author}</p>
          <p className='featured-title'>{title}</p>
        </div>
        <button className='buy-it-button'onClick={handleClick}>BUY IT</button>
      </div>
      <div className='right-container'>
        <img className='featured-image' src={book_image} alt={`comic cover for ${title}`}/>
        <p className='description'>{description}</p>
      </div>
    </aside>
  )
}


export default FeaturedComic;
