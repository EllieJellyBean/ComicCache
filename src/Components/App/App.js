import React, { Component } from 'react';
import AllComicsDisplay from '../AllComicsDisplay/AllComicsDisplay';
import NavBar from '../NavBar/NavBar'
import FeaturedComic from '../FeaturedComic/FeaturedComic'
import ComicDetails from '../ComicDetails/ComicDetails'
import { fetchAllComics } from '../../Utils/APICalls';
import { Switch, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor() {
    super()
      this.state = {
        allComics: [],
        featuredComic: [],
        readingList: [],
        error: ''
      }
  }

  componentDidMount = () => {
    fetchAllComics()
      .then(comicsData => {
        (typeof comicsData === 'string') ?
          this.setState({ error: comicsData }) :
          this.setState({ allComics: comicsData.results.books,
                          featuredComic: comicsData.results.books[0] })
      })
      .catch(err => this.setState({ error: 'Something went wrong. Please try again later.'} ))
      if (localStorage.getItem('readingList')) {
        this.setState({ readingList: JSON.parse(localStorage.getItem('readingList')) })
      }
  }

  render() {
    return (
      <main className="App">
        <NavBar />
        <Switch>
        <Route exact path ='/'
          render={() => (
            <div className='main-container'>
              <AllComicsDisplay comicsData={this.state.allComics}
                                addToList={this.addComicToReadingList}
                                readingList={this.state.readingList}
                                removeFromList={this.removeComicFromReadingList}
                                />
              <FeaturedComic featuredComic={this.state.featuredComic}/>
            </div>
          )}
        />
        <Route exact path ='/reading-list'
          render={() => (
            !this.state.readingList.length ? <h1>No comics in reading list</h1>
            : <div>
                <h1>Reading List</h1>
                <AllComicsDisplay comicsData={this.state.readingList}
                                  readingList={this.state.readingList}
                                  removeFromList={this.removeComicFromReadingList}
                                  />
              </div>
          )}
        />
        <Route path="/comic-details/:rank" render={({ match }) => {
          const { rank } = match.params;
          const foundComic = this.state.allComics[rank - 1];

          return <ComicDetails
            rank={rank}
            foundComic={foundComic}
          />
          }}
        />
        </Switch>
      </main>
    )
  }

  addComicToReadingList = (event) => {
     const readingList = this.state.readingList
     const comicToAdd = this.state.allComics.find( comic => comic.rank === parseInt(event.target.id))
       if (!readingList.includes(comicToAdd)) {
        this.setState({readingList: [...readingList, comicToAdd]})
        setTimeout(this.setLocalStorage, 50)
  }
}

  removeComicFromReadingList = (event) => {
     const filteredList = this.state.readingList.filter(comic => comic.rank != parseInt(event.target.id));
     this.setState({ readingList: filteredList });
     setTimeout(this.setLocalStorage, 50)
   }

  setLocalStorage = () => {
    localStorage.setItem('readingList', JSON.stringify(this.state.readingList))
  }
}

export default App;
