import React from 'react';

const FeaturedComic = ({ featuredComic }) => {
  const { book_image, title, contributor, description, buy_links } = featuredComic;
  console.log(featuredComic);
  return (
    <aside className='featured-comic'>
      <h3>top pick</h3>
      <img className='featured-image' src={book_image} />
    </aside>
  )
}

export default FeaturedComic