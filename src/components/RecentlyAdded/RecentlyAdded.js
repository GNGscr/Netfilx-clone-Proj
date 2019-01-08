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
import { AppDiv, Hero, SliderSection, FooterSection, Hone, HeroMask, TrailerMask, TrailerWrapper } from './RecentlyAdded.styles';
import MovieItemRecentlyAdded from '../Global/MovieItem/MovieItemRecentlyAdded.view'



class RecentlyAdded extends Component {
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
    // console.log('enter')
      this.setState({
        on: !this.state.on
      })
  }
  mouseLeave = e => {
    // console.log('leave')
    this.setState({
      on: false
    })
  }

  render() {
    return (
      <AppDiv>
          <NavBar><Links /></NavBar>
          <Hero src="https://occ-0-1390-2774.1.nflxso.net/art/eb6d0/6f8b62fa1a805b0bbea4c02170e9239e592eb6d0.webp" alt=""/>
          <TrailerWrapper>
            {this.state.on && (
            <MovieItemRecentlyAdded />
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
              <Hone>Movies</Hone>
              <SliderMovies/>
              <Hone>Popular on Netflix</Hone>
              <Slider/>
              <Hone>Comedies:</Hone>
              <SliderComedy/>
              <Hone>Netflix Originals</Hone>
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

export default RecentlyAdded;

// import React, { Component } from 'react';
// import '../../styled/App.css';
// // import NavBar from '../Global/NavBar'
// import LogoAndText from './Logo_and_text/Logo_and_text';

// import NavBar from '../Global/NavBar';
// import Links from '../Global/Links';

// import { AppDiv, Hero } from './RecentlyAdded.styles';
// import Slider from '../Slider/Slider';
// import Footer from '../Global/Footer';

// class RecentlyAdded extends Component {
//   state = {
//     msg: "temp msg"
//   }
//   render() {
//     return (
//       <AppDiv>
//       <NavBar><Links /></NavBar>
//           <Hero src="https://occ-0-1390-2774.1.nflxso.net/art/eb6d0/6f8b62fa1a805b0bbea4c02170e9239e592eb6d0.webp" alt=""/>
//           <LogoAndText />
//           <Slider/>
//           {/* <Slider/>
//           <Slider/>
//           <Slider/>
//           <Slider/> */}
//           <Footer />
//       </AppDiv>
//     );
//   }
// }

// export default RecentlyAdded;

