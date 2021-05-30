import React, { Component } from 'react';
import AllComicsDisplay from '../AllComicsDisplay/AllComicsDisplay';
import NavBar from '../NavBar/NavBar'
import SingleComic from '../SingleComic/SingleComic';
import FeaturedComic from '../FeaturedComic/FeaturedComic'
import { fetchAllComics } from '../../Utils/APICalls';
import './App.css';

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
        <AllComicsDisplay comicsData={this.state.allComics}/>
        <FeaturedComic featuredComic={this.state.featuredComic}/>
      </main>
    )
  }
}

export default App;
