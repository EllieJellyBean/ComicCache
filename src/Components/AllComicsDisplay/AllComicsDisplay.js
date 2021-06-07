import React from 'react';
import SingleComic from '../SingleComic/SingleComic';
import './AllComicsDisplay.css';
let inReadingList;

const AllComicsDisplay = ({ comicsData, addToList, readingList, removeFromList }) => {

  const displayComics = () => {
    const readingRank = readingList.map(comic => comic.rank)
    
    return comicsData.map(comic => {
      if(readingRank.includes(comic.rank)) {
         inReadingList = true;
      } else {
         inReadingList = false;
      }
      
      return (
        <SingleComic
          key={comic.rank}
          comic={comic}
          addToList={addToList}
          removeFromList={removeFromList}
          isInReadingList={inReadingList}
        />
      )
    })
  }

  return (
    <div>
      <div className='header-container'>
        <h3 className='top-header'>TOP 10 THIS WEEK</h3>
      </div>
      <section className='comics-container'>
          {displayComics()}
      </section>
    </div>
  )
}

export default AllComicsDisplay;