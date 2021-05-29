import React from 'react';

const FeaturedComic = ({ featuredComic }) => {
  const { book_img, title, contributor, description, buy_links } = featuredComic;
  return (
    <aside className='featured-comic'>
      <h1>Title</h1>
    </aside>
  )
}

export default FeaturedComic