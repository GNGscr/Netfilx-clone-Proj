import React, { Component } from 'react';
import '../../styled/App.css';
// import NavBar from '../Global/NavBar'
import LogoAndText from './Logo_and_text/Logo_and_text';

import NavBar from '../Global/NavBar';
import Links from '../Global/Links';
import Slider from '../Slider/Slider';
import SliderTvShows from '../SliderTvShows/SliderTvShows';
import SliderMovies from '../SliderMovies/SliderMovies';
import SliderComedy from '../SliderComedy/SliderComedy';
import SliderFull from '../SliderFull/SliderFull';
import Footer from '../Global/Footer';
import { AppDiv, Hero, SliderSection, FooterSection, Hone, HeroMask, TrailerMask } from './SearchPage.styles';
// import MovieItem from '../Global/MovieItem/MovieItem.view'
// , Trailer

class App extends Component {
  state = {
    mouseEntered: false,
    dspflx: 'none'
  }

  toggle_trailer = e => {
    console.log('works')
    if(this.state.dspflx) {
      this.setState({
        mouseEntered: false,
        dspflx: 'none'
      })
    } else {
      this.setState({
        mouseEntered: true,
        dspflx: 'flex'
      })
    }
  }

  // mouseLeave = e => {
  //   this.setState({
  //     mouseEntered: false,
  //     dspflx: 'none'
  //   })
  // }

  render() {
    return (
      <AppDiv>
          <NavBar><Links /></NavBar>
          <Hero
          src="https://occ-0-1390-2774.1.nflxso.net/art/47638/780b712076293b7e35f7778263f8282978647638.webp" alt=""></Hero>
          {/* <Player onClick={this.toggle_trailer}></Player> */}
          {/* <Trailer><MovieItem /></Trailer> */}
          <TrailerMask/>
          {/* <Trailer dsp={this.state.dspflx}><MovieItem /></Trailer> */}
          <HeroMask></HeroMask>
          {/* <Hero src="https://occ-0-1390-2774.1.nflxso.net/art/97e73/577e0a36fa77f3f032e4538e859c90267ab97e73.webp" alt=""></Hero> */}
          <LogoAndText />
            <SliderSection>
              <Hone>Netflix Originals</Hone>
              <Slider/>
              <Hone>Movies</Hone>
              <SliderMovies/>
              <Hone>TV Shows</Hone>
              <SliderTvShows/>
              <Hone>Comedies:</Hone>
              <SliderComedy/>
              <Hone>Popular on Netflix</Hone>
              <Slider/>
              <Hone>More from Netflix</Hone>
              <SliderFull/>
            </SliderSection>
            <FooterSection>
              <Footer />
            </FooterSection>
      </AppDiv>
    );
  }
}

export default App;






// import React,{ Component } from 'react'

// import {
//     // BrowserRouter,
//     HashRouter,
//     Route
// } from 'react-router-dom';
// // import { connect } from 'react-redux'

// import Browse from './components/Browse';


// class App extends Component {
//     render() {
//         // const {

//         // } = this.props;

//         return (
//             <div>
//                 <HashRouter>
//                     <div className="main-app">
//                         <Route exact path="/browse" Component={Browse}></Route>   {/* Search Page */}
//                     </div>
//                 </HashRouter>
//             </div>
//         )
//       }
//     }
    
//     export default (App)


    // {           /*             <TopBar><Links /></TopBar>      */   } 
    // {/*   <Route exact path="/" render={ ()=> <Profiles /> }/>  {/* Landing Page */} */}
    // { /*}     <Route path="/movie" Component={MoviePage}></Route> {/* Movie Page */} */}
    // {/*    {/*  <Route path="/404" Component={NotFound}></Route>    {/* Error Page*/} */}




// Github :
// =======


// …or push an existing repository from the command line
//------------------------------------------------------------
//     git remote add origin git@github.com:GNGscr/Netfilx-clone-Proj.git
//     git push -u origin master



// …or create a new repository on the command line
//--------------------------------------------------

// echo "# Netfilx-clone-Proj" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git remote add origin git@github.com:GNGscr/Netfilx-clone-Proj.git
// git push -u origin master