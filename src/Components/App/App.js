import React, { Component } from 'react';
import AllComicsDisplay from '../AllComicsDisplay/AllComicsDisplay';
import SingleComic from '../SingleComic/SingleComic';
import { Route, Switch } from 'react-router-dom';
import { fetchAllComics } from '../../Utils/APICalls';
import './App.css';

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
        this.setState({ allComics: comicsData.results.books })
      })
      .catch(err => this.setState({ error: 'Something went wrong. Please try again later.'} ))
  }

  render() {
    console.log(this.state.allComics)

    return (
      <>
        <div className="App">
          {this.state.error && <h3 className='error-msg'>{this.state.error}</h3>}
          {!this.state.error &&
            <Switch>
              <Route exact path="/" render={() => {
                <AllComicsDisplay
                  comicsData={this.state.allComics}
                />
              }}
              />
            </Switch>
        </div>
      </>
    )
  }

}

export default App;
