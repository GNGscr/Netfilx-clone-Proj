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
import Footer from '../Global/Footer';
import { AppDiv, Hero, SliderSection, FooterSection, Hone, HeroMask } from './SearchPage.styles';




class App extends Component {
  state = {
    msg: "temp msg"
  }
  // async componentDidMount(){
  //     const response = await fetch('/api/hello')
  //     const data = await response.text()
  //     this.setState({msg:data});
  // }
  render() {
    return (
      <AppDiv>
          <NavBar><Links /></NavBar>
          <Hero src="https://occ-0-1390-2774.1.nflxso.net/art/47638/780b712076293b7e35f7778263f8282978647638.webp" alt=""></Hero>
          <HeroMask />
          {/* <Hero src="https://occ-0-1390-2774.1.nflxso.net/art/97e73/577e0a36fa77f3f032e4538e859c90267ab97e73.webp" alt=""></Hero> */}
          <LogoAndText />
            <SliderSection>
              <Hone>TV Shows</Hone>
              <SliderTvShows/>
              <Hone>Movies</Hone>
              <SliderMovies/>
              <Hone>Popular on Netflix</Hone>
              <Slider/>
              <Hone>Comedies:</Hone>
              <SliderComedy/>
              <Hone>Netflix Originals</Hone>
              <Slider/>
            </SliderSection>
            <FooterSection>
              <Footer />
            </FooterSection>
      </AppDiv>
    );
  }
}

export default App;



// background-image: linear-gradient(to bottom,rgba(20,20,20,0) 0,rgba(20,20,20,.15) 15%,rgba(20,20,20,.35) 29%,rgba(20,20,20,.58) 44%,#141414 68%,#141414 100%);

// const font1_medium = "https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v2/NetflixSans-Medium-Opt.woff2"
// const font2_regular = "https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v2/NetflixSans-Regular-Opt.woff2"
// const font3_icon_v1_93 = "https://assets.nflxext.com/ffe/siteui/fonts/nf-icon-v1-93.woff"




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