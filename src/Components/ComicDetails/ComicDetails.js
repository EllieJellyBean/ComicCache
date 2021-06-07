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

  handleClick = buyLink => {
    window.open(buyLink)
  }

  render() {
    const { title, book_image, author, contributor, publisher, description, buy_links } = this.state.foundComic;

    return (
      <article className='details-display'>
          <NavLink to='/'>
            <i data-cy='home-button' className="fas fa-arrow-alt-circle-left fa-3x"></i>
          </NavLink>
        <div className='comic-details'>
          <img className='details-image' src={book_image} alt={`comic cover for ${title}`}/>
          <h4 data-cy='comic-author' className='comic-author'>{author}</h4>
          <h2 data-cy='details-title' className='details-title'>{title}</h2>
          <h4 data-cy='comic-description' className='description'>{description}</h4>
          <button data-cy='buy-button' className='buy-it-button details-button' onClick={() => this.handleClick(buy_links[0].url)}>BUY IT</button>
        </div>
      </article>
    )
  }
}

export default ComicDetails;
