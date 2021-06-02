import React from 'react';
import { NavLink } from 'react-router-dom';
import './ComicDetails.css';

const ComicDetails = (props) => {
  const { rank, foundComic, addComicToReadingList } = props;

  return (
    <article className='details-display'>
      <div className='comic-details'>
        <h2 data-cy='details-title' className='details-title'>{foundComic.title}</h2>
        <img className='details-image' src={foundComic.book_image} alt={`comic cover for ${foundComic.title}`}/>
        <h4 data-cy='comic-author' className='comic-author'>{`Author: ${foundComic.author}`}</h4>
        <h4 data-cy='comic-contributor' className='comic-contributor'>{`Contributor: ${foundComic.contributor}`}</h4>
        <h4 data-cy='comic-publisher' className='comic-publisher'>{`Publisher: ${foundComic.publisher}`}</h4>
        <h4 data-cy='comic-description' className='description'>Comic Description:</h4>
        <h4 data-cy='comic-description' className='description'>{foundComic.description}</h4>
      </div>
    </article>
  )
}

export default ComicDetails;
