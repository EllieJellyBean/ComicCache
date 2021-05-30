import React from 'react';
import { NavLink } from 'react-router-dom';
import './ComicDetails.css';

const ComicDetails = ({ rank, foundComic }) => {
  const {  author, book_image, contributor, description, publisher, title } = foundComic;

  return (
    <article className='details-display'>
    <div className='comic-details'>
      <h2 data-cy='details-title' className='details-title'>{title}</h2>
      <img className='details-image' src={book_image} alt={`comic cover for ${title}`}/>
      <h4 data-cy='comic-author' className='comic-author'>{`Author: ${author}`}</h4>
      <h4 data-cy='comic-contributor' className='comic-contributor'>{`Contributor: ${contributor}`}</h4>
      <h4 data-cy='comic-publisher' className='comic-publisher'>{`Publisher: ${publisher}`}</h4>
      <h4 data-cy='comic-description' className='description'>Comic Description:</h4>
      <h4 data-cy='comic-description' className='description'>{description}</h4>
      <NavLink to='/'><button data-cy='home-button' className='home-button'>Back to Home</button></NavLink>
    </div>
    </article>
  )
}

export default ComicDetails;
