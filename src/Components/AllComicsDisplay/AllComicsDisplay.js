import React from 'react';
import SingleComic from '../SingleComic/SingleComic';
import './AllComicsDisplay.css';
import { Link } from 'react-router-dom';

const AllComicsDisplay = ({ comicsData, addToList }) => {

  const displayComics = () => {
    return comicsData.map(comic => {
      if(comic.rank !== 1){
        return (
          <SingleComic
            key={comic.rank}
            comic={comic}
            addToList={addToList}
          />
        )
      }
    })
  }

  return (
    <div>
      <section className='comics-container'>
          {displayComics()}
      </section>
    </div>
  )
}

export default AllComicsDisplay;
