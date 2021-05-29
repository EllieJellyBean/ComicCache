import React, { Component } from 'react';
import AllComicsDisplay from '../AllComicsDisplay/AllComicsDisplay';
import SingleComic from '../SingleComic/SingleComic';
import { Route, Switch } from 'react-router-dom';
import { fetchAllComics } from '../../Utils/APICalls';
import './App.css';
import FeaturedComic from '../FeaturedComic/FeaturedComic'

class App extends Component {
  constructor() {
    super()
      this.state = {
        allComics: [],
        featuredComic: [],
        error: ''
      }
  }

  componentDidMount = () => {
    fetchAllComics()
      .then(comicsData => {
        (typeof comicsData === 'string') ?
          this.setState({ error: comicsData }) :
          this.setState({ allComics: comicsData.results.books, featuredComic: comicsData.results.books[0] })
      })
      .catch(err => this.setState({ error: 'Something went wrong. Please try again later.'} ))
  }

  render() {
    return (
      <main className="App">
        <FeaturedComic featuredComic={this.state.featuredComic}/>
      </main>
    )
  }
}

export default App;
