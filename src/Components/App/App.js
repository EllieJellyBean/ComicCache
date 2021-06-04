import React, { Component } from 'react';
import AllComicsDisplay from '../AllComicsDisplay/AllComicsDisplay';
import NavBar from '../NavBar/NavBar'
// import HamburgerMenu from '../HamburgerMenu/HamburgerMenu'
import FeaturedComic from '../FeaturedComic/FeaturedComic'
import ComicDetails from '../ComicDetails/ComicDetails'
import { fetchAllComics } from '../../Utils/APICalls';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';

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
        (typeof comicsData === 'string') ?
          this.setState({ error: comicsData }) :
          this.setState({ allComics: comicsData.results.books,
                          featuredComic: comicsData.results.books[0] })
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
        <Switch>
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
            !this.state.readingList.length ? <h1>No comics in reading list</h1>
            : <div>
                <h1>Reading List</h1>
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

  showMenu = () => {
    this.setState({ menuIsVisible: !this.state.menuIsVisible });
  }
}

export default App;
