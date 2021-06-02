import React from 'react';
import { NavLink } from 'react-router-dom';
import './ComicDetails.css';

const ComicDetails = (props) => {
  const { rank, foundComic, addComicToReadingList } = props;

  return (
    <article className='details-display'>
      <NavLink to='/'><button data-cy='home-button' className='home-button'>Back to Home</button></NavLink>
      <div className='comic-details'>
        <h2 data-cy='details-title' className='details-title'>{foundComic.title}</h2>
        <img className='details-image' src={foundComic.book_image} alt={`comic cover for ${foundComic.title}`}/>
        <h4 data-cy='comic-author' className='comic-author'>{`Author: ${foundComic.author}`}</h4>
        <h4 data-cy='comic-contributor' className='comic-contributor'>{`Contributor: ${foundComic.contributor}`}</h4>
        <h4 data-cy='comic-publisher' className='comic-publisher'>{`Publisher: ${foundComic.publisher}`}</h4>
        <h4 data-cy='comic-description' className='description'>Comic Description:</h4>
        <h4 data-cy='comic-description' className='description'>{foundComic.description}</h4>
        <button id={rank} onClick={addComicToReadingList}> Add to reading list</button>
      </div>
    </article>
  )
}

export default ComicDetails;
