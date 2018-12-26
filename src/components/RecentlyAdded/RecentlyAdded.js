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
import { AppDiv, Hero, SliderSection, FooterSection, Hone, HeroMask } from './RecentlyAdded.styles';




class RecentlyAdded extends Component {
  state = {
    msg: "temp msg"
  }

  render() {
    return (
      <AppDiv>
          <NavBar><Links /></NavBar>
          <Hero src="https://occ-0-1390-2774.1.nflxso.net/art/eb6d0/6f8b62fa1a805b0bbea4c02170e9239e592eb6d0.webp" alt=""/>
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

