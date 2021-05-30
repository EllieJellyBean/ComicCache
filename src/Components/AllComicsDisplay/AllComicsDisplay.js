import React from 'react';
import SingleComic from '../SingleComic/SingleComic';
import './AllComicsDisplay.css';

const AllComicsDisplay = ({ comicsData }) => {

  const displayComics = () => {
    return comicsData.map(comic => {
      if(comic.rank !== 1){
        return (
          <SingleComic
            key={comic.rank}
            comic={comic}
          />
        )
      }
    })
  }

  return (
    <section className='comics-container'>
      {displayComics()}
    </section>
  )
}

export default AllComicsDisplay;
