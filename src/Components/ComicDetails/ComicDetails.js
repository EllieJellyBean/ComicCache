import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { fetchAllComics } from '../../Utils/APICalls';
import './ComicDetails.css';

class ComicDetails extends Component {
  constructor(props) {
    super(props);
      this.state = {
        rank: props.rank - 1,
        comicsData: [],
        error: '',
        foundComic: {}
      }
  }

  componentDidMount = () => {
    fetchAllComics()
      .then(comicsData => {
        (typeof comicsData === 'string') ?
          this.setState({ error: comicsData }) :
          this.setState({ foundComic: comicsData.results.books[this.state.rank] })
      })
      .catch(err => this.setState({ error: 'Something went wrong. Please try again later.'} ))
  }

  render() {
    const { title, book_image, author, contributor, publisher, description } = this.state.foundComic;

    return (
      <article className='details-display'>
        <NavLink to='/'><button data-cy='home-button' className='home-button'>Back to Home</button></NavLink>
        <div className='comic-details'>
          <img className='details-image' src={book_image} alt={`comic cover for ${title}`}/>
          <h4 data-cy='comic-author' className='comic-author'>{author}</h4>
          <h2 data-cy='details-title' className='details-title'>{title}</h2>
          <h4 data-cy='comic-publisher' className='comic-publisher'>{`Published by ${publisher}`}</h4>
          <h4 data-cy='comic-description' className='description'>{description}</h4>
        </div>
      </article>
    )
  }
}

export default ComicDetails;
