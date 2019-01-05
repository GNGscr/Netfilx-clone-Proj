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
import { AppDiv, Hero, SliderSection, FooterSection, Hone, HeroMask, TrailerMask } from './Movies.styles';
import MovieItemMovies from '../Global/MovieItem/MovieItemMovies.view'



class Movies extends Component {
  state = {
    on: false
  }

  mouseEnter = e => {
    console.log('enter')
      this.setState({
        on: !this.state.on
      })
  }
  mouseLeave = e => {
    console.log('leave')
    this.setState({
      on: !this.state.on
    })
  }

  render() {
    return (
      <AppDiv>
          <NavBar><Links /></NavBar>
          <Hero src="https://occ-0-1390-2774.1.nflxso.net/art/b22b1/6ba4d7d1ac9eca044cc84278f18b8cd3057b22b1.webp" alt=""/>
          <>
            {this.state.on && (
            <MovieItemMovies />
            )}
          </>
          <TrailerMask
          onMouseEnter={this.mouseEnter}
          onMouseLeave={this.mouseLeave}
          />
          <HeroMask />
          <LogoAndText />
            <SliderSection>
              <Hone>TV Shows</Hone>
              <SliderTvShows/>
              <Hone>More from Netflix</Hone>
              <SliderFull/>
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

export default Movies;

// import React from 'react';
// import '../../styled/App.css';
// // import NavBar from '../Global/NavBar'
// import LogoAndText from './Logo_and_text/Logo_and_text';

// import NavBar from '../Global/NavBar';
// import Links from '../Global/Links';
// import { AppDiv, Hero } from './Movies.styles';
// import Slider from '../Slider/Slider';
// import Footer from '../Global/Footer';

// class Movies extends React.Component {
//   state = {
//     msg: "temp msg"
//   }
//   render() {
//     return (
//       <AppDiv>
//       <NavBar><Links /></NavBar>
//           <Hero src="https://occ-0-1390-2774.1.nflxso.net/art/b22b1/6ba4d7d1ac9eca044cc84278f18b8cd3057b22b1.webp" alt=""/>
//           <LogoAndText />
//           <Slider/>
//           <Slider/>
//           <Slider/>
//           <Slider/>
//           <Slider/>
//           <Footer />
//       </AppDiv>
//     );
//   }
// }

// export default Movies;



