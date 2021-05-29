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
        allComics: []
      }
  }

  componentDidMount = () => {
    fetchAllComics()
      .then(comicsData => {
        (typeof comicsData === 'string') ?
          this.setState({ error: comicsData }) :
          this.setState({ allComics: comicsData.results.books })
      })
  }

  render() {
    return (
      <div className="App">
        <FeaturedComic featuredComic={this.state.allComics[0]}/>
      </div>
    )
 }
}

export default App;
