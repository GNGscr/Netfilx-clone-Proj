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
import { AppDiv, Hero, SliderSection, FooterSection, Hone, HeroMask, TrailerMask, TrailerWrapper } from './MyList.styles';
import MovieItemMyList from '../Global/MovieItem/MovieItemMyList.view'



class MyList extends Component {
  state = {
    on: false
  }

  // componentDidMount() {
  //   if(!this.state.on){    
  //     this.setState({
  //       on:false
  //     })
  //   }
  // }

  mouseEnter = e => {
    console.log('enter')
      this.setState({
        on: !this.state.on
      })
  }
  mouseLeave = e => {
    console.log('leave')
    this.setState({
      on: false
    })
  }
  render() {
    return (
      <AppDiv>
          <NavBar><Links /></NavBar>
          <Hero src="https://occ-0-1390-2774.1.nflxso.net/art/b2c33/224481a9d5dc45c5413582cfc1964a94f77b2c33.webp" alt=""/>
          <TrailerWrapper>
            {this.state.on && (
            <MovieItemMyList />
            )}
          </TrailerWrapper>
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

export default MyList;

// import React from 'react';
// import '../../styled/App.css';
// // import NavBar from '../Global/NavBar'
// import LogoAndText from './Logo_and_text/Logo_and_text';

// import NavBar from '../Global/NavBar';
// import Links from '../Global/Links';
// import { AppDiv, Hero } from './MyList.styles';
// import Slider from '../Slider/Slider';
// import Footer from '../Global/Footer';


// class MyList extends React.Component {
//   state = {
//     msg: "temp msg"
//   }
//   render() {
//     return (
//       <AppDiv>
//       <NavBar><Links /></NavBar>
//           <Hero src="https://occ-0-1390-2774.1.nflxso.net/art/b2c33/224481a9d5dc45c5413582cfc1964a94f77b2c33.webp" alt=""/>
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

// export default MyList;



// // link to an http shadow.png

// // {/* <img src="https://assets.nflxext.com/en_us/akira/jawBone/nav-shadow.png" alt="" /> */}
