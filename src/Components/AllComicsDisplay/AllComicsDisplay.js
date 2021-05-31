import React from 'react';
import SingleComic from '../SingleComic/SingleComic';
import './AllComicsDisplay.css';
import { Link } from 'react-router-dom';
let inReadingList;

const AllComicsDisplay = ({ comicsData, addToList, readingList, removeFromList }) => {

  const displayComics = () => {
    return comicsData.map(comic => {
      if(readingList.includes(comic)) {
         inReadingList = true;
      } else {
         inReadingList = false;
      }
      if(comic.rank !== 1){
        return (
          <SingleComic
            key={comic.rank}
            comic={comic}
            addToList={addToList}
            removeFromList={removeFromList}
            isInReadingList= {inReadingList}
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
