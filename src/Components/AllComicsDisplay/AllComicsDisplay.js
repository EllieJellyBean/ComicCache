import React from 'react';
import SingleComic from '../SingleComic/SingleComic'

const AllComicsDisplay = ({ comicsData }) => {
  const displayComics = () => {
    return comicsData.map(comic => {
      return (
        <SingleComic
          key={comic.id}
          comic={comic}
        />
      )
    })
  }

  return (
    <div className='comic-container'>
      {displayComics}
    </div>
  )
}

export default AllComicsDisplay;
