import React, { Component } from 'react';
import AllComicsDisplay from '../AllComicsDisplay/AllComicsDisplay';
import SingleComic from '../SingleComic/SingleComic';
import { fetchAllComics } from '../../Utils/APICalls';
import './App.css';
import FeaturedComic from '../FeaturedComic/FeaturedComic'

class App extends Component {
  constructor() {
    super()
      this.state = {
        allComics: [],
        featuredComic: []
      }
  }

  componentDidMount = () => {
    fetchAllComics()
      .then(comicsData => {
        (typeof comicsData === 'string') ?
          this.setState({ error: comicsData }) :
          this.setState({ allComics: comicsData.results.books, featuredComic: comicsData.results.books[0] })
      })
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
