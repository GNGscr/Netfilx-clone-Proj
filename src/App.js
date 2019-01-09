import React from 'react';
import {HashRouter, Route } from 'react-router-dom';
// import { connect } from 'react-redux';
// import NavBar from './components/Global/NavBar';
import LandingPage from './components/LandingPage/LandingPage';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import SearchPage from './components/SearchPage/SearchPage.view';
// import Links from '../src/components/Global/Links';
import ListItem from './components/ListItem/ListItem.view';
import TvShows from './components/TvShows/TvShows';
import Movies from './components/Movies/Movies';
import RecentlyAdded from './components/RecentlyAdded/RecentlyAdded';
import MyList from './components/MyList/MyList';
import Slider from './components/Slider/Slider';
import MovieItemView from './components/Global/MovieItem/MovieItem.view';

export default class App extends React.Component {
  render() {
    // const {

    // } = this.props;
    return (
  
        <HashRouter>
          <div className="main-app">
            {/* <NavBar><Links /></NavBar> */}
            <Route exact path='/' component={ SearchPage } />
            <Route path='/tv-shows' component={TvShows}></Route>
            <Route path='/movies' component={Movies}></Route>
            <Route path='/recently-added' component={RecentlyAdded}></Route>
            <Route path='/my-list' component={MyList}></Route>
            <Route path='/profiles' component={LandingPage}></Route>
            <Route path='/list-item' component={ListItem}></Route>
            <Route path='/*' component={NotFoundPage}></Route>
            <Route path='/slider' component={Slider}></Route>
            <Route path='/movie-item' component={MovieItemView}></Route>
          </div>
        </HashRouter>
  
    )
  }
}

// <TopBar><Links /></TopBar> 
// <Route exact path="/" render={ ()=> <Profiles /> }/> 
// <Route path="/movie" Component={MoviePage}></Route> 
// <Route path="/404" Component={NotFound}></Route>  


// // const font1_medium = "https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v2/NetflixSans-Medium-Opt.woff2"
// // const font2_regular = "https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v2/NetflixSans-Regular-Opt.woff2"
// // const font3_icon_v1_93 = "https://assets.nflxext.com/ffe/siteui/fonts/nf-icon-v1-93.woff"






