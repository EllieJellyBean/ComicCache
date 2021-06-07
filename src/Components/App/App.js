import React, { Component } from 'react';
import AllComicsDisplay from '../AllComicsDisplay/AllComicsDisplay';
import './App.css';
import ComicDetails from '../ComicDetails/ComicDetails';
import FeaturedComic from '../FeaturedComic/FeaturedComic';
import { fetchAllComics } from '../../Utils/APICalls';
import { filterComicData } from '../../Utils/cleaningFunctions';
import NavBar from '../NavBar/NavBar';
import { Route, Link } from 'react-router-dom';

class App extends Component {
  constructor() {
    super()
      this.state = {
        allComics: [],
        featuredComic: [],
        readingList: [],
        error: '',
        isMobile: false,
      }
  }

  componentDidMount = () => {
    fetchAllComics()
      .then(comicsData => {
        const allComicsData = filterComicData(comicsData);
        (typeof comicsData === 'string') ?
          this.setState({ error: allComicsData }) :
          this.setState({ allComics: allComicsData, featuredComic: allComicsData[0]
        })
      })
      .catch(err => this.setState({ error: 'Something went wrong. Please try again later.'} ))
      if (localStorage.getItem('readingList')) {
        this.setState({ readingList: JSON.parse(localStorage.getItem('readingList')) })
      }
      window.addEventListener("resize", this.updateSize);
      window.addEventListener("load", this.updateSize);
  }

  render() {
    const linkStyle = {textDecoration: 'none', color: 'black'};
    const featuredComicButton =
    <Link to='/featured-comic' style={linkStyle}>
      <div className='nav-icon-container'>
        <i className='fas fa-star fa-1x'></i>
        <p className='nav-text'>FEATURED COMIC</p>
      </div>
    </Link>
    return (
      <main className="App">
      {this.state.isMobile ?
        <NavBar featuredComicButton={featuredComicButton} linkStyle={linkStyle}/>
       :<NavBar linkStyle={linkStyle}/>
      }
        {!this.state.allComics.length && !this.state.error && <h2>Loading Content...</h2>}
        {this.state.error && <h2>{this.state.error}</h2>}
        <Route exact path ='/'
          render={() => (
            <div className='main-container'>
              <AllComicsDisplay comicsData={this.state.allComics}
                                addToList={this.addComicToReadingList}
                                readingList={this.state.readingList}
                                removeFromList={this.removeComicFromReadingList}
                                />
              {!this.state.isMobile &&
                <FeaturedComic featuredComic={this.state.featuredComic}/>
              }

            </div>
          )}
        />
        <Route exact path ='/reading-list'
          render={() => (
            !this.state.readingList.length ?
              <div className='header-container'>
                <h3 className='list-header'>No comics in reading list!</h3>
              </div>
             :
              <div>
                <div className='header-container'>
                  <h3 className='list-header'>Reading List</h3>
                </div>
                <AllComicsDisplay
                  comicsData={this.state.readingList}
                  readingList={this.state.readingList}
                  removeFromList={this.removeComicFromReadingList}
                />
              </div>
          )}
        />
        <Route exact path ='/featured-comic'
          render={() => (
            <div>
              <FeaturedComic featuredComic={this.state.featuredComic}/>
            </div>
          )}
        />
        <Route path="/comic-details/:rank" render={({ match }) => {
          const { rank } = match.params;

          return <ComicDetails
            rank={rank}
            readingList={this.state.readingList}
            addComicToReadingList={this.addComicToReadingList}
          />
          }}
        />
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
     const filteredList = this.state.readingList.filter(comic => comic.rank !== parseInt(event.target.id));
     this.setState({ readingList: filteredList });
     setTimeout(this.setLocalStorage, 50)
   }

  setLocalStorage = () => {
    localStorage.setItem('readingList', JSON.stringify(this.state.readingList))
  }

  updateSize = () => {
    this.setState({ isMobile: window.innerWidth < 975 });
  }
}

export default App;
